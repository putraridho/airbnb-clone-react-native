import React from "react";
import { Form as AntForm, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form } from "formik";
import { loginSchema } from "@airbnb-clone/common";
import InputField from "../../shared/InputField";
import { Link } from "react-router-dom";

const { Item: FormItem } = AntForm;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (
    values: FormValues
  ) => Promise<{
    [key: string]: string;
  } | null>;
}

const LoginView: React.FC<FormikProps<FormValues> & Props> = () => {
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
        <Field
          name="password"
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          component={InputField}
        />
        <FormItem>
          <a href="https://google.com">Forgot password</a>
        </FormItem>

        <FormItem
          style={{
            marginBottom: 0,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              marginRight: 10,
            }}
          >
            Login
          </Button>
          Or{" "}
          <a
            href="https://google.com"
            style={{
              marginLeft: 5,
            }}
          >
            <Link to="/register">Register</Link>
          </a>
        </FormItem>
      </div>
    </Form>
  );
};

export default withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  handleSubmit: async (values, { props: { submit }, setErrors }) => {
    const errors = await submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(LoginView);
