import React from "react";
import { useMutation, gql } from "@apollo/client";
import {
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables,
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizeErrorMap } from "../../types/NormalizeErrorMap";

const FORGOT_PASSWORD_CHANGE_MUTATION = gql`
  mutation ForgotPasswordChangeMutation($newPassword: String!, $key: String!) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`;

interface Props {
  children: (data: {
    submit: (
      values: ForgotPasswordChangeMutationVariables
    ) => Promise<NormalizeErrorMap | null>;
  }) => JSX.Element | null;
}

export const ChangePasswordController: React.FC<Props> = ({ children }) => {
  const [forgotPasswordMutation] = useMutation<ForgotPasswordChangeMutation>(
    FORGOT_PASSWORD_CHANGE_MUTATION
  );

  const submit = async (values: ForgotPasswordChangeMutationVariables) => {
    const { data } = await forgotPasswordMutation({
      variables: values,
    });

    if (data?.forgotPasswordChange) {
      return normalizeErrors(data.forgotPasswordChange);
    }

    return null;
  };

  return children({ submit });
};
