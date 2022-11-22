import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, ProfileInfo, ScreenContainer, TextInput } from "../components";
import { Demensions, Render } from "../helpers";

export const ProfileScreen = React.memo(() => {
  return (
    <ScreenContainer>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <ProfileInfo />
        <View style={styles.forms}>
          <TextInput placeholder="Name" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Phone" />
          <TextInput placeholder="Position" />
          <TextInput placeholder="Skype" />
        </View>
        <View style={styles.action}>
          <Button title="Log In" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  forgot: {
    textAlign: "right",
    marginTop: Demensions.moderateScale(20),
    color: Render.COLOR_INPUT,
    fontSize: Demensions.PRIMARY_FONT_SIZE,
  },
  forms: {},
  action: {
    marginTop: Demensions.moderateScale(30),
  },
});
