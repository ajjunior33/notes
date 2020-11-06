import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SyncStorage from "sync-storage";
function Footer(props) {
  //start
  const navigation = useNavigation();
  const token = SyncStorage.get("token");

  //Functions
  function handleTrash(id) {
      console.log(id);
    const uri = `http://192.168.0.240:3333/notes/${id}`;
    var myHeaders = new Headers();
    myHeaders.append("token", token);
    const myRequest = {
      method: "DELETE",
      headers: myHeaders,
      mode: "cors",
    };

    fetch(uri, myRequest)
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((api) => {
        alert(api.message);
        navigation.navigate('ListNotes');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleUpdate(id) {
    //   navigation.navigate('UpdateNote');
  }
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => handleUpdate(props.id)}>
        <Feather name="pen-tool" size={30} color="#1f2328" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTrash(props.id)}>
        <Feather name="trash" size={30} color="#1f2328" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    padding: 10,
    backgroundColor: "#bedef2",
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Footer;
