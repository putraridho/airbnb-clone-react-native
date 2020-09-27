import { Field } from "formik";
import InputField from "modules/shared/InputField";
import React from "react";

export default function Page3(): React.ReactElement {
  return (
    <>
      <Field name="latitude" placeholder="Latitude" component={InputField} />
      <Field name="longitude" placeholder="Longitude" component={InputField} />
      <Field name="amenities" placeholder="Amenities" component={InputField} />
    </>
  );
}
