import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LocalBoardsScreen from "../components/boards/LocalBoardsScreen";
import TrelloBoardsScreen from "../components/boards/TrelloBoardsScreen";
import LocalEmployeesScreen from "../components/employees/LocalEmployeesScreen";
import TrelloEmployeesScreen from "../components/employees/TrelloEmployeesScreen";
import SettingsScreen from "../components/settings/SettingsScreen";

const ManagerRouter = () => {
  return (
    <Switch>
        <Route exact path="/" component={ LocalBoardsScreen }/>
        <Route exact path="/boards/trello" component={ TrelloBoardsScreen }/>
        <Route exact path="/employees" component={ LocalEmployeesScreen }/>
        <Route exact path="/employees/trello" component={ TrelloEmployeesScreen }/>
        <Route exact path="/settings" component={ SettingsScreen }/>
        <Redirect to="/" />
    </Switch>
  );
}

export default ManagerRouter;