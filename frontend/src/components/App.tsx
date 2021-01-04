import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"
import { Home } from "./Home"

export function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" children={<Home />}/>
			</Switch>
		</Router>
	)
}
