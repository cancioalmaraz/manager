import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import Navbar from "../components/ui/Navbar";
import ManagerRouter from "./ManagerRouter";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { startLoadEmployees } from '../actions/employee';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged( user => {
      if ( user?.uid ){
        dispatch( login( user.uid, user.displayName ) );
        setIsLoggedIn( true );
        dispatch( startLoadEmployees() );
      } else {
        setIsLoggedIn( false );
      }
      setChecking( false );
    });
  }, [ dispatch ]);

  if ( checking ){
    return (<h1>Revisando Logueo...</h1>);
  }

  return (
    <Router>
        <div>
            <Switch>

                <PublicRoute
                    isAuthenticate={ isLoggedIn }
                    path="/auth"
                    component={ AuthRouter }
                />

                <PrivateRoute
                    isAuthenticate={ isLoggedIn }
                    path="/"
                    component={ Navbar }
                    managerRouter={ ManagerRouter }
                />

                <Redirect to="/auth/login" />

            </Switch>
        </div>
    </Router>
  );
}

export default AppRouter;