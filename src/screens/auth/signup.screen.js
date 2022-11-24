import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { TextInput } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";
import Button from "../../components/button.component";
import Input from "../../components/input.component";

const SignupScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <BaseView style={styles.container}>
      <View style={{ marginTop: "2%", marginLeft: 2 }}>
        <FontAwesome
          onPress={() => navigation.goBack()}
          color={theme.colors.brand.primary}
          size={30}
          name={"arrow-left"}
        />
      </View>
      <View style={styles.inputcheck}>
        <Text style={{ fontSize: 25, color: "#000", fontWeight: "bold" }}>
          Enter Details
        </Text>
        <Input
          theme={{ colors: { primary: theme.colors.brand.primary } }}
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          label="Name"
          keyboardType="ascii-capable"
        />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          theme={{ colors: { primary: theme.colors.brand.primary } }}
          style={styles.input}
          label="Email"
          keyboardType="email-address"
        />
        <Input
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              name={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          value={password}
          onChangeText={(text) => setPassword(text)}
          theme={{ colors: { primary: theme.colors.brand.primary } }}
          style={styles.input}
          label="Create Password"
        />
        <Input
          secureTextEntry={passwordVisible2}
          right={
            <TextInput.Icon
              name={passwordVisible2 ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible2(!passwordVisible2)}
            />
          }
          theme={{ colors: { primary: theme.colors.brand.primary } }}
          style={styles.input}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          label="Confirm Password"
        />
      </View>
      <View style={styles.touchContainer}>
        <Button style={styles.touch}>SUBMIT</Button>
      </View>
    </BaseView>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputcheck: {
    marginTop: "20%",
    margin: 20,
    padding: 20,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 30,
  },
  // input: {
  //   backgroundColor: "#fff",
  // },
  touchContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  // touch: {
  //   backgroundColor: theme.colors.brand.primary,
  //   padding: 20,
  //   borderRadius: 25,
  // },
  otpText: {
    color: "#000",
  },
});
