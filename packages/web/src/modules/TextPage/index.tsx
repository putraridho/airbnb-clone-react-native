import React from "react";
import { StaticContext } from "react-router";
import { RouteComponentProps } from "react-router-dom";

interface LocationState {
  message: string;
}

export default function TextPage({
  location,
}: RouteComponentProps<{}, StaticContext, LocationState>) {
  console.log("location", location);

  return <div>{location.state?.message || "hello"}</div>;
}
