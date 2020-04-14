import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core'	
import Navbar from './components/Nav.js'
import fetch from 'node-fetch'
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pronunciation: '',
			germ_word: 'Loading...',
			eng_word: '',
			eng_def: ''
		}
	}


	async componentDidMount() {

		let result = await fetch(`http://localhost:7000/getrandomword`)
		result = await result.json()
		console.log(result)
		this.setState(
			{
				pronunciation: result.pronunciation,
				germ_word: result.translatedWord,
				eng_word: result.randomWord,
				eng_def: result.definition

			}
		)

	}

	render() {
		return(
			<div className="App">
					<Router history={history}>
					<Navbar/>
					<div id="wordData">
						<p>{this.state.pronunciation}</p>
						<h1>{this.state.germ_word}</h1>
						<h2>{this.state.eng_word}</h2>
						<p>{this.state.eng_def}</p>
					</div>

				<Switch>
					<Route path="/" exact />
					<PrivateRoute path="/profile" component={Profile} />
					</Switch>
				</Router>
			</div>
		)
	}
}


export default App;