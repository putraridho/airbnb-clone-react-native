import React from "react";
import { useMutation, gql } from "@apollo/client";
import { RegisterMutationVariables, RegisterMutation } from "../../schemaTypes";

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

interface Props {
  children: (data: {
    submit: (values: RegisterMutationVariables) => Promise<null>;
  }) => JSX.Element | null;
}

export const RegisterController: React.FC<Props> = ({ children }) => {
  const [registerMutation] = useMutation<RegisterMutation>(REGISTER_MUTATION);

  const submit = async ({ email, password }: RegisterMutationVariables) => {
    const response = await registerMutation({
      variables: {
        email,
        password,
      },
    });
    console.log("response", response);
    return null;
  };

  return children({ submit });
};
