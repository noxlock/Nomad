import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Nav.js'
import fetch from 'node-fetch'
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import SaveButton from "./components/SaveButton.js"



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

		let result = await fetch(`https://nomad-react.herokuapp.com/getrandomword`)
		result = await result.json()
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

					<SaveButton client_id={process.env.REACT_APP_CLIENT_ID} client_secret={process.env.REACT_APP_CLIENT_SECRET}></SaveButton>

					<Switch>
						<Route exact path="/"/>
						<PrivateRoute path="/profile" component={Profile} />
					</Switch>
				</Router>
			</div>
		)
	}
}


export default App;
