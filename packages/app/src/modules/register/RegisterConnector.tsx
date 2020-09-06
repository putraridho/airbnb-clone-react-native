import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function RegisterConnector() {
  const onPress = () => console.log("hello");
  return (
    <View style={styles.container}>
      <Button title="BUTTON" onPress={onPress} />
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
