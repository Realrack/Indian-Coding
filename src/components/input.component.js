import React from "react";

import { StyleSheet } from "react-native";
import { theme } from "../infrastructure/theme";
import { TextInput } from "react-native-paper";

export default function Input({
  placeholder,
  label,
  email,
  phone,
  style,
  value,
  setValue,
  secureTextEntry,
  ...rest
}) {
  let keyboardType = "default";
  if (
    label === "Name" ||
    label === "Email" ||
    label === "Password" ||
    label === "Create Password" ||
    label === "Confirm Password"
  ) {
    keyboardType = "email-address";
  }
  if (label === "Mobile") {
    keyboardType === "numeric";
  }

  return (
    <TextInput
      {...rest}
      theme={{ colors: { primary: theme.colors.brand.primary } }}
      underlineColor={theme.colors.ui.disabled}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
      label={label}
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    ></TextInput>
  );
}
const styles = StyleSheet.create({
  input: {
    width: theme.WIDTH / 1.35,
    marginBottom: theme.space[3],
    fontSize: theme.fontSizes.body,
    paddingLeft: theme.space[2],
    fontFamily: "serif",
    backgroundColor: theme.colors.bg.primary,
    borderRadius: theme.space[3],
  },
});
