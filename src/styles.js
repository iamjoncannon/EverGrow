import React, { Component } from 'react';

import { StyleSheet } from 'react-native'

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
        fontFamily: "Avenir-Medium",
        color: 'rgb(1, 0, 115)'
    },
    Title: {
        alignSelf: "center",
        fontSize: 80,
        fontFamily: "Avenir-Black",
        color: 'rgb(1, 0, 115)'
    },
    Feelings: {
        alignSelf: "center",
        fontSize: 36,
        fontFamily: "Avenir-Medium",
        marginBottom: 5,
        color: 'rgb(15, 15, 133)'
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
        marginLeft: 140,
        marginRight: 140
    },
    greenButton: {
        backgroundColor: 'rgba(131,242,196, 1.0)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
        margin: 50,
        flexDirection: 'column'
    }
})

export default styles