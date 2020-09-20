import React from "react";
import ChangePasswordView from "./ui/ChangePasswordView";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordController } from "@airbnb-clone/controller";

export default function ChangePasswordConnector({
  match: {
    params: { key },
  },
  history,
}: RouteComponentProps<{ key: string }>): React.ReactElement {
  const onFinish = () => {
    history.push("/login");
    return null;
  };

  return (
    <ChangePasswordController>
      {({ submit }) => (
        <ChangePasswordView token={key} onFinish={onFinish} submit={submit} />
      )}
    </ChangePasswordController>
  );
}
