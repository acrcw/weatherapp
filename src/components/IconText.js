import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
const IconText = (props) => {
    const { iconName, iconColor, bodyText,bodyTextStyles ,iconSize} = props;
    const {textTheme,container} =styles
    return (
        <View style={container}>
            <Feather style={{alignSelf:'center'}} name={iconName} size={iconSize==undefined?100:iconSize} color={iconColor==undefined?'white':iconColor} />
            <Text style={[textTheme,bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textTheme: {
        fontWeight: "bold"
    },
    container:{
        alignItems:"center"
    }
})
export default IconText;