import React, { Fragment } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window')

console.log(width, height) // 1366 and 1024

const styles = StyleSheet.create({

    viewPortContainer: {
        flexDirection: "column",
        justifyContent: "center"
    },
    headerImage: {
        height: height * .2,  // 231,
        width: width // 1112
    },
    studentImage: {
        height: height * .16 , // 122
        width: height * .16 // 122
    },
    footer: {
        // flex: 1,
        position: "relative",
        height: 99,
        width: 1112,
        bottom: 0
    },
    Date: {
        alignSelf: "center",
        fontSize: 22,
        fontFamily: "Avenir-Medium"
    },
    Title: {
        alignSelf: "center",
        fontSize: 80,
        fontFamily: "Avenir-Black"
    },
    Feelings: {
        alignSelf: "center",
        fontSize: 36,
        fontFamily: "Avenir-Medium",
        marginBottom: 5
    },
    PictureRow: {
        flexDirection: 'row',
        alignSelf: "stretch",
        justifyContent: 'space-evenly',
        position: "relative",
        height: height * .2,
        marginBottom: 2
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

            <View style={{flex: 1, flexDirection: 'column', alignItems: "stretch"}}>

                <View style={styles.PictureRow}>
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
                </View>

                <View style={styles.PictureRow}>
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

            </View>
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

            {/* <View>
                <Image source={require("./footer.png")}
                    style={styles.footer}
                />
            </View> */}
        </View>
    )
}
