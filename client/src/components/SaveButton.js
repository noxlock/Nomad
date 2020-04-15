import React, { Component } from "react";
import { useAuth0 } from "../react-auth0-spa";


class SaveButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    handleSave = () => {
        let { user } = useAuth0()

    }

    render() {
		return(
            <Button variant='contained' color='seconday' onClick={handleSave}>Save</Button>
		)
	}
} 


export default SaveButton;