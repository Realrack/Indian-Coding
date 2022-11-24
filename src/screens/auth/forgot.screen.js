import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import { TextInput } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";
import Button from "../../components/button.component";
import Input from "../../components/input.component";
import BackButton from "../../components/backButton.component";

export default function ForgotScreen({ navigation }) {
  const [emailid, setEmailid] = useState();
  return (
    <BaseView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Enter Your Email-Id</Text>
      </View>
      <View style={styles.inputcheck}>
        <Input
          value={emailid}
          setValue={(text) => setEmailid(text)}
          label="Email"
          left={<TextInput.Icon name={"email"} />}
        />
      </View>
      <View style={styles.touchContainer}>
        <Button>SUBMIT</Button>
      </View>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: theme.space[5],
    alignItems: "center",
  },
  text: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
  },
  inputcheck: {
    margin: theme.space[3],
    padding: theme.space[3],
    borderColor: theme.colors.ui.disabled,
    borderWidth: 1,
    borderRadius: 30,
  },
});
