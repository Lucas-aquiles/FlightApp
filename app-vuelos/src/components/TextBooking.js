import { Text } from "react-native";
import React from "react";
import { stylesTitle } from "./style/StyleTitle";

const TextBooking = ({ titleContent }) => {
  return <Text style={stylesTitle.titleBookingS}>{titleContent}</Text>;
};

export default TextBooking;
