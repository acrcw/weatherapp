// useGetWeather.js
import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { API_KEY } from '@env';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [location, setLocation] = useState(null);

    const fetchWeatherData = async () => {
        try {
            if (location) {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`);
                const data = await res.json();
                setWeather(data);
                setLoading(false);
            }
        } catch (err) {
            setError("Unable to fetch weather");
        }
    };

    useEffect(() => {
        const getLocationAndWeather = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setError("Location permission not granted");
                    return;
                }
                let loc = await Location.getCurrentPositionAsync({});
                setLocation(loc.coords);
            } catch (err) {
                setError("Error getting location");
            }
        };

        getLocationAndWeather();
    }, []);

    useEffect(() => {
        if (location) {
            fetchWeatherData();
        }
    }, [location]);

    return [loading, error, weather];
};
