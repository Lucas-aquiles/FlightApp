import React, { useState } from "react";
import { Modal, SafeAreaView, Text, View } from "react-native";
import { styleSelectLocation } from "./style/StyleSelectLocation";
import { ModalPicker } from "./ModalPicker";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCodeInitial,
  handleCityInitial,
  handleCityFinal,
  handleCodeFinal
} from "../redux/features/flightsSlice";

const MySelectLocation = ({ name }) => {
  const location1 = useSelector((state) => state.stateGlobal.cityInitialChoose);
  // const code2 = useSelector((state) => state.stateGlobal.chooseCodeFinal);
  //REDUX Dispatch
  const dispatch = useDispatch();

  //state para el Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  //input data modal
  const [chooseData, setChooseData] = useState("Select Location");
  const [chooseCode, setChooseCode] = useState("");
  const [chooseCityFinal, setchooseCityFinal] = useState("Select Location");
  const [chooseRouteFinal, setchooseRouteFinal] = useState("");

  const changeModalVisibility = (parameter) => {
    setIsModalVisible(parameter);
  };

  //actualizar estado redux
  const setCode = (code) => {
    setChooseCode(code);
    dispatch(handleCodeInitial(code));
  };

  const setCityInitial = (cityInitial) => {
    setChooseData(cityInitial);
    dispatch(handleCityInitial(cityInitial));
  };

  //actualizar estado redux
  const setCode2 = (code) => {
    setchooseRouteFinal(code);
    dispatch(handleCodeFinal(code));
  };

  const setCityInitial2 = (cityInitial) => {
    setchooseCityFinal(cityInitial);
    dispatch(handleCityFinal(cityInitial));
  };

  return (
    <SafeAreaView>
      <View style={styleSelectLocation.txtSelect}>
        {name === "initial" ? (
          <Text
            onPress={() => changeModalVisibility(true)}
            style={styleSelectLocation.text}
          >
            {chooseData},{chooseCode}
          </Text>
        ) : (
          <Text
            onPress={() => changeModalVisibility(true)}
            style={styleSelectLocation.text}
          >
            {chooseCityFinal},{chooseRouteFinal}
          </Text>
        )}
      </View>
      <Modal
        transparent
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          name={name}
          changeModalVisibility={changeModalVisibility}
          setCityInitial={setCityInitial}
          setCode={setCode}
          setCode2={setCode2}
          setCityInitial2={setCityInitial2}
        />
      </Modal>
    </SafeAreaView>
  );
};
export default MySelectLocation;
