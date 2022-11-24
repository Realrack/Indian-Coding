import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";
import Input from "../../components/input.component";
import Button from "../../components/button.component";

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  return (
    <BaseView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Enter your Email-Id & Password</Text>
      </View>
      <View style={styles.inputcheck}>
        <Input
          value={email}
          setValue={(text) => setEmail(text)}
          style={styles.input}
          label="Email"
          left={<TextInput.Icon name={"email"} />}
        />
        <Input
          value={password}
          setValue={(text) => setPassword(text)}
          style={styles.input}
          label="Password"
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              name={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          left={<TextInput.Icon name={"lock"} />}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Forgot")}
          style={styles.forgot}
        >
          <Text style={{ color: theme.colors.brand.primary, fontSize: 17 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <Button style={styles.touch}>Login</Button>

      <View style={styles.loginContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ color: "#000", fontSize: 18 }}>New user?</Text>
          <Text style={{ color: theme.colors.brand.primary, fontSize: 18 }}>
            {" "}
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textContainer: {
    marginTop: "30%",
  },
  text: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
  inputcheck: {
    margin: 20,
    padding: 20,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 30,
  },
  input: {
    backgroundColor: "#fff",
    margin: 3,
  },
  forgot: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  touchContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  touch: {
    // backgroundColor: theme.colors.brand.primary,
    // padding: 20,
    // borderRadius: 25,
  },
  otpText: {
    color: "#fff",
    fontWeight: "bold",
  },
  loginContainer: {
    marginTop: "10%",
  },
});
