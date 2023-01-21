import React from "react";
import { Animated } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { swipeRightActions } from "../utils/helpers";
import ComponentListFlight from "./ComponentListFlight";

const ListFlights = ({ data, scale, opacity }) => {
  
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={swipeRightActions}>
        <Animated.View style={{ transform: [{ scale }], opacity }}>
          <ComponentListFlight {...data} condition={true} />
        </Animated.View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListFlights;
