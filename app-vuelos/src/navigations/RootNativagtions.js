import React from "react";
//import Views
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

const RootNativagtions = () => {
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default RootNativagtions;
