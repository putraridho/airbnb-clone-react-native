import React, { ReactElement } from "react";
import { Form, Input, Button, Icon } from "antd";
import { withFormik, FormikErrors, FormikValues, FormikProps } from "formik";
import * as yup from "yup";

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
        <Form.Item help={touched.email && errors.email}>
          <Input
            name="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25" }} />}
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item help={touched.password && errors.password}>
          <Input
            name="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }} />}
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

const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough = "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: yup.string().min(3, passwordNotLongEnough).max(255).required(),
});

export default withFormik<Props, FormValues>({
  validationSchema,
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
