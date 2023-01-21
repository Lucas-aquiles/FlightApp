import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const stylesFloatinActionButton = StyleSheet.create({
  containerFAB: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    backgroundColor: Colors.blue,
    borderRadius: 70,
    width: 80,
    height: 80
  },
  title: {
    fontSize: 45,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center"
  }
});
