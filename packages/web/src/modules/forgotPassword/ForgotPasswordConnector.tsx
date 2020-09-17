import React from "react";
import ForgotPasswordView from "./ui/ForgotPasswordView";

export default function ForgotPasswordConnector() {
  const dummy = async (values: any) => {
    console.log(values);
    return null;
  };
  return <ForgotPasswordView submit={dummy} />;
}
