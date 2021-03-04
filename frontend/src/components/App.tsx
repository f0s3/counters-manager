import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"
import { useGoogleLogin } from "react-google-login"
import { useSelector } from "react-redux"
import { Home } from "./Home"
import { History } from "./History"
import { Login } from "./Login"
import { googleClientId, loginOnSuccess } from "../services/googleLogin"

export function App() {
	const user = useSelector(({ user }) => user.user)
	const { loaded } = useGoogleLogin({
		clientId: googleClientId,
		onSuccess: loginOnSuccess,
		onFailure: console.error,
		isSignedIn: true,
		cookiePolicy: 'single_host_origin'
	})

	if (!loaded)
		return <h1>Zdarova Tvarina</h1>

	if (!user)
		return <Login />

	return (
		<Router>
			<Switch>
				<Route exact path="/" children={<Home />}/>
				<Route exact path="/services/:id/history" children={<History />}/>
			</Switch>
		</Router>
	)
}
