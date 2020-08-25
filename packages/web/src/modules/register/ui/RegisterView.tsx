import React from "react";
import * as Antd from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  withFormik,
  FormikErrors,
  FormikValues,
  FormikProps,
  Field,
  Form,
} from "formik";
import { validUserSchema } from "@airbnb-clone/common";
import InputField from "../../shared/InputField";

const {
  Form: { Item: FormItem },
  Button,
} = Antd;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormikValues) => Promise<FormikErrors<FormikValues> | null>;
}

const RegisterView: React.FC<FormikProps<FormValues> & Props> = (props) => {
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
            Register
          </Button>
          Or{" "}
          <a
            href="https://google.com"
            style={{
              marginLeft: 5,
            }}
          >
            log in now!
          </a>
        </FormItem>
      </div>
    </Form>
  );
};

export default withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
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
})(RegisterView);
