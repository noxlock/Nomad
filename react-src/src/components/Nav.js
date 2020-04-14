import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  	const classes = useStyles();
  	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


  return (
    <div className={classes.root}>
      <AppBar color='secondary' position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
		  <div>


		<Button color="inherit" component={Link} to="/profile">Profile</Button>	


		<Button color="inherit" component={Link} to="/profile">Dictionary</Button>


      	{!isAuthenticated && (
		  <Button color="inherit" onClick={() => loginWithRedirect({})}>Login</Button>)}
      	{isAuthenticated && 
	  	<Button color="inherit" onClick={() => logout()}>Logout</Button>}

		
    </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}