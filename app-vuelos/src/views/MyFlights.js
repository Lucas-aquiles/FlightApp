import { SafeAreaView, Animated } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Title from "../components/Title";
//import { data } from "../data/data";
import ListFlights from "../components/ListFlights";
import FloatingActionButton from "../components/FloatingActionButton";
import { stylesMyFlights } from "./style/StyleMyFlights";
import MyButton from "../components/MyButton";
//firebase
import {
  where,
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db, auth ,signOut} from "../firebase/auth-firebase";
const user = auth;

//constan animated
const SPACING = 20;
const ITEM_SIZE = 70 + SPACING * 3;

const MyFlights = ({ navigation }) => {
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);

  //function firebase
  async function loadData() {
    const collectionRef = collection(db, "flights");
    const flights = query(
      collectionRef,
      //----------------------------------------------//
      where("email", "==", `${user.currentUser.email}`)
    );
    const queryFlights = await getDocs(flights);
    let flightData = [];
    queryFlights.forEach((doc) => {
      flightData.push({ id: doc.id, data: doc.data() });
    });
    setData(flightData);
  }

  
  useEffect(() => {
    loadData();
  }, []);

  const listData = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 0.5)
    ];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0]
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0]
    });
    return (
      <ListFlights {...item} index={index} scale={scale} opacity={opacity} />
    );
  };
  const scrollY = useRef(new Animated.Value(0)).current;

  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
      loadData();
    }, 1500);
  };
  // const onSignOut = () => {
  //   signOut(user).catch((err) => alert("Error SingOout"));
  //   navigation.navigate("LoginScreen")
  //   };

  return (
    <SafeAreaView style={stylesMyFlights.container}>
      <StatusBar style="dark" />
        {/* <MyButton
         text={"Logout"}
         onPress={() => onSignOut()}
       /> */}
      <Title titleContent={"My Flights"} />
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.id}
        renderItem={listData}
        refreshing={refresh}
        onRefresh={() => pullMe()}
      />
      <FloatingActionButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyFlights;
