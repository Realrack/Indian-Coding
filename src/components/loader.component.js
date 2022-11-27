import React from "react";
import { Image } from "react-native";
import BaseView from "./baseView.component";
import { theme } from "../infrastructure/theme";

export default function LoaderComponent() {
  return (
    <BaseView style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ width: theme.WIDTH / 2.3, height: theme.HEIGHT / 5 }}
        source={{
          uri: "https://secretpassions.live/loading-ico.gif",
        }}
      />
    </BaseView>
  );
}
