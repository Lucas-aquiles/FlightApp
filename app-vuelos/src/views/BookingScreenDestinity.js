import { View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import IconBack from "../components/IconBack";
import ComponentListFlight from "../components/ComponentListFlight";
import { useNavigation } from "@react-navigation/native";
import { StyleBookingDestinity } from "./style/StyleBookingDestinity";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";
import { handleColor } from "../redux/features/flightsSlice";

export default function BookingScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const stateApp = useSelector((state) => state.stateGlobal);

  const routeInitial = useSelector(() => stateApp.chooseCodeIntial);
  const cityInitial = useSelector(() => stateApp.cityInitialChoose);

  useEffect(() => {
    if (stateApp.chooseCodeFinal !== "") {
      dispatch(handleColor(true));
    } else {
      dispatch(handleColor(false));
    }
  }, [stateApp.chooseCodeFinal]);

  return (
    <SafeAreaView style={StyleBookingDestinity.container}>
      <IconBack />
      <ComponentListFlight
        routeInitial={routeInitial}
        cityInitial={cityInitial}
      />

      <View style={StyleBookingDestinity.title}>
        <TextBooking titleContent={"Where will you be"} />
        <TextBooking titleContent={"flying to?"} />
      </View>

      <View style={StyleBookingDestinity.input}>
        <MySelectLocation />
      </View>
      <View style={StyleBookingDestinity.buttonStyle}>
        <MyButton
          text={" Next "}
          onPress={() => navigation.navigate("Calendars")}
          btnColor={stateApp.colorBtn}
        />
      </View>
    </SafeAreaView>
  );
}
