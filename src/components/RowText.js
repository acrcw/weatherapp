import React from 'react'
import { View, Text } from 'react-native'
const RowText = (props) => {
    const {msg1,msg2,containerStyles,msg1Styles,msg2Styles}=props;
    return (
        <View style={containerStyles}>
            <Text style={msg1Styles}>{msg1}</Text>
            <Text style={msg2Styles}>{msg2}</Text>
        </View>
    )
}

export default RowText