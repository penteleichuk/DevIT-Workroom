import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./ProfileInfoStyle";
import * as Images from "./../../assets/images";
import * as Icons from "./../../assets/icons";
import { Demensions } from "../../helpers";

export const ProfileInfo = React.memo(() => {
  return (
    <View style={styles.profile}>
      <View style={styles.header}>
        <Text style={styles.headerItem}></Text>
        <Text style={styles.headerItem}>Edit Profile</Text>
        <Text style={[styles.headerItem, styles.headerLogout]}>Log Out</Text>
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
      <Text style={styles.name}>Mike Tyson</Text>
      <Text style={styles.position}>UI/UX Designer</Text>
    </View>
  );
});
