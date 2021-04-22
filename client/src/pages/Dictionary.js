import React, { Component } from 'react';
import Navbar from '../components/Nav.js'
import Sidebar from '../components/Sidebar.js'



class Home extends Component {

	render() {
		return(
			<div className="Home">
					<Navbar/>
                    <Sidebar/>
		
			</div>
		)
	}
}


export default Home;