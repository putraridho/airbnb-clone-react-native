import React from "react";

import { MemoryRouter, Route, Switch } from "react-router-native";
import LoginConnector from "../modules/login/LoginConnector";
import RegisterConnector from "../modules/register/RegisterConnector";

export const Routes = () => (
  <MemoryRouter initialEntries={["/login"]}>
    <Switch>
      <Route exact path="/register" component={RegisterConnector} />
      <Route exact path="/login" component={LoginConnector} />
    </Switch>
  </MemoryRouter>
);
