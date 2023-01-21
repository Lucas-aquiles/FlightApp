import { Colors } from "../../theme/Colors";
import { StyleSheet } from "react-native";

export const stylesListFlights = StyleSheet.create({
  citysCode: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10
  },
  citys: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    borderBottomColor: Colors.grey2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  info: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    // borderBottomColor: "black",
    // borderBottomWidth: 1
  },
  iconFligth: {
    transform: [{ rotate: "90deg" }],
    alignSelf: "center",
    position: "absolute",
    marginLeft: 166
  },
  city: {
    fontSize: 12,
    color: Colors.grey
  },
  infotext: {
    fontSize: 12,
    color: Colors.black
  },
  routes: {
    fontWeight: "bold",
    fontSize: 25
  }
});
