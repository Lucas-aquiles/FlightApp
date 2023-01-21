import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { stylesFloatinActionButton } from "./style/StyleFloatinActionButton";

const FloatingActionButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={stylesFloatinActionButton.containerFAB}
      onPress={() => navigation.navigate("Booking")}
    >
      <Text style={stylesFloatinActionButton.title}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
