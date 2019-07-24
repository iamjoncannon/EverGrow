import React, {Component} from 'react';
import KidCheckIn from './components/KidCheckIn'
import PasswordModal from './components/PasswordModal'
import StudentImage from './components/StudentImage'
import GreenButton from './components/GreenButton'
import styles from './components/styles'
import {kidsArray, feelingsArray, feelings} from './components/data'

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

console.log('stuf')

export default class Root extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            locked: false, // true/false,  locks screens
            modalState: {
                type: null, // "password", "kid checkin"
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
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow,);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide,);

        // this is where you would load the data object for the kids
        // with an AJAX call
        const initialKidData = {}

        kidsArray.forEach(kid => {
            let thisKid = kid
            thisKid["checkedIn"] = false

            initialKidData[kid.key] = thisKid
        })

        this.setState({kidData: initialKidData})
    }

    componentDidUnMount() {

        Dimensions.removeEventListener("change")
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    resizeLayout = (change) => {

        this.setState({ViewportWidth: change.window.width, ViewportHeight: change.window.height})
    }

    toggleLock = () => {

        this.setState({
            locked: !this.state.locked
        })
        if (this.state.locked === false) {
            this.setState({
                modalState: {
                    ...this.state.modalState,
                    visible: true
                }
            })
        }
    }

    getLockedState = () => {

        return this.state.locked
    }

    handleCheckInSubmit = (kidKey, itemKey) => {

        let newKidData = {
            ...this.state.kidData
        }

        newKidData[kidKey].checkedIn = true
        newKidData[kidKey].mood = feelings[itemKey]

        let isEveryOneCheckedInYet = true

        // check if they're all checked in
        for (let kid in newKidData) {
            if (! newKidData[kid].checkedIn) {
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

    closeModal = (param) => {

        this.setState({
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

        this.setState({
            modalState: {
                ...this.state.modalState,
                type: 'password',
                visible: true
            }
        })
    }

    goToTop = () => {
        this.scroll.scrollTo({x: 0, y: 0, animated: true});
    }

    render() {

        console.log("here's state: ", this.state)

        return (

            <View style={styles.viewPortContainer}>
                <View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalState.visible}
                        style={{ opacity: 10 }}
                    >
                        <View style={{
                            flex: 1,
                            width: this.state.ViewportWidth,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                        >
                            {this.state.modalState.type === "kidCheckin" ?
                                <View style={{
                                    height: this.state.ViewportHeight * .7,
                                    width: this.state.ViewportWidth * .6,
                                    backgroundColor: 'white',
                                }}>
                                    <KidCheckIn
                                        data={this.state.kidData[this.state.selectedKid]}
                                        dims={this.state.ViewportWidth * .1}
                                        handleCheckInSubmit={this.handleCheckInSubmit}
                                        ViewportHeight={this.state.ViewportHeight}
                                        ViewportWidth={this.state.ViewportWidth}
                                        closeModal={this.closeModal}
                                        getLockedState={this.getLockedState}
                                    />
                                </View> :

                                (this.state.modalState.type === "password" || this.state.locked === true) ?

                                    <View style={{
                                        height: 286,
                                        width: 675,
                                        backgroundColor: 'white',
                                        marginTop: 10,
                                        marginBottom: 321
                                    }}>
                                        <PasswordModal
                                            closeModal={this.closeModal}
                                            type={this.state.modalState.type}
                                        />
                                    </View> :
                                    <View></View>

                            }
                        </View>
                    </Modal>
                </View>

                <ScrollView ref={(c) => { this.scroll = c }}>
                    {/* header */}
                    <View>
                        <View style={{ position: 'absolute', right: 117, top: 60, zIndex: 10 }}>
                            {
                                this.state.locked == true ?
                                    <TouchableOpacity onPress={this.toggleLock}>
                                        <Image source={require("./assets/Lock.png")} />
                                    </TouchableOpacity>
                                    : this.state.locked == false ?
                                        <TouchableOpacity onPress={this.toggleLock}>
                                            <Image source={require("./assets/unlock.png")} />
                                        </TouchableOpacity>
                                        : <View></View>
                            }
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Image
                                source={require("./assets/sun.png")}
                                style={{
                                    height: 231,
                                    width: 1112,
                                    // zIndex: 1
                                    // position: 'absolute',
                                }}
                            />
                        </View>
                    </View>

                    <Text style={styles.Date}>Tuesday, July 30, 2019</Text>
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
                            <Image source={require("./assets/backToTop.png")}
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

                    {this.state.locked == true ?
                        <GreenButton
                            globalDims={{ height: this.state.ViewportHeight, width: this.state.ViewportWidth }}
                            heightFactor={.1}
                            widthFactor={1}
                            callback={this.handlecheckInDone}
                        />
                        : <View></View>}

                </ScrollView>

                {/* footer */}
                {
                    !this.state.locked ?
                        <View>

                            <Image source={require("./assets/footer.png")}
                                style={{
                                    ...styles.FooterImage,
                                    height: this.state.ViewportHeight * .1,
                                    width: this.state.ViewportWidth
                                }}
                                resize="contain"

                            />
                        </View> : <View></View>
                }
            </View>
        )
    }
}


/*

this.state.modalState.type === "password" ? <View>
            <TextInput onSubmitEditing={
                Keyboard.dismiss
            }
                autoFocus={true}
                editable={true}
                keyboardType='default'
                keyboardAppearance={"dark"}
                style={
                    {
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                    }
                } />
        </View>

*/

