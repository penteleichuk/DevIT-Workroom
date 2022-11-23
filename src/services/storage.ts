import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "./database";

export const Storage = {
  async setUser(params: UserType) {
    try {
      const jsonParams = JSON.stringify(params);
      return await AsyncStorage.setItem("@User", jsonParams);
    } catch (e) {
      return undefined;
    }
  },
  async updateUser(params: UserType) {
    try {
      const jsonParams = JSON.stringify(params);
      return await AsyncStorage.mergeItem("@User", jsonParams);
    } catch (e) {
      return undefined;
    }
  },
  async getUser() {
    try {
      const res = await AsyncStorage.getItem("@User");
      return JSON.parse(res as string);
    } catch (e) {
      return undefined;
    }
  },
  async removeUser() {
    try {
      return await AsyncStorage.removeItem("@User");
    } catch (e) {
      return undefined;
    }
  },
};
