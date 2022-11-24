import React from "react";
import { View, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "../infrastructure/theme";

export default function BackButton({ onPress }) {
  return (
    <View style={styles.container}>
      <FontAwesome
        onPress={onPress}
        color={theme.colors.brand.primary}
        size={theme.sizes[2]}
        name={"arrow-left"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: theme.space[2],
    marginLeft: theme.space[1],
  },
});
