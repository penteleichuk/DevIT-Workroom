import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./ProfileInfoStyle";
import * as Images from "./../../assets/images";
import * as Icons from "./../../assets/icons";
import { Demensions } from "../../helpers";
import { PressableFade } from "../PressableFade/PressableFade";

type ProfileInfoType = {
  name: string;
  position: string;
  logout: () => void;
};

export const ProfileInfo = React.memo((props: ProfileInfoType) => {
  const { name, position, logout } = props;

  return (
    <View style={styles.profile}>
      <View style={styles.header}>
        <Text style={styles.headerItem}></Text>
        <Text style={styles.headerItem}>Edit Profile</Text>
        <PressableFade style={[styles.headerItem]} onPress={logout}>
          <Text style={styles.headerLogout}>Log Out</Text>
        </PressableFade>
      </View>
      <View style={styles.avatar}>
        <Image style={styles.avatarImage} source={Images.Photo} />
        <View style={styles.edit}>
          <Icons.Edit
            width={Demensions.scale(16)}
            height={Demensions.verticalScale(14)}
          />
        </View>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
    </View>
  );
});
