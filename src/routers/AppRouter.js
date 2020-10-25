import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "../components/ui/Navbar";
import ManagerRouter from "./ManagerRouter";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route path="/auth" component={ AuthRouter } />
                <Navbar managerRouter={ ManagerRouter }/>
            </Switch>
        </div>
    </Router>
  );
}

export default AppRouter;