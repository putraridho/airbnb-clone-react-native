import { Field } from "formik";
import InputField from "modules/shared/InputField";
import React from "react";

export default function Page1(): React.ReactElement {
  return (
    <>
      <Field name="name" placeholder="Name" component={InputField} />
      <Field name="category" placeholder="Category" component={InputField} />
      <Field
        name="description"
        placeholder="Description"
        component={InputField}
      />
    </>
  );
}
