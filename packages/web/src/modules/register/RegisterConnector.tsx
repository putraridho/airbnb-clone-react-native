import React from "react";
import RegisterView from "./ui/RegisterView";
import { RegisterController } from "@airbnb-clone/controller";
import { RouteComponentProps } from "react-router-dom";

export default function RegisterConnector(props: RouteComponentProps<{}>) {
  const onFinish = () => {
    props.history.push("/m/confirm-email", {
      message: "check your email to confirm your account",
    });
    return null;
  };

  return (
    <>
      <RegisterController>
        {({ submit }) => <RegisterView onFinish={onFinish} submit={submit} />}
      </RegisterController>
    </>
  );
}
