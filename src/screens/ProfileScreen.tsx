import React from "react";
import { useForm } from "react-hook-form";
import { View, StyleSheet, ScrollView } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ProfileInfo, ScreenContainer, TextInput } from "../components";
import { Demensions, Render } from "../helpers";
import { registrationSchema } from "../validations/registration.validate";

export const ProfileScreen = React.memo(() => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(registrationSchema),
  });

  const onPressSubmit = (res: any) => {
    console.log("submit", res);
  };

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
          <TextInput control={control} name={"name"} placeholder="Name" />
          <TextInput control={control} name={"email"} placeholder="Email" />
          <TextInput control={control} name={"phone"} placeholder="Phone" />
          <TextInput
            control={control}
            name={"position"}
            placeholder="Position"
          />
          <TextInput control={control} name={"skype"} placeholder="Skype" />
        </View>
        <View style={styles.action}>
          <Button title="Log In" onPress={handleSubmit(onPressSubmit)} />
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
