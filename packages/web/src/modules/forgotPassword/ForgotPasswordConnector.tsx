import { ForgotPasswordController } from "@airbnb-clone/controller";
import React from "react";
import ForgotPasswordView from "./ui/ForgotPasswordView";

export default function ForgotPasswordConnector() {
  return (
    <ForgotPasswordController>
      {({ submit }) => <ForgotPasswordView submit={submit} />}
    </ForgotPasswordController>
  );
}
