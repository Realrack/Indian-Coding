import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import { TextInput } from "react-native-paper";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";
import Button from "../../components/button.component";
import Input from "../../components/input.component";
import BackButton from "../../components/backButton.component";

const SignupScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <BaseView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />

      <View style={styles.inputcheck}>
        <Text style={{ fontSize: 25, color: "#000", fontWeight: "bold" }}>
          Enter Details
        </Text>
        <Input
          theme={{ colors: { primary: theme.colors.brand.primary } }}
          style={styles.input}
          value={name}
          setValue={(text) => setName(text)}
          label="Name"
          left={<TextInput.Icon name={"account"} />}
        />
        <Input
          value={email}
          setValue={(text) => setEmail(text)}
          style={styles.input}
          label="Email"
          left={<TextInput.Icon name={"email"} />}
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
          setValue={(text) => setPassword(text)}
          style={styles.input}
          label="Create Password"
          left={<TextInput.Icon name={"lock"} />}
        />
        <Input
          secureTextEntry={passwordVisible2}
          right={
            <TextInput.Icon
              name={passwordVisible2 ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible2(!passwordVisible2)}
            />
          }
          style={styles.input}
          value={confirmPassword}
          setValue={(text) => setConfirmPassword(text)}
          label="Confirm Password"
          left={<TextInput.Icon name={"lock"} />}
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
