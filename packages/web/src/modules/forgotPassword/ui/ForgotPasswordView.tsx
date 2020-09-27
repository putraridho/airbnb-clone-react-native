import React from "react";
import { Form as AntForm, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form } from "formik";
import InputField from "../../shared/InputField";
import { NormalizeErrorMap } from "@airbnb-clone/controller";

const { Item: FormItem } = AntForm;

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizeErrorMap | null>;
}

const ForgotPasswordView: React.FC<FormikProps<FormValues> & Props> = () => {
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
          name="email"
          prefix={<UserOutlined />}
          placeholder="Email"
          component={InputField}
        />

        <FormItem
          style={{
            marginBottom: 0,
          }}
        >
          <Button type="primary" htmlType="submit">
            Reset Password
          </Button>
        </FormItem>
      </div>
    </Form>
  );
};

export default withFormik<Props, FormValues>({
  mapPropsToValues: () => ({
    email: "",
  }),
  handleSubmit: async (values, { props: { submit, onFinish }, setErrors }) => {
    const errors = await submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      onFinish();
    }
  },
})(ForgotPasswordView);
