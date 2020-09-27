import { Field } from "formik";
import InputField from "modules/shared/InputField";
import React from "react";

export default function Page1(): React.ReactElement {
  return (
    <>
      <Field
        name="name"
        label="Name"
        placeholder="Name"
        component={InputField}
      />
      <Field
        name="category"
        label="Category"
        placeholder="Category"
        component={InputField}
      />
      <Field
        name="description"
        label="Description"
        placeholder="Description"
        component={InputField}
      />
    </>
  );
}
