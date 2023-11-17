import React from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View } from 'react-native'
import moment from 'moment';
import IconText from '../components/IconText';
const City = ({ weatherData }) => {
    const { container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, imageLayout } = styles
    const { name, country, population, sunrise, sunset } = weatherData;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/clouds.jpg')} style={imageLayout}>
                <Text className style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={populationWrapper}>
                    <IconText iconName={'user'} iconSize={40} bodyText={population} bodyTextStyles={populationText} />
                </View>
                <View style={riseSetWrapper}>
                    <IconText iconName={'sunrise'} iconSize={50} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText} />

                    {/* <Feather name={'sunrise'} size={50} />
                    <Text style={styles.riseSetText}>5 AM</Text> */}
                    <IconText iconName={'sunset'} iconSize={50} iconColor={'white'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent:"center",
        textAlign:"center"
    },
    imageLayout: {
        flex: 1
    },
    cityName:
    {

        fontSize: 40,

    },
    countryName: {

        fontSize: 30,

    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: 'bold',
        color: "white"
    },
    populationWrapper: {
        // flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent:'center',      
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white'
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
        textAlign: 'center'
    }
})
export default City