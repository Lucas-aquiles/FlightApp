import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const styleSelectLocation = StyleSheet.create({
  text: {
    fontSize: 15,
    color: Colors.grey
  },
  txtSelect: {
    marginLeft: 20,
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
