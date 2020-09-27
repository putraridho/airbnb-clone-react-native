import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterConnector from "modules/register/RegisterConnector";
import LoginConnector from "modules/login/LoginConnector";
import ForgotPasswordConnector from "modules/forgotPassword/ForgotPasswordConnector";
import ChangePasswordConnector from "modules/changePassword/ChangePasswordConnector";
import TextPage from "modules/TextPage";
import { AuthRoute } from "@airbnb-clone/controller";
import CreateListingConnector from "modules/listing/create/CreateListingConnector";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/register" component={RegisterConnector} />
      <Route exact path="/login" component={LoginConnector} />
      <Route
        exact
        path="/forgot-password"
        component={ForgotPasswordConnector}
      />
      <Route
        exact
        path="/change-password/:key"
        component={ChangePasswordConnector}
      />
      <Route path="/m" component={TextPage} />
      <AuthRoute path="/create-listing" component={CreateListingConnector} />
    </Switch>
  </BrowserRouter>
);
