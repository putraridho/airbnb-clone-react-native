import React from "react";
import { Form as AntForm, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form } from "formik";
import InputField from "../../shared/InputField";
import {
  NormalizeErrorMap,
  ForgotPasswordChangeMutationVariables,
} from "@airbnb-clone/controller";
import { changePasswordSchema } from "@airbnb-clone/common";

const { Item: FormItem } = AntForm;

interface FormValues {
  newPassword: string;
}

interface Props {
  onFinish: () => void;
  token: string;
  submit: (
    values: ForgotPasswordChangeMutationVariables
  ) => Promise<NormalizeErrorMap | null>;
}

const ChangePasswordView: React.FC<FormikProps<FormValues> & Props> = () => {
  return (
    <Form>
      <div
        style={{
          display: "block",
          maxWidth: 400,
          margin: "60px auto",
          border: "1px solid #ccc",
          borderRadius: 4,
          padding: 20,
        }}
      >
        <Field
          name="newPassword"
          prefix={<LockOutlined />}
          placeholder="new password"
          type="password"
          component={InputField}
        />

        <FormItem
          style={{
            marginBottom: 0,
          }}
        >
          <Button type="primary" htmlType="submit">
            Change Password
          </Button>
        </FormItem>
      </div>
    </Form>
  );
};

export default withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({
    newPassword: "",
  }),
  handleSubmit: async (
    { newPassword },
    { props: { submit, token: key, onFinish }, setErrors }
  ) => {
    const errors = await submit({ newPassword, key });
    if (errors) {
      setErrors(errors);
    } else {
      onFinish();
    }
  },
})(ChangePasswordView);
