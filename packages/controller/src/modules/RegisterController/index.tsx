import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

const REGISTER_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

interface Props {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
}

export const RegisterController: React.FC<Props> = ({ children }) => {
  const [registerMutation] = useMutation(REGISTER_MUTATION);

  const submit = async (values: any) => {
    const res = await registerMutation({ variables: values });
    console.log(res);
    return null;
  };

  return children({ submit });
};
