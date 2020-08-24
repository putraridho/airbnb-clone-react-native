import React from "react";
import RegisterView from "./ui/RegisterView";

export default function RegisterConnector() {
  return (
    <RegisterView
      submit={async (values: any) => {
        console.log(values);
        return null;
      }}
    />
  );
}
