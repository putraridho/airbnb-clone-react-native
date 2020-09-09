import React from "react";
import { FieldProps } from "formik";
import { Input } from "react-native-elements";

const errorStyle = {
  color: "red",
};

const InputField: React.SFC<FieldProps<any>> = ({
  field,
  form: { touched, errors, setFieldValue, ...form },
  ...props
}) => {
  const onChangeText = (text: string) => {
    setFieldValue(field.name, text);
  };

  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <Input
      {...props}
      errorStyle={errorStyle}
      errorMessage={errorMsg as string}
      onChangeText={onChangeText}
      value={field.value}
      onBlur={() => form.setFieldTouched(field.name)}
    />
  );
};

export default InputField;
