import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import IconBack from "../components/IconBack";
import ComponentListFlight from "../components/ComponentListFlight";
import TextBooking from "../components/TextBooking";
import SpinPickerPassagers from "../components/SpinPickerPassagers";
import MyButton from "../components/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { handleColor } from "../redux/features/flightsSlice";

const Passenger = ({ navigation }) => {
  const dispatch = useDispatch();
  const stateApp = useSelector((state) => state.stateGlobal);
  const routeInitial = useSelector(() => stateApp.chooseCodeIntial);
  const cityInitial = useSelector(() => stateApp.cityInitialChoose);
  const cityFinal = useSelector(() => stateApp.cityFinalChoose);
  const routeFinal = useSelector(() => stateApp.chooseCodeFinal);
  const fechaViaje = useSelector(() => stateApp.fechaViaje);

  useEffect(() => {
    if (stateApp.passengers !== "") {
      dispatch(handleColor(true));
    } else {
      dispatch(handleColor(false));
    }
  }, [stateApp.passengers]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <IconBack />
      </View>
      <View style={{ width: "95%" }}>
        <ComponentListFlight
          routeInitial={routeInitial}
          cityInitial={cityInitial}
          routeFinal={routeFinal}
          cityFinal={cityFinal}
          date={fechaViaje}
        />
      </View>
      <View style={{ marginLeft: 20, marginBottom: 20, marginTop: 40 }}>
        <TextBooking titleContent={"How many"} />
        <TextBooking titleContent={"passengers?"} />
      </View>
      <View>
        <SpinPickerPassagers />
      </View>
      <View style={styles.container}>
        <MyButton
          text={"Next"}
          onPress={() => navigation.navigate("AbstracFligth")}
          btnColor={stateApp.colorBtn}
        />
      </View>
    </View>
  );
};

export default Passenger;

const styles = StyleSheet.create({
  container: {
    bottom: 115,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center"
  }
});
