import React, { Component } from 'react';
import KidCheckIn from './KidCheckIn'
import styles from './styles'

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
    TouchableOpacity,
    TextInput,
    Keyboard
} from 'react-native';

console.log('stuf')

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


const GreenButton = (props) => {

    let { height, width } = props.globalDims
    let { heightFactor, widthFactor, callback } = props

    return (

        <TouchableOpacity onPress={callback}>
            <View style={{
                ...styles.greenButton,
                height: 68,
                width: 777
            }}
            >
                <Text style={{
                    fontSize: 22,
                    fontFamily: "Avenir-Heavy",
                    color: 'rgb(1, 0, 115)',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    alignSelf: 'center',
                }}>DONE!</Text>
            </View>
        </TouchableOpacity>
    )
}

let kidsArray = []

for (let i = 0; i < 15; i++) {
    kidsArray.push({
        name: "Kiddo " + i,
        key: i,
        pic: i % 2 === 0 ? require("./girl.png") : require("./boy.png")
    })
}

export const feelingsArray = []

let feelingsPics = [require('./feelings1.png'), require('./feelings2.png'), require('./feelings3.png'), require('./feelings4.png'), require('./feelings5.png'), require('./feelings6.png')]
let feelings = ['Happy', 'Sad', 'Angry', 'Nervous', 'Calm', 'Excited']
feelingsPics.forEach((item, i) => (feelingsArray.push({ key: i, pic: feelingsPics[i], feeling: feelings[i] })))

export default class Converted extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            locked: false, // true/false,  locks screens
            modalState: {
                type: "password", // "password", "kid checkin"
                id: null,
                visible: false
            },
            areKidsCheckedin: false,
            ViewportWidth: Dimensions.get("window").width,
            ViewportHeight: Dimensions.get("window").height,
            kidData: {}
        }
    }

    componentDidMount() {

        Dimensions.addEventListener("change", (change) => this.resizeLayout(change))

        // manage the keyboard
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );


        // this is where you would load the data object for the kids
        // with an AJAX call
        const initialKidData = {}

        kidsArray.forEach(kid => {
            let thisKid = kid
            thisKid["checkedIn"] = false

            initialKidData[kid.key] = thisKid
        })

        this.setState({ kidData: initialKidData })
    }

    componentDidUnMount() {

        Dimensions.removeEventListener("change")
    }

    _keyboardDidShow() {

    }

    _keyboardDidHide() {

    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
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

    handleCheckInSubmit = (kidKey, itemKey) => {

        let newKidData = { ...this.state.kidData }

        newKidData[kidKey].checkedIn = true
        newKidData[kidKey].mood = feelings[itemKey]

        let isEveryOneCheckedInYet = true

        // check if they're all checked in
        for (let kid in newKidData) {
            if (!newKidData[kid].checkedIn) {
                isEveryOneCheckedInYet = false
            }
        }

        this.setState({
            areKidsCheckedin: isEveryOneCheckedInYet,
            kidData: newKidData,
            modalState: {
                ...this.state.modalState,
                visible: false
            }
        })
    }

    handleModalInit = (id) => {

        if (this.state.locked) {

            this.setState({
                selectedKid: id,
                modalState: {
                    type: "kidCheckin",
                    visible: true
                }
            })
        }
    }

    handlecheckInDone = () => {

        console.log('hitting handlecheckindone')
        this.setState({
            modalState: { ...this.state.modalState, type: 'password', visible: true }
        })
    }

    goToTop = () => {
        this.scroll.scrollTo({x: 0, y: 0, animated: true});
    }

    render() {

        console.log("here's state: ", this.state)

        return (
            <View style={styles.viewPortContainer}>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalState.visible}
                    style={{ opacity: 10 }}
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
                                height: this.state.ViewportHeight * .7,
                                width: this.state.ViewportWidth * .6,
                                backgroundColor: 'white',
                            }}
                        >
                            {this.state.modalState.type === "kidCheckin" ? <KidCheckIn
                                data={this.state.kidData[this.state.selectedKid]}
                                dims={this.state.ViewportWidth * .1}
                                handleCheckInSubmit={this.handleCheckInSubmit}
                                ViewportHeight={this.state.ViewportHeight}
                                ViewportWidth={this.state.ViewportWidth}
                            /> :
                                this.state.modalState.type === "password" ?
                                    <View>
                                        <TextInput
                                            onSubmitEditing={Keyboard.dismiss}
                                            autoFocus={true}
                                            editable={true}
                                            keyboardType='default'
                                            keyboardAppearance={"dark"}
                                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                        />
                                    </View>

                                    : <View></View>
                            }
                        </View>
                    </View>
                </Modal>

                <ScrollView ref={(c) => {this.scroll = c}}>
                    {/* header */}
                    <TouchableOpacity onPress={this.toggleLock}>
                        <Image source={this.state.locked ? require("./lockedheader.png") : require("./sun.png")}
                            resize="cover"
                            style={{
                                height: 231,
                                width: 1112
                            }}
                        />
                    </TouchableOpacity>

                    <Text style={styles.Date}>Wednesday, July 31, 2019</Text>
                    <Text style={styles.Title}>Welcome Class!</Text>
                    <Text style={styles.Feelings}>How are you feeling today?</Text>
                    <View style={styles.pictureRowContainer}>

                        {/* pictures */}
                        <View style={styles.PictureRow}>

                            <FlatList
                                numColumns={5}
                                contentContainerStyle={{
                                    alignSelf: 'center',
                                }}
                                data={kidsArray}
                                renderItem={({ item }) => (
                                    <StudentImage
                                        name={item.name}
                                        id={item.key}
                                        imageSource={item.pic}
                                        dims={this.state.ViewportWidth * .14}
                                        handleModalInit={this.handleModalInit}
                                        checkedIn={this.state.kidData[item.key] ? this.state.kidData[item.key].checkedIn : ' '}
                                    />
                                )}
                            />
                        </View>
                    </View>
                
                    {/* back to top button */}
                    <View>
                        <TouchableOpacity title='Go To Top' onPress={this.goToTop} >
                            <Image source={require("./backToTop.png")}
                                style={{
                                    alignSelf: "center",
                                    height: 50,
                                    width: 50
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 22,
                            alignSelf: 'center',
                            fontFamily: "Avenir-Medium",
                            color: 'rgb(1, 0, 115)'
                        }}>Back to Top</Text>
                    </View>

                    {this.state.areKidsCheckedin ?
                        <GreenButton
                            globalDims={{ height: this.state.ViewportHeight, width: this.state.ViewportWidth }}
                            heightFactor={.1}
                            widthFactor={1}
                            callback={this.handlecheckInDone}
                        />
                        : <View></View>}

                </ScrollView>

                {/* footer */}

                {!this.state.locked ?
                    <View>

                        <Image source={require("./footer.png")}
                            style={{
                                ...styles.FooterImage,
                                height: this.state.ViewportHeight * .1,
                                width: this.state.ViewportWidth
                            }}
                            resize="contain"

                        />
                    </View> : <View></View>}


            </View>
        )
    }
}
