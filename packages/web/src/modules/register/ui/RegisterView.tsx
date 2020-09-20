import React from "react";
import { Form as AntForm, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form } from "formik";
import { validUserSchema } from "@airbnb-clone/common";
import InputField from "../../shared/InputField";
import { Link } from "react-router-dom";
import { NormalizeErrorMap } from "@airbnb-clone/controller";

const { Item: FormItem } = AntForm;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizeErrorMap | null>;
}

const RegisterView: React.FC<FormikProps<FormValues> & Props> = () => {
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
          <Link to="/forgot-password">Forgot password</Link>
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
          Or <Link to="/login">login now!</Link>
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
  handleSubmit: async (values, { props: { submit, onFinish }, setErrors }) => {
    const errors = await submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      onFinish();
    }
  },
})(RegisterView);
