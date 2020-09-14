import React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

const InputField: React.SFC<FieldProps<any> & { prefix: React.ReactNode }> = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];
  return (
    <Form.Item help={errorMsg} validateStatus={errorMsg ? "error" : "success"}>
      <Input {...field} {...props} />
    </Form.Item>
  );
};

export default InputField;
