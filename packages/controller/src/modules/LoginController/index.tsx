import React from "react";
import { useMutation, gql } from "@apollo/client";
import { LoginMutationVariables, LoginMutation } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizeErrorMap } from "types/NormalizeErrorMap";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

interface Props {
  onSessionId?: (sessionId: string) => void;
  children: (data: {
    submit: (
      values: LoginMutationVariables
    ) => Promise<NormalizeErrorMap | null>;
  }) => JSX.Element | null;
}

export const LoginController: React.FC<Props> = ({ children, onSessionId }) => {
  const [loginMutation] = useMutation<LoginMutation>(LOGIN_MUTATION);

  const submit = async ({ email, password }: LoginMutationVariables) => {
    const { data } = await loginMutation({
      variables: {
        email,
        password,
      },
    });

    if (data) {
      const {
        login: { errors, sessionId },
      } = data;

      if (errors) {
        console.log("errors:", errors);
        return normalizeErrors(errors);
      }

      console.log("sessionId:", sessionId);

      if (sessionId && onSessionId) {
        onSessionId(sessionId);
      }
    }

    return null;
  };

  return children({ submit });
};
