import { View, SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "../components/MyButton";
import TextBooking from "../components/TextBooking";
import { Colors } from "../theme/Colors";

import { AntDesign } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { useDispatch, useSelector } from "react-redux";
import ComponentListFlight from "../components/ComponentListFlight";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { handlFechaViaje, handleColor } from "../redux/features/flightsSlice";
import IconBack from "../components/IconBack";

export default function CalendarScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const stateApp = useSelector((state) => state.stateGlobal);
  const routeInitial = useSelector(() => stateApp.chooseCodeIntial);
  const cityInitial = useSelector(() => stateApp.cityInitialChoose);
  const cityFinal = useSelector(() => stateApp.cityFinalChoose);
  const routeFinal = useSelector(() => stateApp.chooseCodeFinal);

  const [day, setDay] = useState("");
  // se guarda el dia seleccionadooooo

  useEffect(() => {
    if (stateApp.fechaViaje !== "") {
      dispatch(handleColor(true));
    } else {
      dispatch(handleColor(false));
    }
  }, [stateApp.fechaViaje]);

  let renderArrow = (direction) => {
    if (direction === "left") {
      return <AntDesign name="left" size={24} color={Colors.blue} />;
    } else {
      return <AntDesign name="right" size={24} color={Colors.blue} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30, width: "98%" }}>
        <IconBack />
        <ComponentListFlight
          routeInitial={routeInitial}
          cityInitial={cityInitial}
          routeFinal={routeFinal}
          cityFinal={cityFinal}
        />
      </View>
      <View style={{ marginLeft: 10, marginBottom: 20 }}>
        <TextBooking titleContent={"Select date"} />
      </View>
      <Calendar
        style={{
          height: "55%",
          borderColor: "gray"
        }}
        theme={{
          textDayFontSize: 16,
          textMonthFontSize: 26,
          textMonthFontWeight: "500"
        }}
        onDayPress={(day) => {
          setDay(moment(day).subtract(1, "M").format("YYYY-MM-DD"));
          dispatch(
            handlFechaViaje(
              moment(day).subtract(1, "M").format("MMMM D, YYYY ")
            )
          );
        }}
        renderArrow={renderArrow}
        disableAllTouchEventsForDisabledDays={true}
        markingType={"custom"}
        markedDates={{
          [day]: {
            customStyles: {
              container: {
                backgroundColor: Colors.blue,
                height: 33,
                width: 33
              },
              text: {
                color: "white",
                fontWeight: "bold"
              }
            }
          }
        }}
      />
      <MyButton
        text={"Next"}
        onPress={() => navigation.navigate("Passenger")}
        btnColor={stateApp.colorBtn}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
