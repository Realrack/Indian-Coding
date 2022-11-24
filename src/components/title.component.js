import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { theme } from "../infrastructure/theme";

export default function Title({ children, style, mt, ...rest }) {
  return (
    <View style={styles.container}>
      <Text
        {...rest}
        style={StyleSheet.flatten([
          StyleSheet.flatten([styles.title, style]),
          mt && StyleSheet.flatten([styles.mt(mt), style]),
        ])}
      >
        {children}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.body,
  },
  mt: (mt) => ({
    marginTop: mt,
  }),
});
