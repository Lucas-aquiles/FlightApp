import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { citys } from "../data/citys";
import { styleModalPicker } from "./style/StyleModalPicker";

//Constantes para el manejo de la modal
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ModalPicker = (props) => {
  //Props para enviar a component padre
  const onPressItem = (country, code) => {
    props.changeModalVisibility(false);
    props.setCode(code);
    props.setCityInitial(country);
  };
  const onPressItem2 = (country, code) => {
    props.changeModalVisibility(false);
    props.setCode2(code);
    props.setCityInitial2(country);
  };

  //function del flashlist
  const renderItem = ({ item }) => {
    const { country, code } = item;
    return (
      <TouchableOpacity
        style={styleModalPicker.option}
        onPress={() => onPressItem(country, code)}
      >
        <Text style={styleModalPicker.text}>
          {country},{code}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderItem2 = ({ item }) => {
    const { country, code } = item;
    return (
      <TouchableOpacity
        style={styleModalPicker.option}
        onPress={() => onPressItem2(country, code)}
      >
        <Text style={styleModalPicker.text}>
          {country},{code}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styleModalPicker.container}
    >
      <View
        style={[
          styleModalPicker.modal,
          { width: WIDTH - 20, height: HEIGHT / 2 }
        ]}
      >
        <FlashList
          data={citys}
          contentContainerStyle={styleModalPicker.contentContainerStyle}
          renderItem={props.name === "initial" ? renderItem : renderItem2}
          estimatedItemSize={200}
          numColumns={1}
        />
      </View>
    </TouchableOpacity>
  );
};
export { ModalPicker };
