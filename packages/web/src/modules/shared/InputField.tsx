import React from "react";
import { FieldProps } from "formik";
import Form from "antd/lib/form";
import { Input, InputNumber } from "antd";

const InputField: React.FC<
  FieldProps<any> & {
    prefix?: React.ReactNode;
    label?: string;
    useNumberComponent?: boolean;
  }
> = ({
  field: { onChange, ...field },
  form: { touched, errors, setFieldValue },
  label,
  prefix,
  useNumberComponent = false,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <Form.Item
      help={errorMsg}
      validateStatus={errorMsg ? "error" : "success"}
      label={label}
      style={{
        display: "block",
      }}
    >
      {useNumberComponent ? (
        <InputNumber
          onChange={(value) => {
            setFieldValue(field.name, value);
          }}
          {...field}
          {...props}
        />
      ) : (
        <Input prefix={prefix} onChange={onChange} {...field} {...props} />
      )}
    </Form.Item>
  );
};

export default InputField;
