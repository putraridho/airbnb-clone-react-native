import React from "react";
import { View, StyleSheet } from "react-native";
import RegisterView from "./ui/RegisterView";

export default function RegisterConnector() {
  const dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  return (
    <View style={styles.container}>
      <RegisterView submit={dummySubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
