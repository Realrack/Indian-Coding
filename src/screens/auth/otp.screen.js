import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import CheckBox from "expo-checkbox";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";
import Button from "../../components/button.component";
import Input from "../../components/input.component";

const OtpScreen = ({ navigation }) => {
  const [selected, setSelection] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [code, setCode] = React.useState();

  return (
    <BaseView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Enter your Mobile no.</Text>
      </View>
      <View style={styles.inputcheck}>
        <Input
          value={number}
          left={<TextInput.Icon name={"phone"} />}
          setValue={(text) => setNumber(text)}
          style={styles.input}
          label="Mobile"
          maxLength={10}
        />

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <CheckBox
            value={selected}
            onValueChange={() => setSelection(!selected)}
            color={theme.colors.brand.primary}
          />
          <Text style={{ fontSize: 16, color: "gray", marginLeft: 5 }}>
            I have a referral code.
          </Text>
        </View>
        <View>
          {selected ? (
            <Input
              value={code}
              setValue={(text) => setCode(text)}
              height={selected ? "auto" : "0"}
              style={styles.input}
              maxLength={7}
              label="Paste your Code"
            />
          ) : null}
        </View>
      </View>
      <View style={styles.touchContainer}>
        <Button style={styles.touch}>SEND OTP</Button>
      </View>
      <View style={styles.loginContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ color: "#000", fontSize: 18 }}>
            Already have an account?
          </Text>
          <Text style={{ color: theme.colors.brand.primary, fontSize: 18 }}>
            {" "}
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
};
export default OtpScreen;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: "20%",
  },
  text: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.title,
    textAlign: "center",
  },
  inputcheck: {
    margin: 20,
    padding: 20,
    borderColor: "grey",
    borderWidth: 1.2,
    borderRadius: 30,
    backgroundColor: theme.colors.bg.primary,
  },
  // input: {
  //   // backgroundColor: theme.colors.bg.primary,
  //   //marginBottom: 5,
  // },
  touchContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  // touch: {
  //   backgroundColor: theme.colors.brand.primary,
  //   //   padding: 20,
  //   borderRadius: 25,
  // },
  otpText: {
    color: theme.colors.text.primary,
    fontWeight: "bold",
  },
  loginContainer: {
    marginTop: "10%",
  },
});
