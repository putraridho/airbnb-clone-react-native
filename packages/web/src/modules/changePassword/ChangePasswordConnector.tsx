import React from "react";
import ChangePasswordView from "./ui/ChangePasswordView";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordController } from "@airbnb-clone/controller";

export default function ChangePasswordConnector({
  match: {
    params: { key },
  },
}: RouteComponentProps<{ key: string }>): React.ReactElement {
  return (
    <ChangePasswordController>
      {({ submit }) => (
        <ChangePasswordView
          submit={({ newPassword }) => submit({ newPassword, key })}
        />
      )}
    </ChangePasswordController>
  );
}
