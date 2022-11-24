import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import CheckBox from "expo-checkbox";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";
import Button from "../../components/button.component";
import Input from "../../components/input.component";
import Title from "../../components/title.component";

const OtpScreen = ({ navigation }) => {
  const [selected, setSelection] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [code, setCode] = React.useState();

  return (
    <BaseView>
      <Title mt={theme.space[5]}>Enter your Mobile no.</Title>
      <View style={styles.inputcheck}>
        <Input
          value={number}
          left={<TextInput.Icon name={"phone"} />}
          setValue={(text) => setNumber(text)}
          style={styles.input}
          label="Mobile"
          keyBoardType="numeric"
          maxLength={10}
        />

        <View style={styles.checkTextContiner}>
          <CheckBox
            value={selected}
            onValueChange={() => setSelection(!selected)}
            color={theme.colors.brand.primary}
          />
          <Text style={styles.checkText}>I have a referral code.</Text>
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
  inputcheck: {
    margin: 20,
    padding: 20,
    borderColor: "grey",
    borderWidth: 1.2,
    borderRadius: 30,
    backgroundColor: theme.colors.bg.primary,
  },
  checkTextContiner: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkText: {
    fontSize: 16,
    color: "gray",
    marginLeft: 5,
  },
  touchContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  loginContainer: {
    marginTop: "10%",
  },
});
