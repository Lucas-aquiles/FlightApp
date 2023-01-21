import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Views
import LoginScreen from "../views/LoginScreen";
import SignUp from "../views/SignUp";
import MyFlights from "../views/MyFlights";
import BookingScreen from "../views/BookingScreen";
import BookingScreenDestinity from "../views/BookingScreenDestinity";
import CalendarScreen from "../views/CalendarsScreen";
import Passenger from "./../views/Passenger";
import AbstracFligth from "../views/AbstracFligth";
// import HomePrueba from "../views/HomePrueba";

//configStack
import { myConfigHeader } from "../utils/helpers";

//Creamos el stack
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={myConfigHeader}>
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} /> */}
      <Stack.Screen name="Fligths" component={MyFlights} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen
        name="BookingDestinity"
        component={BookingScreenDestinity}
      />
      <Stack.Screen name="Calendars" component={CalendarScreen} />
      <Stack.Screen name="Passenger" component={Passenger} />
      <Stack.Screen name="AbstracFligth" component={AbstracFligth} />
      {/* <Stack.Screen name="HomePrueba" component={HomePrueba} /> */}
    </Stack.Navigator>
  );
};

export default MyStack;
