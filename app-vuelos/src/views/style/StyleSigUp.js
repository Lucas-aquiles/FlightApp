import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
    marginTop: 30
  },
  input: {
    paddingLeft: 8,
    alignSelf: "center",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 8
  },

  textCheckBox: {
    fontSize: 17,
    color: Colors.grey,
    marginBottom: 13,
    paddingHorizontal: 6
  },
  txtPassw: {
    marginTop: 4,
    marginBottom: 15,
    color: Colors.grey,
    paddingBottom: 20
  }
});
