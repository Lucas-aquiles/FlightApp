import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const stylesLogin = StyleSheet.create({
  keyboard: {
    marginTop: 30,
    paddingTop: 30
  },
  scrollStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  lottieStyle: {
    width: 200,
    height: 170
  },
  textStyles: {
    textDecorationLine: "underline",
    color: "blue",
    marginLeft: 280
  },
  container: {
    flex: 1,
    backgroundColor: Colors.brown,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.45
  },
  login: {
    width: "95%",
    height: 650,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    opacity: 0.8
  },
  viewStylesButtons: {
    marginTop: 15
  }
});
