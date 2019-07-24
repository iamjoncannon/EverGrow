import React, { Fragment } from 'react';

import { Image, ImageBackground, Dimensions, View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const Tree = (props) => {

    return (
    
        <View>

            <ImageBackground 
                source={require('../assets/treeOpening.png')} 
                style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width}}
            > 

            <View style={{ width: 204, 
                           flex: 1, 
                            overflow: 'visible',
                           position: "absolute",
                           top: 240,
                           left: 60
                        }}> 
            <ImageBackground
                source={require('../assets/Triangle.png')}
                style={{ overflow: "visible", 
                         height: 204, 
                         width: 330,
                         flex: 1 }}
            > 
                
                <Text adjustsFontSizeToFit={true} style={{ color: 'rgba(1, 0, 115, 1)', fontFamily: 'Avenir-Heavy', marginTop: 20, width: 200, fontSize: 40, textAlignVertical: 'center', alignSelf: 'center'}}>
                    Hi there! Ready to check in?
                </Text>

            </ImageBackground>

            <TouchableOpacity onPress={props.handleNext}>
                <View
                    style={{ zIndex: 2, backgroundColor: 'rgba(131,242,196, 1.0)', height: 60, width: 282 }}
                >
                            <Text style={{ marginTop: 15, fontFamily: 'Avenir-Heavy', fontSize: 22, textAlign: 'center', textAlignVertical: 'center', alignSelf: 'center' }}>YES!</Text>
                
                </View>
            </TouchableOpacity>
            
            </View>
            </ImageBackground>
        </View>
    )
}

export default Tree

{/* <Image 
            source={require('./talkBox.png')}
            style={{ position: 'absolute', top: 100, left: 30, zIndex: 2, height: 300, width: 300 }}
        /> */}