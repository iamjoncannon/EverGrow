import React, {Component} from 'react';

import {
    ScrollView,
    View,
    Image,
    Text,
    Dimensions,
    FlatList,
    Modal,
    TouchableOpacity,
    TextInput,
    Keyboard,
    PixelRatio
} from 'react-native';


const GreenButton = (props) => {

    let {height, width} = props.globalDims
    let {heightFactor, widthFactor, callback} = props

    return (

        <TouchableOpacity onPress={callback}>
            <View style={
                {
                    ...styles.greenButton,
                    height: 68,
                    width: 777
                }
            }>
                <Text style={
                    {
                        fontSize: 22,
                        fontFamily: "Avenir-Heavy",
                        color: 'rgb(1, 0, 115)',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        alignSelf: 'center'
                    }
                }>DONE!</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GreenButton
