import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import { TextInput } from "react-native-paper";

import BaseView from "../../components/baseView.component";
import { theme } from "../../infrastructure/theme";
import Button from "../../components/button.component";
import Input from "../../components/input.component";
import BackButton from "../../components/backButton.component";
import Title from "../../components/title.component";

export default function ForgotScreen({ navigation }) {
  const [emailid, setEmailid] = useState();
  return (
    <BaseView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <Title mt={theme.space[5]}>Enter Your Email-Id</Title>
      <View style={styles.inputcheck}>
        <Input
          value={emailid}
          setValue={(text) => setEmailid(text)}
          label="Email"
          left={<TextInput.Icon name={"email"} />}
        />
      </View>
      <Button>SUBMIT</Button>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  inputcheck: {
    margin: theme.space[3],
    padding: theme.space[3],
    borderColor: theme.colors.ui.disabled,
    borderWidth: 1,
    borderRadius: 30,
  },
});
