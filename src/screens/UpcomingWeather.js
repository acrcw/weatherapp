import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList ,StatusBar,ImageBackground} from 'react-native';
import ListItem from '../components/ListItem';
const UpcomingWeather = ({weatherData}) => {
    // console.log("2rd screen data =",weatherData)
    const renderItem = ({item}) => {
        return(
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} icon={item.weather[0].icon}></ListItem>
        )
    }
    return (
        <SafeAreaView style={styles.container}> 
            <ImageBackground source={require("../../assets/clouds.jpg")} style={styles.image}>
            <Text style={{textAlign:'center',color:'white'}}>5 day Forecast</Text>
            
            <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item)=>{ return item.dt_txt}}/>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
        backgroundColor:'grey'
        
        
    },
    image:{
        flex:1
    }
})
export default UpcomingWeather;