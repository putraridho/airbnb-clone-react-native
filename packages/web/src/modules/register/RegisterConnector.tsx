import React from "react";
import RegisterView from "./ui/RegisterView";
import { RegisterController } from "@airbnb-clone/controller";

export default function RegisterConnector() {
  return (
    <>
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      </RegisterController>
    </>
  );
}
