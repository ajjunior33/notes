import React, { useEffect } from "react";
import SyncStorage from "sync-storage";
import { Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

function Auth() {
  const navigation = useNavigation();
  const token = SyncStorage.get("token");
  useEffect(() => {
    console.log("Auth confirm.");
    console.log(token);

    if (!token) {
      navigation.navigate("Login");
    } else {
      navigation.navigate("ListNotes");
    }
  }, []);
  return <Text>Hello,world!a</Text>;
}

export default Auth;
