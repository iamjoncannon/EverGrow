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
    Modal,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({

    viewPortContainer: {
        display: "flex",
        flex: 1, 
        flexDirection: "column",
        justifyContent: "center",
    },

    FooterImage: {
        margin: 1,
        alignSelf: "center"
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
            marginBottom: 2
        },     
})

const StudentImage = (props) =>{

    
    const {imageSource, dims } = props
    console.log()

    return (

        <Image source={imageSource}
               style={{height: dims, width: dims}} 
        />
    )
}


let kidsArray = []

for(let i = 0; i < 10; i++){
    kidsArray.push({
        key: i,
        pic: i % 2 === 0 ? require("./girl.png") : require("./boy.png")
    })
}

export default class Converted extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            locked: false, // true/false,  locks screens
            modal: "password", // "password", "kid checkin"
            areKidsCheckedin: false,
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

    toggleLock = () => {

        this.setState({
            locked: !this.state.locked
        })
    }

    render(){

        return (
            <View style={styles.viewPortContainer}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={false}
                style={{ opacity: 10}}
            >
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
                            backgroundColor: 'white',}}
                    >
                    </View>
                </View> 
            </Modal>

            <ScrollView>
                <TouchableOpacity onPress={this.toggleLock}> 
                    <Image source={ this.state.locked ? require("./lockedheader.png") : require("./sun.png")} 
                        resize="cover" 
                        style={{ height: this.state.ViewportHeight * .2, 
                                    width: this.state.ViewportWidth} }
                        
                            
                    />
                </TouchableOpacity>
               
                <Text style={styles.Date}>Wednesday, July 31, 2019</Text>
                <Text style={styles.Title}>Welcome Class!</Text>
                <Text style={styles.Feelings}>How are you feeling today?</Text>
                <View style={styles.pictureRowContainer}>

                    <View style={styles.PictureRow}>

                        <FlatList
                            numColumns={5}
                            contentContainerStyle={{
                                    alignSelf: 'center'
                                }}
                            data={kidsArray}
                            renderItem={({item})=>(
                                <StudentImage 
                                    imageSource={item.pic}
                                    dims={this.state.ViewportWidth * .16}
                                />
                            )}
                        />
                    </View>
                </View>

                    {this.state.areKidsCheckedin ? 
                        <View style={{ backgroundColor: 'rgba(131,242,196, 1.0)', justifyContent: 'center', height: this.state.ViewportHeight * .1, width: this.state.ViewportWidth * .95, alignItems: 'center', alignSelf: 'center', flex: 1, margin: 50, flexDirection: 'column' }}><Text style={{ fontSize: 50, top: this.state.ViewportHeight * .02, textAlign: 'center', textAlignVertical: 'center', alignSelf: 'center', flex: 1}}>Done!</Text></View>
                    : <View></View>}
            
            </ScrollView>
            {!this.state.locked ? 
            
            <View >
                <Image source={require("./footer.png")} 
                       style={{ ...styles.FooterImage, 
                                height: this.state.ViewportHeight * .1, 
                                width: this.state.ViewportWidth }}
                        resize="contain"
                />
            </View>: <View></View>}
        </View>
        )
    }
}
