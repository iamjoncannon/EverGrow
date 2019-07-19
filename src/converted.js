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
        flexDirection: "column",
        justifyContent: "center"
    },
    headerImage: {
        height: 231,
        width: 1112
    },
    studentImage: {
        height: 122,
        width: 122
    },
    footer: {
        height: 99,
        width: 1112
    },
    Date: {
        alignSelf: "center",
        fontSize: 22,
        // margin: 10,
        fontFamily: "Avenir-Medium"
    },
    Title: {
        alignSelf: "center",
        fontSize: 80,
        // margin: 10,
        fontFamily: "Avenir-Black"
    },
    Feelings: {
        alignSelf: "center",
        fontSize: 36,
        fontFamily: "Avenir-Medium"
    }
})


export const Converted = () => {

    return (
        <View style={styles.viewPortContainer}>

            <Image source={require("./sun.png")}
                style={styles.headerImage}
            />
            <Text style={styles.Date}>Wednesday, July 31, 2019</Text>
            <Text style={styles.Title}>Welcome Class!</Text>
            <Text style={styles.Feelings}>How are you feeling today?</Text>

            <View>
                <View style={{ 
                    flex: 1, 
                    flexDirection: 'row', 
                    // justifyContent: 'space-between',
                    flexWrap: 'wrap'
                    }}>
                    <Image source={require("./girl.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./girl.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./girl.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./girl.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./girl.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./boy.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./boy.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./boy.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./boy.png")}
                        style={styles.studentImage}
                    />
                    <Image source={require("./boy.png")}
                        style={styles.studentImage}
                    />
                </View>
                <View style={{ 
                    flex: 1, 
                    flexDirection: 'row', 
                    justifyContent: 'space-between' 
                    }}>
                    
                </View>
            </View>

            {/* <View>
                <Image source={require("./footer.png")}
                    style={styles.footer}
                />
            </View> */}
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
