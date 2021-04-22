import React, { Component } from 'react';

class WordData extends Component {
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
            <div id="wordData">
                <p>{this.state.pronunciation}</p>
                <h1>{this.state.germ_word}</h1>
                <h2>{this.state.eng_word}</h2>
                <p>{this.state.eng_def}</p>
            </div>
        )
    }
}

export default WordData;