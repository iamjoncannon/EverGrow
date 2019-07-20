import React, { Component, Fragment } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
    Dimensions,
    FlatList,
    Modal
} from 'react-native';
import { throwStatement } from '@babel/types';

const styles = StyleSheet.create({

    /* main items */

    // total container
    viewPortContainer: {
        display: "flex",
        flex: 1, 
        flexDirection: "column",
        justifyContent: "center",
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
        pictureRowContainer: { 
            flex: 1, 
            flexDirection: 'column', 
            alignItems: "stretch" 
        }, 
        PictureRow: {
            flexDirection: 'row',
            alignSelf: "stretch",
            justifyContent: 'space-evenly',
            position: "relative",
            // height: props.height * .2,
            marginBottom: 2
        },     
    FooterImage: {
        margin: 1,
        alignSelf: "center"
    },

    // specific elements:
})

const StudentImage = (props) =>{

    const {imageSource, dims } = props

    return (

        <Image source={imageSource}
               style={{height: dims, width: dims}} 
        />
    )
}

export default class Converted extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ViewportWidth: Dimensions.get("window").width,
            ViewportHeight: Dimensions.get("window").height
        }
    }

    componentDidMount(){
        
        Dimensions.addEventListener("change", (change) => this.resizeLayout(change))
    }

    componentDidUnMount(){
        Dimensions.removeEventListener("change")
    }

    resizeLayout = (change) => {

        this.setState({
            ViewportWidth: change.window.width,
            ViewportHeight: change.window.height
        })
    }

    render(){

        return (
            <View style={styles.viewPortContainer}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={true}
                style={{ opacity: 10}}
            >
                {/* container for modal box */}
                <View 
                    style={{ 
                            flex: 1, 
                            width: this.state.ViewportWidth,
                            alignItems: 'center', 
                            justifyContent: 'center',
                            alignSelf: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    
                     }}
        >
                    <View 
                            style={{
                                height: this.state.ViewportHeight * .6,
                                width: this.state.ViewportWidth * .5,
                                backgroundColor: 'white',}}>
                    </View>
                </View> 
            </Modal>

            <ScrollView>
               
                <Image source={require("./sun.png")} 
                       resize="cover" 
                       style={{ height: this.state.ViewportHeight * .2, 
                                width: this.state.ViewportWidth} } 
                />
               
                <Text style={styles.Date}>Wednesday, July 31, 2019</Text>
                <Text style={styles.Title}>Welcome Class!</Text>
                <Text style={styles.Feelings}>How are you feeling today?</Text>
                <View style={styles.pictureRowContainer}>

                    <View style={styles.PictureRow}>


                        <StudentImage imageSource={require("./girl.png")}
                            dims={this.state.ViewportWidth * .16}
                        />
                        <StudentImage imageSource={require("./girl.png")}
                            dims={this.state.ViewportWidth * .16}
                        />
                        <StudentImage imageSource={require("./girl.png")}
                            dims={this.state.ViewportWidth * .16}
                        />
                        <StudentImage imageSource={require("./girl.png")}
                            dims={this.state.ViewportWidth * .16}
                        />
                        <StudentImage imageSource={require("./girl.png")}
                            dims={this.state.ViewportWidth * .16}
                        />
                    
                    </View>

                    <View style={styles.PictureRow}>

                        <StudentImage imageSource={require("./boy.png")}
                                      dims={this.state.ViewportWidth * .16}
                        />
                        <StudentImage imageSource={require("./boy.png")}
                            dims={this.state.ViewportWidth * .16}
                        />
                        <StudentImage imageSource={require("./boy.png")}
                            dims={this.state.ViewportWidth * .16}
                        />
                        <StudentImage imageSource={require("./boy.png")}
                            dims={this.state.ViewportWidth * .16}
                        />
                        <StudentImage imageSource={require("./boy.png")}
                            dims={this.state.ViewportWidth * .16}
                        />

                    </View>
                        <View style={styles.PictureRow}>

                            <StudentImage imageSource={require("./boy.png")}
                                dims={this.state.ViewportWidth * .16}
                            />
                            <StudentImage imageSource={require("./boy.png")}
                                dims={this.state.ViewportWidth * .16}
                            />
                            <StudentImage imageSource={require("./boy.png")}
                                dims={this.state.ViewportWidth * .16}
                            />
                            <StudentImage imageSource={require("./boy.png")}
                                dims={this.state.ViewportWidth * .16}
                            />
                            <StudentImage imageSource={require("./boy.png")}
                                dims={this.state.ViewportWidth * .16}
                            />
                    </View>
                </View>
            </ScrollView>
            <View >
                <Image source={require("./footer.png")} 
                       style={{ ...styles.FooterImage, 
                                height: this.state.ViewportHeight * .1, 
                                width: this.state.ViewportWidth }}
                        resize="contain"
                />
            </View>

        </View>

        )
    }
}

/*

Reference:
https://stackoverflow.com/questions/29447715/react-native-fixed-footer

*/