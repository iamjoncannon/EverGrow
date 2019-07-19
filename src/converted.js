import React, { Fragment } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
} from 'react-native';

const styles = StyleSheet.create({

    viewPortContainer: { 
        flex: 1, 
        flexDirection: "column",
        justifyContent: "center"
    },
    headerImage: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    Date: {
        alignSelf: "center",
        fontSize:10,
        // margin: 10,
        fontFamily: "Avenir-Black"
    },
    Title: {
        alignSelf: "center",
        fontSize: 40,
        // margin: 10,
        fontFamily: "Avenir-Black",
    },
    Feelings: {
        alignSelf: "center",
        fontSize: 20,
        fontFamily: "Avenir-Black",
    }
})


export const Converted = () => {

    return (
        <View style={styles.viewPortContainer}>

            <Image source={require("./sun.png")} 
                   resizeMode="stretch" 
                   style={styles.headerImage} 
            />
            <Text style={styles.Date}>Wednesday, July 31, 2019</Text>
            <Text style={styles.Title}>Welcome Class!</Text>
            <Text style={styles.Feelings}>How are you feeling today?</Text>

        <View style={{flex: 2}}></View>
            
            { /*

            
            
            </View>
            
                <View style="font-size:32px; width: 41.277%; height: 4.78516%; left: 29.4065%; top: 37.207%; display: inline-block; border: 1px solid red;">How are you feeling today?</View>
            </View>
            
                <View style="left: 12.5899%; width: 74.8202%; height: 48.41408%; display: inline-block; border: 1px solid red; overflow: hidden;">
                    <View style="width: 120px; height: 120px; float:left; position: relative; border: 1px solid red;"></View>
                    <View style="width: 120px; height: 120px; float:left; left: 57px; position: relative; border: 1px solid blue;"></View>
                    <View style="width: 120px; height: 120px; overflow: hidden; left: 124px; position: relative; border: 1px solid green;"></View>
                </View>
            </View>
            <View style="width: 100%; height: 9.66797%; left: 0%; top: 90.332%; border: 1px solid green;"></View>
            */}

        </View>
    )
}
