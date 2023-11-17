import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();


const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue", tabBarInactiveTintColor: "grey", tabBarStyle: { backgroundColor: 'white' }, headerStyle: { backgroundColor: "white" }, headerTitleStyle: { fontWeight: "bold", fontSize: 20 } }}>
            <Tab.Screen name={'Current'} options={{ tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name="weather-windy-variant" size={24} color={focused ? "blue" : "grey"} />) }} >{() => <CurrentWeather weatherData={weather.list[0]} />}</Tab.Screen>
            <Tab.Screen name={'Upcomming'} options={{ tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name="weather-cloudy-arrow-right" size={24} color={focused ? "blue" : "grey"} />) }} >{() => <UpcomingWeather weatherData={weather.list} />}</Tab.Screen>
            <Tab.Screen name={'City'} options={{ tabBarIcon: ({ focused }) => (<MaterialIcons name="location-city" size={24} color={focused ? "blue" : "grey"} />) }} >{() => <City weatherData={weather.city} />}</Tab.Screen>

        </Tab.Navigator>
    )
}

export default Tabs