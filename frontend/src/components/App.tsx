import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"
import { useSelector } from "react-redux"
import { Home } from "./Home"
import { History } from "./History"
import { Login } from "./Login"

export function App() {
	const user = useSelector(({ user }) => user.user)

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
