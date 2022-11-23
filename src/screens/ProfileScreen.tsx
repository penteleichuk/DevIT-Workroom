import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View, StyleSheet, ScrollView } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ProfileInfo, ScreenContainer, TextInput } from "../components";
import { Demensions, Render } from "../helpers";
import { userSchema } from "../validations/user.validate";
import { Storage } from "../services/storage";
import { Database, UpdateRequestType, UserType } from "../services/database";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/Navigation";

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;

export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType>({} as UserType);

  // HOOK form
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      skype: "",
    },
    resolver: yupResolver(userSchema),
  });

  // Init user data
  useEffect(() => {
    Storage.getUser().then((res) => {
      setUser({ ...res });
      reset({ ...res });
    });
  }, []);

  // Save user data
  const onPressSubmit = useCallback(
    (args: UpdateRequestType) => {
      Database.update(user.id, { ...args }).then((res) => {
        setUser({ ...(res as UserType) });
        Storage.updateUser({ ...(res as UserType) });
      });
    },
    [user]
  );

  // Logout
  const onPressLogout = useCallback(() => {
    setIsLoading(true);
    Storage.removeUser()
      .then(() => {
        navigation.push("Login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ScreenContainer>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <ProfileInfo
          id={user.id}
          name={user.name}
          image={user.image}
          position={user.position || "..."}
          logout={onPressLogout}
        />
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
          <Button
            disabled={isLoading}
            title="Save"
            onPress={handleSubmit(onPressSubmit)}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

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
