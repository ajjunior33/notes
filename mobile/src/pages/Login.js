import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SyncStorage from "sync-storage";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function Login() {
  const [loggin, setLoggin] = useState("");
  const navigation = useNavigation();

  async function handleLogin() {
    const uri = "http://192.168.0.240:3333/users/auth";
    var myHeaders = new Headers();
    myHeaders.append("token", loggin);
    const myRequest = {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
    };

    fetch(uri, myRequest)
      .then((response) => {
        return response.json();
      })
      .then((api) => {
        console.log(api.cod_access);
        SyncStorage.set("token", api.cod_access);
        navigation.navigate("Auth");
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Login"
        style={styles.inputControl}
        value={loggin}
        onChangeText={(e) => setLoggin(e)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar minha conta</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: "#1f2328",

    display: "flex",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",

    position: "relative",
  },
  inputControl: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
    width: 340,
    borderRadius: 8,
    marginVertical: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#bedef2",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#1f2328",
  },
});
export default Login;
