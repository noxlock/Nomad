import React, { Component } from 'react';
import SaveButton from "../components/SaveButton.js";
import WordData from "../components/WordData.js";
import Navbar from '../components/Nav.js'



class Home extends Component {

	render() {
		return(
			<div className="Home">
					<Navbar/>

                    <WordData></WordData>

					<SaveButton client_id={process.env.REACT_APP_CLIENT_ID} client_secret={process.env.REACT_APP_CLIENT_SECRET}></SaveButton>
			</div>
		)
	}
}


export default Home;