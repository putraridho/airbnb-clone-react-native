import React from "react";
import { useMutation, gql } from "@apollo/client";
import { LoginMutationVariables, LoginMutation } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`;

interface Props {
  children: (data: {
    submit: (
      values: LoginMutationVariables
    ) => Promise<{
      [key: string]: string;
    } | null>;
  }) => JSX.Element | null;
}

export const LoginController: React.FC<Props> = ({ children }) => {
  const [loginMutation] = useMutation<LoginMutation>(LOGIN_MUTATION);

  const submit = async ({ email, password }: LoginMutationVariables) => {
    const { data } = await loginMutation({
      variables: {
        email,
        password,
      },
    });

    console.log("response", data?.login);

    if (data?.login) {
      return normalizeErrors(data.login);
    }

    return null;
  };

  return children({ submit });
};
