import React from "react";
import { Button } from '@material-ui/core';
import { useAuth0 } from "../react-auth0-spa";
import request from 'request'
require('dotenv').config()

function SaveButton(props) {
    const { isAuthenticated, loginWithRedirect, user} = useAuth0()

    async function handleSave() {
        var options = {
            method: 'POST',
            url: 'https://dev-1lrmh4zz.au.auth0.com/oauth/token',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            form: {
              grant_type: 'client_credentials',
              client_id: 'ml8evFUil0c0jDQb7cXyZCOP7eYrwzrV',
              client_secret: 'YOUR_CLIENT_SECRET',
              audience: 'https://dev-1lrmh4zz.au.auth0.com/api/v2/'
            }
          };
          
          request(options, function (error, response, body) {
            if (error) throw new Error(error);
          
            console.log(body);
          });

    }
    return(
        <div>
            {!isAuthenticated && (
                <Button variant='contained' color="secondary" onClick={() => loginWithRedirect({})}>Login to save</Button>
            )}
            {isAuthenticated && (
                <Button variant='contained' color="secondary" onClick={handleSave}>Save</Button>
            )}

        </div>
    )
}


export default SaveButton;