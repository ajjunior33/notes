import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import SyncStorage from "sync-storage";

//Files
import global from "../global";

//Components

import Footer from "../components/Footer";

function DetailsPost() {
  const [note, setNote] = useState([]);
  const token = SyncStorage.get("token");
  const route = useRoute();
  const navigation = useNavigation();
  function goBack() {
    return navigation.goBack();
  }
  useEffect(() => {
    const id = route.params.post;
    const uri = `http://192.168.0.240:3333/notes/${id}`;
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
        setNote(api.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={global.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Feather name="arrow-left" size={30} color="#f1f1f1" />
        </TouchableOpacity>
        <Text style={styles.title}>{note.name}</Text>
      </View>

      <ScrollView style={styles.section}>
        <Text style={styles.textSimples}>{note.message}</Text>
      </ScrollView>
      <Footer id={note._id} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
  title: {
    color: "#f1f1f1",
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
  },
  section: {
    width: "100%",
    maxHeight: 480,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  textSimples: {
    fontSize: 17,
    color: "#fff",
    textAlign: "justify",
  },
});

export default DetailsPost;
