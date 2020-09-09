import React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "@airbnb-clone/common";
import InputField from "../../shared/InputField";
import { View, Button, StyleSheet } from "react-native";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "1em",
  },
  field: {
    width: "100%",
  },
});

const RegisterView: React.FC<FormikProps<FormValues> & Props> = (props) => {
  return (
    <View style={styles.field}>
      <Field
        style={styles.field}
        name="email"
        placeholder="Email"
        component={InputField}
      />
      <Field
        style={styles.field}
        name="password"
        secureTextEntry={true}
        placeholder="Password"
        component={InputField}
      />

      <Button title="submit" onPress={props.submit as any} />
    </View>
  );
};

export default withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  handleSubmit: async (values, { props: { submit }, setErrors }) => {
    const errors = await submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(RegisterView);
