import React from "react";

async function submit(values: any) {
  console.log(values);
  return null;
}

interface Props {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
}

export const RegisterController: React.FC<Props> = ({ children }) => {
  return children({ submit });
};
