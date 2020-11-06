import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import global from "../global";

function NewPost() {
  const navigate = useNavigation();
  function goBack() {
    return navigate.goBack();
  }

  return (
    <View style={global.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Feather name="arrow-left" size={30} color="#f1f1f1" />
        </TouchableOpacity>
        <Text style={styles.title}>Novo post em Markdown</Text>
      </View>

      <TextInput placeholder="Titulo" style={styles.inputControl} />
      <TextInput
        placeholder="Sua mensagem aqui"
        style={styles.textAreaControl}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          <Feather name="save" color="#1f2328" size={16} />
          Salvar
        </Text>
      </TouchableOpacity>
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
  inputControl: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
    width: 340,
    borderRadius: 8,
    marginVertical: 5,
  },
  textAreaControl: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
    width: 340,
    minHeight: 380,
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
export default NewPost;
