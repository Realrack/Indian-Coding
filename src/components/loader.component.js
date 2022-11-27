import React from "react";
import { Image, StyleSheet } from "react-native";
import BaseView from "./baseView.component";
import { theme } from "../infrastructure/theme";

export default function LoaderComponent() {
  return (
    <BaseView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://secretpassions.live/loading-ico.gif",
        }}
      />
    </BaseView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: theme.sizes[4],
    height: theme.sizes[4],
  },
});
