import React from "react";
import { View, Text } from "react-native";
import StackScreen from "./src/navigation/stack.navigation";
import OtpScreen from "./src/screens/auth/otp.screen";
import LoginScreen from "./src/screens/auth/login.screen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StackScreen />
    </View>
  );
}
