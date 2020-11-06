import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import SyncStorage from "sync-storage";
import { useNavigation } from "@react-navigation/native";
import global from "../global";
import api from "../services/api";

import { Feather } from "@expo/vector-icons";

function ListNotes() {
  const [notes, setNotes] = useState([]);
  const token = SyncStorage.get("token");
  const navigation = useNavigation();

  function handleNewPost() {
    navigation.navigate("NewPost");
  }

  function handleDetailsPost(post) {
    navigation.navigate("DetailsPost", { post });
  }

  useEffect(() => {
    const uri = "http://192.168.0.240:3333/notes";
    var myHeaders = new Headers();
    myHeaders.append("token", token);
    const myRequest = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
    };

    fetch(uri, myRequest)
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((api) => {
        setNotes(api);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [notes]);

  return (
    <View style={global.container}>
      {notes.map((note) => (
        <TouchableOpacity
          style={styles.post}
          key={note._id}
          onPress={() => handleDetailsPost(note._id)}
        >
          <Text style={styles.titlePost}>{note.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.buttonMore} onPress={handleNewPost}>
        <Text style={styles.buttonMoreText}>
          <Feather name="plus" size={24} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  post: {
    padding: 15,
    backgroundColor: "#bedef2",
    width: "100%",
    borderRadius: 8,
    margin: 15,
  },
  titlePost: {
    color: "#71828d",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonMore: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#bedef2",

    position: "absolute",
    bottom: 30,
    right: 20,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListNotes;
