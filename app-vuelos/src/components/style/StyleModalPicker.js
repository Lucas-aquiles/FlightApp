import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const styleModalPicker = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 10
  },
  option: {
    alignItems: "flex-start"
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white2
  },
  contentContainerStyle: {
    backgroundColor: Colors.blue,
    paddingVertical: 5
  }
});
