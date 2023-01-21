//imports system
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

//imports theme and styles user
import { Colors } from "../theme/Colors";
import { stylesSignUp } from "./style/StyleSigUp";
//components User
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import Title from "../components/Title";

// firebase
import { handleCreateAcount } from "../firebase/auth-firebase";

const SignUp = () => {
  const navigation = useNavigation();
  //useStates
  const [isChecked, setChecked] = useState(false);
  const [isCheckedAux, setCheckedAux] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setshowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("*Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("*Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.name) {
      handleError("*Please input fullname", "name");
      isValid = true};

    if (!inputs.password) {
      handleError("*Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("*Min password length of 8", "password");
      isValid = false;
    } else if (
      !inputs.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
      )
    ) {
      handleError("*Please input a valid password", "password");
      isValid = false;
    }
    if (!isChecked) {
      alert("*Please acept Termns and Privacy policy");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  }

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        //navigation.navigate('LoginScreen');
        handleCreateAcount(inputs.email, inputs.password, inputs.name);
        alert("GOOOO GOOOOOO!!!!");
        alert("GOOO");
      } catch (error) {
        alert("Error", "Something went wrong");
      }
    }, 500);
  };

  //functions
  const handleOnchange = (text, inputs) => {
    setInputs((prevState) => ({ ...prevState, [inputs]: text }));
  };
  const handleError = (errors, inputs) => {
    setErrors((prevState) => ({ ...prevState, [inputs]: errors }));
  };

  return (
    <SafeAreaView style={stylesSignUp.container}>
      <StatusBar style="dark" />
      <KeyboardAwareScrollView>
        <Title titleContent={"Sign Up"} />
        <MyInput
          label={"Firts Name"}
          keyboardType="default"
          onChangeText={(text) => handleOnchange(text, "name")}
          error={errors.name}
          onFocus={() => handleError(null, "name")}
        />
        <MyInput
          label={"Email *"}
          keyboardType="email-address"
          onChangeText={(text) => handleOnchange(text, "email")}
          error={errors.email}
          onFocus={() => handleError(null, "email")}
        />
        <MyInput
          label={"Password *"}
          secureTextEntry={!showPassword}
          onChangeText={(text) => handleOnchange(text, "password")}
          icons={"eye"}
          showPassword={showPassword}
          setshowPassword={setshowPassword}
          error={errors.password}
          onFocus={() => handleError(null, "password")}
        />

        <Text style={stylesSignUp.txtPassw}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            style={stylesSignUp.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? Colors.blue : null}
          />

          <Text style={stylesSignUp.textCheckBox}>
            I agree to the{" "}
            <Text style={{ textDecorationLine: "underline" }}>Terms</Text> and{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Privacy Policy
            </Text>
            .<Text style={{ color: "tomato" }}>*</Text>
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Checkbox
            style={stylesSignUp.checkbox}
            value={isCheckedAux}
            onValueChange={setCheckedAux}
            color={isCheckedAux ? Colors.blue : null}
          />
          <Text style={stylesSignUp.textCheckBox}>
            Subscribe for select product updates.
          </Text>
        </View>

        <MyButton
          text={"Sign Up "}
          alertText={"Press Btn Sing Up"}
          name={"sing"}
          onPress={validate}
        />

        <Text style={[stylesSignUp.textCheckBox, { textAlign: "center" }]}>
          or
        </Text>

        <MyButton
          text={"Sign Up with Google"}
          alertText={"Press Btn Google"}
          name={"google"}
        />

        <Text
          style={[
            stylesSignUp.textCheckBox,
            { textAlign: "center", marginTop: 20 }
          ]}
        >
          Already have an account?{"  "}
          <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              textDecorationLine: "underline",
              color: Colors.blue
            }}
          >
            Log in
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
  }

export default SignUp;
