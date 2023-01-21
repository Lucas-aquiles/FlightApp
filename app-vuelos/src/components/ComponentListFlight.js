import { Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { stylesListFlights } from "./style/StyleListFlights";
import { Colors } from "../theme/Colors";

const ComponentListFlight = ({
  cityInitial,
  cityFinal,
  routeInitial,
  routeFinal,
  passengers,
  date,
  condition
}) => {
  return (
    <View>
      <View style={stylesListFlights.citysCode}>
        <Text style={stylesListFlights.routes}>{routeInitial}</Text>
        <MaterialIcons
          name="flight"
          size={24}
          color={Colors.blue}
          style={stylesListFlights.iconFligth}
        />
        <Text style={stylesListFlights.routes}>{routeFinal}</Text>
      </View>
      <View style={stylesListFlights.citys}>
        <Text style={stylesListFlights.city}>{cityInitial}</Text>
        <Text style={[stylesListFlights.city, { paddingBottom: 5 }]}>
          {cityFinal}
        </Text>
      </View>
      <View
        style={[
          stylesListFlights.info,
          condition && { borderBottomColor: "black", borderBottomWidth: 1 }
        ]}
      >
        <Text style={stylesListFlights.infotext}>{date}</Text>
        {passengers && (
          <Text style={[stylesListFlights.infotext, { paddingBottom: 18 }]}>
            {`${passengers} passengers`}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ComponentListFlight;
