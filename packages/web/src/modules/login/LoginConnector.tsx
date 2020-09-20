import React from "react";
import LoginView from "./ui/LoginView";
import { LoginController } from "@airbnb-clone/controller";
import { RouteComponentProps } from "react-router-dom";

export default function LoginConnector(props: RouteComponentProps<{}>) {
  const onFinish = () => {
    props.history.push("/");
    return null;
  };
  return (
    <>
      <LoginController>
        {({ submit }) => <LoginView onFinish={onFinish} submit={submit} />}
      </LoginController>
    </>
  );
}
