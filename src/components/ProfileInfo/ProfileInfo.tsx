import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./ProfileInfoStyle";
import * as Images from "./../../assets/images";
import * as FileSystem from "expo-file-system";
import * as Icons from "./../../assets/icons";
import { Demensions } from "../../helpers";
import { PressableFade } from "../PressableFade/PressableFade";
import * as ImagePicker from "expo-image-picker";
import { Database } from "../../services/database";

type ProfileInfoType = {
  id: number;
  name: string;
  position: string;
  image: string | undefined;
  logout: () => void;
};

export const ProfileInfo = React.memo((props: ProfileInfoType) => {
  const { name, id, image, position, logout } = props;
  const [images, setImage] = useState<undefined | string>(image);

  useEffect(() => {
    setImage(image);
  }, [image]);

  const onPressPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: "base64",
      });

      Database.updatePhoto(id, `data:image/png;base64,${base64}`);
      setImage(`data:image/png;base64,${base64}`);
    }
  };

  return (
    <View style={styles.profile}>
      <View style={styles.header}>
        <Text style={styles.headerItem}></Text>
        <Text style={styles.headerItem}>Edit Profile</Text>
        <PressableFade style={[styles.headerItem]} onPress={logout}>
          <Text style={styles.headerLogout}>Log Out</Text>
        </PressableFade>
      </View>
      <PressableFade onPress={onPressPhoto}>
        <View style={styles.avatar}>
          {images && (
            <Image
              style={styles.avatarImage}
              source={{
                uri: images,
              }}
            />
          )}
          {!images && (
            <Image style={styles.avatarImage} source={Images.Photo} />
          )}
          <View style={styles.edit}>
            <Icons.Edit
              width={Demensions.scale(16)}
              height={Demensions.verticalScale(14)}
            />
          </View>
        </View>
      </PressableFade>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
    </View>
  );
});
