import { Field } from "formik";
import InputField from "modules/shared/InputField";
import TagField from "modules/shared/TagField";
import React from "react";

export default function Page3(): React.ReactElement {
  return (
    <>
      <Field
        name="latitude"
        label="Latitude"
        placeholder="Latitude"
        component={InputField}
        useNumberComponent
      />
      <Field
        name="longitude"
        label="Longitude"
        placeholder="Longitude"
        component={InputField}
        useNumberComponent
      />
      <Field
        name="amenities"
        label="Amenities"
        placeholder="Amenities"
        component={TagField}
        useNumberComponent
      />
    </>
  );
}
