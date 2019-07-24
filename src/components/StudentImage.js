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

const StudentImage = (props) => {

    const { id, imageSource, dims, handleModalInit, name, checkedIn } = props

    const opacity = checkedIn ? 0.2 : 1;

    return (

        <TouchableOpacity onPress={() => !checkedIn ? handleModalInit(id) : " "} >

            <View style={{ flex: 1, margin: 18 }}>
                <Image
                    source={imageSource}
                    style={{ height: 120, width: 120, opacity: opacity }}
                />
                <Text style={{ fontSize: 22, alignSelf: 'center', fontFamily: "Avenir-Medium" }}>{name}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default StudentImage