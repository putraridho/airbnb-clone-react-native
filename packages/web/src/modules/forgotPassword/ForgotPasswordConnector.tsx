import { ForgotPasswordController } from "@airbnb-clone/controller";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ForgotPasswordView from "./ui/ForgotPasswordView";

export default function ForgotPasswordConnector(
  props: RouteComponentProps<{}>
) {
  const onFinish = () => {
    props.history.push("/m/reset-password", {
      message: "check your email to reset your password",
    });
    return null;
  };
  return (
    <ForgotPasswordController>
      {({ submit }) => (
        <ForgotPasswordView onFinish={onFinish} submit={submit} />
      )}
    </ForgotPasswordController>
  );
}
