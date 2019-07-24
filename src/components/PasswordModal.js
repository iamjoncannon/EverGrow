import React, { Component } from 'react';
import styles from './styles'
import {
    View,
    Image,
    Text,
    TextInput,
    Keyboard,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { feelingsArray } from './data'

export default class PasswordModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    render() {

        let { closeModal, type } = this.props

        return (

            <View style={{ flex: 1, width: 675, height: 286, alignSelf: "center" }}>
         
                <TouchableOpacity onPress={() => closeModal(this.state.selected)}>
                    <View style={{ zIndex: 2, width: 20, height: 20, position: 'absolute', right: 35, top: 35, }}>
                        <Image
                            source={require("../assets/close.png")}
                            style={{
                                height: 20,
                                width: 20,
                                position: 'absolute',
                            }}
                        />
                    </View>
                </TouchableOpacity>
           
                <Text style={{
                    fontSize: 26,
                    fontFamily: "Avenir-Medium",
                    color: 'rgb(1, 0, 115)',
                    alignSelf: "center"
                }}>{"\n"}Enter your password!{"\n"}</Text>
                
                <TextInput
                    secureTextEntry={true}
                    onSubmitEditing={Keyboard.dismiss}
                    autoFocus={true}
                    editable={true}
                    keyboardType='default'
                    keyboardAppearance={"light"}
                    style={{ height: 46, width: 560, borderColor: 'gray', borderWidth: 1, alignSelf: "center" }}
                />

                <TouchableOpacity onPress={() => closeModal(type)}>
                    <View style={
                        {
                            backgroundColor: 'rgb(131,242,196)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            margin: 50,
                            flexDirection: 'column',
                            height: 68,
                            width: 620
                        }
                    }>
                        {
                            type === "password" ?

                                <Text style={
                                    {
                                        fontSize: 22,
                                        fontFamily: "Avenir-Heavy",
                                        color: 'rgb(1, 0, 115)',
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        alignSelf: 'center'
                                    }
                                }>GENERATE RESULTS</Text>
                                : <Text style={
                                    {
                                        fontSize: 22,
                                        fontFamily: "Avenir-Heavy",
                                        color: 'rgb(1, 0, 115)',
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        alignSelf: 'center'
                                    }
                                }>UNLOCK SCREEN</Text>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}