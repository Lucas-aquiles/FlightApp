import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const stylesMyButton = StyleSheet.create({
  container: {
    width: "95%",
    height: 50,

    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 15,
    marginTop: 15
  },
  txtBtn: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "500"
  },
  btnGoogle: {
    position: "absolute",
    marginTop: 20,
    marginLeft: 20
  },
  dimensionBtnGoogle: {
    width: 40,
    height: 40
  }
});
