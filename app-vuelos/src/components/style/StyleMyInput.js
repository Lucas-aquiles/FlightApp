import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const stylesMyInput = StyleSheet.create({

   container:{
     flexDirection: "row",
      alignItems: "center" 
   } 
,
    input: {
      paddingLeft: 8,
      alignSelf: "center",
      width: "100%",
      height: 50,
      borderWidth: 1.5,
      borderRadius: 5
    },
    icon: {
      fontSize: 22,
      position: "absolute",
      right: 10
      //color: Colors.grey
    },
    textEmailP: {
      fontSize: 17,
      marginTop: 25,
      marginBottom: 5
    },
    errorMensage:{
      paddingHorizontal: 8, 
      marginTop: 23, 
      color: Colors.red, 
      fontSize: 16
    },
    viewStyle:{
      flexDirection: 'row',
      alignItems: 'center'
    }

});