import React from "react";
import { Button } from '@material-ui/core';
import { useAuth0 } from "../react-auth0-spa";
import axios from 'axios'
import querystring from 'querystring'




function SaveButton(props) {
    const { isAuthenticated, loginWithRedirect, user, loading} = useAuth0()

    async function getAuthToken() {
        try{
            let res = await axios.post('https://dev-1lrmh4zz.au.auth0.com/oauth/token', {
                "client_id": props.client_id,
                "client_secret": props.client_secret,
                "audience": "https://dev-1lrmh4zz.au.auth0.com/api/v2/",
                "grant_type": "client_credentials"
            })
            return res.data.access_token
        } catch(err) {
            console.error(err)
        }
        
    }
    
    async function getUserId(token, email) {
        let res = await axios.get('https://dev-1lrmh4zz.au.auth0.com/api/v2/users-by-email', {
            qs: {email: email},
            headers: {'Authorization': `Bearer ${token}`}
        })
    }

    async function handleSave() {
        console.log(props.client_id, props.client_secret)
        let token = await getAuthToken()
        let userId = await getUserId(token, user.email)
    }
    
    return(
        <div>
            {!loading && !isAuthenticated && (
                <Button variant='contained' color="secondary" onClick={() => loginWithRedirect({})}>Login to save</Button>
            )}

            {!loading && isAuthenticated && (
                <Button variant='contained' color="secondary" onClick={handleSave}>Save</Button>
            )}

        </div>
    )
}


export default SaveButton;