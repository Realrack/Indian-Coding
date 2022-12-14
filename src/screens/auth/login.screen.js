import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";
import Input from "../../components/input.component";
import Button from "../../components/button.component";
import InputContainer from "../../components/inputContainer.component";
import Text from "../../components/text.component";
import Loader from "../../components/loader.component";

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [username, setUsername] = useState(__DEV__ ? "ashish@gmail.com" : "");
  const [password, setPassword] = useState(__DEV__ ? "123456789" : "");
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (username == "" && password == "") {
      alert("please enter Data");
    } else if (username.trim() == "" || username == "null") {
      alert("enter your username");
    } else if (password.trim() == "" || password == "null") {
      alert("enter your password");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <BaseView>
      <Loader loading={loading} />
      <Text mt={theme.space[5]} ta={"center"} mb={theme.space[1]} fw title>
        Enter your Email-Id & Password
      </Text>
      <InputContainer>
        <Input
          value={username}
          setValue={(text) => setUsername(text)}
          label="Email"
          left={<TextInput.Icon name={"email"} />}
        />
        <Input
          value={password}
          setValue={(text) => setPassword(text)}
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
          <Text subtitle color={theme.colors.brand.primary}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </InputContainer>

      <Button style={styles.touch} onPress={login}>
        Login
      </Button>

      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.signup}
      >
        <Text mt={theme.space[3]} subtitle>
          New user?
        </Text>
        <Text mt={theme.space[3]} subtitle color={theme.colors.brand.primary}>
          {" "}
          Sign up
        </Text>
      </TouchableOpacity>
    </BaseView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  forgot: {
    marginTop: theme.space[3],
    alignItems: "flex-end",
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
