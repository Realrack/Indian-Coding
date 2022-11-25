import React from "react";
import { View, Image } from "react-native";
import { theme } from "../infrastructure/theme";

export default function LoaderComponent() {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        style={{ width: theme.WIDTH / 2.3, height: theme.HEIGHT / 5 }}
        source={{
          uri: "https://secretpassions.live/loading-ico.gif",
        }}
      />
    </View>
  );
}
