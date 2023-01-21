import { View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";
import { styleIconBack } from "./style/StyleIconBack";
import { useNavigation } from "@react-navigation/native";

const IconBack = () => {
  const navigation = useNavigation();
  return (
    <View style={styleIconBack.iconStyle}>
      <Ionicons
        name="chevron-back"
        size={29}
        color={Colors.blue}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default IconBack;
