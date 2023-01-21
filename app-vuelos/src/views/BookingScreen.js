import { View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import IconBack from "../components/IconBack";
import { useNavigation } from "@react-navigation/native";
import { stylesBookingScreen } from "./style/stylesBookingScreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";
import { handleColor } from "../redux/features/flightsSlice";

const BookingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const stateApp = useSelector((state) => state.stateGlobal);

  useEffect(() => {
    if (stateApp.cityInitialChoose !== "") {
      dispatch(handleColor(true));
    } else {
      dispatch(handleColor(false));
    }
  }, [stateApp.cityInitialChoose]);

  return (
    <SafeAreaView style={stylesBookingScreen.container}>
      {/* <KeyboardAwareScrollView> */}
      <IconBack />
      <View style={stylesBookingScreen.title}>
        <TextBooking titleContent={"Where are you"} />
        <TextBooking titleContent={"now?"} />
      </View>
      <View style={stylesBookingScreen.input}>
        <MySelectLocation name={"initial"} />
      </View>
      {/* </KeyboardAwareScrollView> */}
      <View style={stylesBookingScreen.buttonStyle}>
        <MyButton
          text={" Next "}
          onPress={() => navigation.navigate("BookingDestinity")}
          btnColor={stateApp.colorBtn}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
