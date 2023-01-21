import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { Colors } from "../theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { handlePassengers } from "../redux/features/flightsSlice";

const DATA = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const SpinPickerPassagers = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <View
        style={{
          height: "60%",
          width: "30%",
          alignSelf: "center",
          alignItems: "center"
        }}
      >
        <ScrollPicker
          style={{ backgroundColor: "red" }}
          dataSource={DATA}
          selectedIndex={0}
          renderItem={(data, index) => (
            <Text key={index} style={styles.itemNumbers}>
              {data}
            </Text>
          )}
          onValueChange={(data) => {
            dispatch(handlePassengers(data));
          }}
          wrapperHeight={165}
          itemHeight={50}
          highlightColor={Colors.white3}
          wrapperColor={Colors.white3}
        />
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: 75,
          marginLeft: 140
        }}
      >
        <Ionicons name="caret-forward" size={24} color={Colors.blue} />
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: 75,
          marginLeft: 250
        }}
      >
        <Ionicons name="caret-back" size={24} color={Colors.blue} />
      </View>
    </View>
  );
};

export default SpinPickerPassagers;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemNumbers: {
    fontWeight: "bold",
    fontSize: 36,
    paddingVertical: 5
  }
});
