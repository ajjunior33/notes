import React from "react";
import { Text } from "react-native";

function ViewContainer(props) {
  return <Text>{props.children}</Text>;
}

export default ViewContainer;
