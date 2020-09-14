import React from "react";
import { RegisterController } from "@airbnb-clone/controller";
import RegisterView from "./ui/RegisterView";

export default function RegisterConnector() {
  return (
    <RegisterController>
      {({ submit }) => <RegisterView submit={submit} />}
    </RegisterController>
  );
}
