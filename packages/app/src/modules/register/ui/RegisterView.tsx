import React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "@airbnb-clone/common";
import InputField from "../../shared/InputField";
import { View, Button, StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";

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
    padding: 20,
  },
  password: {
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

const RegisterView: React.FC<FormikProps<FormValues> & Props> = ({
  handleSubmit,
}) => {
  return (
    <View style={styles.container}>
      <Card containerStyle={{ width: "100%" }}>
        <Text style={styles.text}>Register</Text>
        <Field
          name="email"
          placeholder="Email"
          component={InputField}
          containerStyle={{ width: "100%" }}
          autoCapitalize="none"
        />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          component={InputField}
          containerStyle={styles.password}
        />

        <Button title="submit" onPress={handleSubmit as any} />
      </Card>
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
