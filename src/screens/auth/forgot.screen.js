import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";

export default function ForgotScreen({ navigation }) {
  const [emailid, setEmailid] = useState();
  return (
    <BaseView style={styles.container}>
      <View style={{ marginTop: "5%", marginLeft: 2 }}>
        <Icon
          onPress={() => navigation.goBack()}
          color={theme.colors.brand.primary}
          size={30}
          name={"arrow-left"}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Enter Your Email-Id</Text>
      </View>
      <View style={styles.inputcheck}>
        <TextInput
          value={emailid}
          keyboardType="email-address"
          onChangeText={(text) => setEmailid(text)}
          theme={{ colors: { primary: theme.colors.brand.primary } }}
          style={styles.input}
          label="Email"
        />
      </View>
      <View style={styles.touchContainer}>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.otpText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgimg: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    marginTop: "20%",
    marginLeft: 5,
  },
  text: {
    color: "#000",
    fontSize: 20,
    textAlign: "justify",
    fontWeight: "bold",
  },
  inputcheck: {
    margin: 20,
    padding: 20,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 30,
  },
  input: {
    backgroundColor: "#fff",
  },
  touchContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  touch: {
    backgroundColor: theme.colors.brand.primary,
    padding: 20,
    borderRadius: 25,
  },
  otpText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
