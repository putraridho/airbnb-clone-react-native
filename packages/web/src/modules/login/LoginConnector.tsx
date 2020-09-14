import React from "react";
import LoginView from "./ui/LoginView";
import { LoginController } from "@airbnb-clone/controller";

export default function LoginConnector() {
  return (
    <>
      <LoginController>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    </>
  );
}
