import { Text } from "react-native";
import React from "react";
import { stylesTitle } from "./style/StyleTitle";

const Title = ({ titleContent }) => {
  return <Text style={stylesTitle.title}>{titleContent}</Text>;
};

export default Title;
