import React from "react";
import { useMutation, gql } from "@apollo/client";
import {
  SendForgotPasswordEmailMutationVariables,
  SendForgotPasswordEmailMutation,
} from "../../schemaTypes";

const FORGOT_PASSWORD_MUTATION = gql`
  mutation SendForgotPasswordEmailMutation($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`;

interface Props {
  children: (data: {
    submit: (values: SendForgotPasswordEmailMutationVariables) => Promise<null>;
  }) => JSX.Element | null;
}

export const ForgotPasswordController: React.FC<Props> = ({ children }) => {
  const [forgotPasswordMutation] = useMutation<SendForgotPasswordEmailMutation>(
    FORGOT_PASSWORD_MUTATION
  );

  const submit = async ({
    email,
  }: SendForgotPasswordEmailMutationVariables) => {
    const response = await forgotPasswordMutation({
      variables: {
        email,
      },
    });

    console.log("response", response);

    return null;
  };

  return children({ submit });
};
