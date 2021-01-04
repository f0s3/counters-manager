import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"
import { Home } from "./Home"
import { History } from "./History"

export function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" children={<Home />}/>
				<Route exact path="/services/:id/history" children={<History />}/>
			</Switch>
		</Router>
	)
}
