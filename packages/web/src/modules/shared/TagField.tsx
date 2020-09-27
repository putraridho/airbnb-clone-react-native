import React from "react";
import { FieldProps } from "formik";
import Form from "antd/lib/form";
import { Select } from "antd";

const TagField: React.FC<
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
  useNumberComponent,
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
      <Select
        {...field}
        {...props}
        mode="tags"
        onChange={(value: any) => {
          setFieldValue(field.name, value);
        }}
      />
    </Form.Item>
  );
};

export default TagField;
