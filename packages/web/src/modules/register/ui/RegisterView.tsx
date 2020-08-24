import React, { ReactElement } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikErrors, FormikValues, FormikProps } from "formik";
import { validUserSchema } from "@airbnb-clone/common";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormikValues) => Promise<FormikErrors<FormikValues> | null>;
}

function RegisterView(props: FormikProps<FormValues> & Props): ReactElement {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
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
        <Form.Item
          help={touched.email && errors.email}
          validateStatus={touched.email && errors.email ? "error" : "success"}
        >
          <Input
            name="email"
            prefix={<UserOutlined />}
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          help={touched.password && errors.password}
          validateStatus={
            touched.password && errors.password ? "error" : "success"
          }
        >
          <Input
            name="password"
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <a href="https://google.com">Forgot password</a>
        </Form.Item>

        <Form.Item
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
        </Form.Item>
      </div>
    </form>
  );
}

export default withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(RegisterView);
