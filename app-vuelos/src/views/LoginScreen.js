import React, { useState, useEffect, Suspense } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Keyboard,
  
} from "react-native";
import { BlurView } from "expo-blur";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { stylesLogin } from "../views/style/StyleLogin";
import { useNavigation } from "@react-navigation/native";
import { LogBox } from "react-native";
//firebase
import { signInAcount } from "../firebase/auth-firebase";
import Loader from "./Loader";
import { auth } from "./../firebase/auth-firebase";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential,onAuthStateChanged } from "firebase/auth";
import { CLIENT_ID, ANDROID_CLIENT_ID } from "@env";

const uri =
  "https://images.unsplash.com/photo-1527517928481-bcf8d6534de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2aWFjaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
LogBox.ignoreLogs(["AsyncStorage"]);
const LoginScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const [btnColor, setBtnColor] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setshowPassword] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [loading, setLoading] = React.useState(false);

  // useEffect(() => {
  //   if (loginState) {
  //     {
  //       navigation.navigate("Fligths");
  //     }
  //   }
  // }, [loginState]);

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

    if (isValid) {
      // register();
      login();
    }
  };

  // const login = () => {
  //   setLoading(true);
  //   setTimeout(async () => {
  //     signInAcount(inputs.email, inputs.password, setLoginState);
  //     setLoading(false);
  //   }, 500);
  // };

  //functions
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  useEffect(() => {
    if (inputs.email !== "" && inputs.password !== "") {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }, [inputs.password]);

  //Login Con Google

  // WebBrowser.maybeCompleteAuthSession();

  // export default function GoogleSignInButton() {
  const [request, response, promtAsync] = Google.useIdTokenAuthRequest({
    clientId: CLIENT_ID ,///Firebase
    androidClientId: ANDROID_CLIENT_ID

  });


  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential);
  //     // setLoginState(true)
  //   }
  // }, [response]);


//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
//     if (user) {
//     const userToSave = {
//     email: user.email
//     };
//     } else {
//     alert("user is not authenticated");
//     }
//     if (user.email) {
//     setLoginState(true);
//     }
//     return {
//     email_user: user.email
//     };
  
// });
// return unsubscribeAuth;
// }, []);


  return (
    <SafeAreaView style={stylesLogin.container}>
      <StatusBar style="light" />
      <Image
        source={{ uri }}
        style={[stylesLogin.image, StyleSheet.absoluteFill]}
      />
      <KeyboardAwareScrollView style={stylesLogin.keyboard}>
        <ScrollView contentContainerStyle={stylesLogin.contentContainer}>
          <BlurView intensity={70}>
            <View style={stylesLogin.login}>
              <LottieView
                autoPlay
                style={stylesLogin.lottieStyle}
                source={require("../../assets/flights.json")}
              />
              <View>
                <MyInput
                  label={"Email"}
                  keyboardType={"email-address"}
                  onChangeText={(text) => handleOnchange(text, "email")}
                  error={errors.email}
                  onFocus={() => handleError(null, "email")}
                />

                <MyInput
                  label={"Password"}
                  keyboardType={"keyboardType"}
                  secureTextEntry={true}
                  onChangeText={(text) => handleOnchange(text, "password")}
                  showPassword={showPassword}
                  setshowPassword={setshowPassword}
                  error={errors.password}
                  onFocus={() => handleError(null, "password")}
                />

                <View style={stylesLogin.viewStylesButtons}>
                  <MyButton
                    text={" Login "}
                    alertText={"Press Btn Sing Up"}
                    onPress={validate}
                    btnColor={btnColor}
                  />

                  <MyButton
                    text={"Sign Up with Google "}
                    name={"google"}
                    disable={!request}
                    onPress={() => promtAsync()}
                  />
                </View>

                <Text
                  onPress={() => navigation.navigate("SignUp")}
                  style={stylesLogin.textStyles}
                >
                  Register
                </Text>
              </View>
            </View>
          </BlurView>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
