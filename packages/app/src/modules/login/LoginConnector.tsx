import React from "react";
import { LoginController } from "@airbnb-clone/controller";
import LoginView from "./ui/LoginView";
import { SID_KEY } from "../shared/constants";
import { setItemAsync } from "expo-secure-store";

export default function LoginConnector() {
  const saveSessionId = (sid: string) => {
    setItemAsync(SID_KEY, sid);
  };
  return (
    <LoginController onSessionId={saveSessionId}>
      {({ submit }) => <LoginView submit={submit} />}
    </LoginController>
  );
}
