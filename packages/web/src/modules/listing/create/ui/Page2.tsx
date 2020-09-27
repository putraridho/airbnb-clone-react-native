import { Field } from "formik";
import InputField from "modules/shared/InputField";
import React from "react";

export default function Page2(): React.ReactElement {
  return (
    <>
      <Field
        name="price"
        label="Price"
        placeholder="Price"
        component={InputField}
        useNumberComponent
      />
      <Field
        name="beds"
        label="Beds"
        placeholder="Beds"
        component={InputField}
        useNumberComponent
      />
      <Field
        name="guests"
        label="Guests"
        placeholder="Guests"
        component={InputField}
        useNumberComponent
      />
    </>
  );
}
