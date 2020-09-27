import { Field } from "formik";
import InputField from "modules/shared/InputField";
import React from "react";

export default function Page2(): React.ReactElement {
  return (
    <>
      <Field name="price" placeholder="Price" component={InputField} />
      <Field name="beds" placeholder="Beds" component={InputField} />
      <Field name="guests" placeholder="Guests" component={InputField} />
    </>
  );
}
