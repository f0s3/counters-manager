import {
	BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Home } from "./Home"

function App() {
	return (
		<Router>
				<Switch>
					<Route exact path="/" children={<Home />}/>
				</Switch>
		</Router>
	);
}

export default App;
