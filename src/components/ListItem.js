import React from 'react'
import { Text, View, StyleSheet,Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType';
import moment from 'moment/moment';
const ListItem = (props) => {
    const { dt_txt, min, max, condition ,icon} = props;
    const {item,date,temp}=styles
    return (
        <View style={item}>
            {/* <Feather name={weatherType[condition].icon} size={50} color={'black'}></Feather> */}
            <Image style={styles.tinyLogo} source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />
            <View style={styles.dateTextWrapper}>
            <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
            <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${min}`}</Text>
            <Text style={temp}>{max}</Text> 

        </View>

    )
}

const styles = StyleSheet.create({

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        // backgroundColor: 'white',
        borderRadius:22,
        height:100,
        // backgroundColor:"white",
        backgroundColor: 'transparent'

    },
    tinyLogo: {
        width: 100,
        height: 100,
      },
    temp: {
        color: 'white',
        fontSize: 20

    },
    date: {
        color: 'white',
        fontSize: 15
    },
    dateTextWrapper:{
        flexDirection:"column"
    }
})
export default ListItem;