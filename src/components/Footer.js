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

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    render() {

        let { changeHandleNext, page } = this.props
        // let kidKey = this.props.data.key

        return (

            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => changeHandleNext("dash")}>
                    {
                        page === "dash" ?
                            <Image source={require("../assets/icon-dashboard-selected.png")} />
                            : <Image source={require("../assets/icon-dashboard.png")} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeHandleNext('root')}>
                    {
                        page === "root" ?
                            <Image source={require("../assets/icon-check-in-selected.png")} />
                            : <Image source={require("../assets/icon-dashboard.png")}  />
                    }
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require("../assets/icon-tree.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require("../assets/icon-activities.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require("../assets/icon-profile.png")}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}