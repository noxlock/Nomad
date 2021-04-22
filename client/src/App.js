import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home.js"
import Dictionary from "./pages/Dictionary.js"




class App extends Component {

	render() {
		return(
			<div className="App">
					<Router history={history}>

					<Switch>
						<Route exact path="/">
                            <Home/>
                        </Route>
						<PrivateRoute path="/profile" component={Profile} />
                        <PrivateRoute path="/dictionary" component={Dictionary} />
					</Switch>
				</Router>
			</div>
		)
	}
}


export default App;
