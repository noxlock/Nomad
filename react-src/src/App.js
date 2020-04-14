import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core'
const fetch = require('node-fetch')

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pronunciation: 'Pronunciation loading...',
			germ_word: 'German loading...',
			eng_word: 'English loading...',
			eng_def: 'Definition loading...'
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
				<div id="wordData">
					<p>{this.state.pronunciation}</p>
					<h1>{this.state.germ_word}</h1>
					<h2>{this.state.eng_word}</h2>
					<p>{this.state.eng_def}</p>
				</div>
			<Button color='secondary'>Hey there!</Button>
			</div>
		)
	}
}


export default App;
