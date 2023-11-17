import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
const CurrentWeather = ({weatherData}) => {
  const { wrapper, container, temp, feels, highlow, highlowWrapper, bodyWrapper, description ,message,imageLayout} = styles;
  // console.log("1st screen data =",weatherData)
  const {main:{temperature,feels_like,temp_max,temp_min},weather}=weatherData;
  const weatherCondition=weather[0].main;
  return (
    <SafeAreaView style={[wrapper]}>
      {/* ,{backgroundColor:weatherType[weatherCondition].backgroundColor} */}
      <ImageBackground source={require("../../assets/clouds.jpg")} style={imageLayout} >
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={temp}>{temperature}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText msg1={`High: ${temp_max}`} msg2={`Low: ${temp_min}`} containerStyles={highlowWrapper} msg1Styles={highlow} msg2Styles={highlow} />
        <RowText msg1={weather[0].description} msg2={weatherType[weatherCondition].message} containerStyles={bodyWrapper} msg1Styles={description} msg2Styles={message} />
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,// view should fill entire screen
    backgroundColor: "green"
  },

  container: {
    // backgroundColor:"blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    color: "black",
    fontSize: 45,// all dimension in react native are unitless absolute unit of measurement for the device
  },
  feels: {
    fontSize: 30,
    color: "black",
    color:"white"
  },
  highlow: {
    color: "black",
    fontSize: 20,
    color:"white"
  },
  highlowWrapper: {
    flexDirection: "column",
   
  },
  bodyWrapper:
  {
    justifyContent: 'flex-end',
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48,
    color:"white"
  },
  message: {
    fontSize: 30,
    color:"white"
  },imageLayout: {
    flex: 1
}

})
export default CurrentWeather; 