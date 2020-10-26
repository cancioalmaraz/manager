import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginScreen from "../components/Auth/LoginScreen";
import RegisterScreen from "../components/Auth/RegisterScreen";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#5C62C5',
    display: 'grid',
    flexGrow: 1,
    textAlign: 'center',
    height: '100vh'
  }
}));

const AuthRouter = () => {

  const classes = useStyles();

  return (
    <Grid className={ classes.root }>
        <Switch>
            <Route exact path="/auth/login" component={ LoginScreen }/>
            <Route exact path="/auth/register" component={ RegisterScreen }/>
            <Redirect to="/auth/login" />
        </Switch>
    </Grid>
  );
}

export default AuthRouter;