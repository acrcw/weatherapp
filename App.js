import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/components/Tabs";
import { StyleSheet, View,Text } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const [loading, error, weather] = useGetWeather();
  
  if (loading) {
    
    return (
      // <View style={[styles.container, styles.horizontal]}>
      //   <ActivityIndicator size='large' color='#0000ff' />
      // </View>
      <View style={[styles.container, styles.horizontal]}>
        <Text> Loading </Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default App;
