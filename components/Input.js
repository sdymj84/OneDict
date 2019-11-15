import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const Input = () => {
  return (
    <View style={styles.input}>
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#F2994A",
    width: "90%",
    paddingLeft: 15
  }
});

export default Input;
