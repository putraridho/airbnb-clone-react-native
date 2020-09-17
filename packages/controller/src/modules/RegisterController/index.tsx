import React from "react";
import { useMutation, gql } from "@apollo/client";
import { RegisterMutationVariables, RegisterMutation } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizeErrorMap } from "../../types/NormalizeErrorMap";

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
    submit: (
      values: RegisterMutationVariables
    ) => Promise<NormalizeErrorMap | null>;
  }) => JSX.Element | null;
}

export const RegisterController: React.FC<Props> = ({ children }) => {
  const [registerMutation] = useMutation<RegisterMutation>(REGISTER_MUTATION);

  const submit = async ({ email, password }: RegisterMutationVariables) => {
    const { data } = await registerMutation({
      variables: {
        email,
        password,
      },
    });

    if (data) {
      const { register } = data;
      console.log("response", register);

      if (register) {
        return normalizeErrors(register);
      }
    }

    return null;
  };

  return children({ submit });
};
