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

import dash from '../assets/icon-dashboard.png';
import dashSelected from '../assets/icon-dashboard-selected.png';

import { feelingsArray, icons } from './data'
const root = require('../assets/icon-check-in.png');
const rootSelected = require('../assets/icon-check-in-selected.png');


export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: null,
            rootIsSelected: true,
            dashIsSelected: false
        }
    }

    toggleSelected = (param) => {

        this.setState({
            rootIsSelected: !this.state.rootIsSelected,
            dashIsSelected: !this.state.dashIsSelected
        })

        if (param === "root") {
            this.setState({
                rootIsSelected: true,
                dashIsSelected: false
            })
            this.props.changeHandleNext('root')
        } else if (param === "dash") {
            this.setState({
                rootIsSelected: false,
                dashIsSelected: true
            })
            this.props.changeHandleNext('dash')
        }
    }

    render() {

        let { changeHandleNext, page } = this.props
 
        return (

            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                {
                    page === "dash"?
                        <TouchableOpacity onPress={() => this.toggleSelected("dash")}>
                            <Image source={dashSelected} />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={() => this.toggleSelected("dash")}>
                            <Image source={dash} />
                        </TouchableOpacity>
                }

                {
                    page === "root"?
                        <TouchableOpacity onPress={() => this.toggleSelected("root")}>
                            <Image source={rootSelected} />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={() => this.toggleSelected("root")}>
                            <Image source={root} />
                        </TouchableOpacity>
                }

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
