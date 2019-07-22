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

console.log('stuf')

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
            margin: 2
        },  
        greenButton : { 
            backgroundColor: 'rgba(131,242,196, 1.0)', 
            justifyContent: 'center', 
            alignItems: 'center', 
            alignSelf: 'center', 
            flex: 1, 
            margin: 50, 
            flexDirection: 'column'
        }
})

const StudentImage = (props) =>{
    
    const { id, imageSource, dims, handleModalInit, name, checkedIn  } = props

    const opacity = checkedIn ? 0.2 : 1;
    return (

        <TouchableOpacity onPress={()=> ! checkedIn ? handleModalInit(id) : " "} > 

            <View style={{flex: 1, margin: 20}}>
                <Image 
                    source={imageSource}
                    style={{height: dims, width: dims, margin: 20, opacity: opacity}} 
                />
                <Text style={{fontSize: 45, alignSelf: 'center'}}>{name}</Text>
            </View>

        </TouchableOpacity>
    )
}
class KidCheckIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    handleSelectFeeling = (id) => {
        this.setState({
            selected: id
        })
    }

    render(){

        let { dims, handleCheckInSubmit} = this.props 
        let { pic } = this.props.data
        let kidKey = this.props.data.key

        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                    source={pic}
                    style={{ height: dims, width: dims }}
                />
                <Text style={styles.Feelings}>How are you feeling today?</Text>
                <Text style={styles.Feelings}>Select the emoji that best express your mood.</Text>
                <FlatList
                    numColumns={4}
                    contentContainerStyle={{
                        alignSelf: 'center',
                        flex: 1
                    }}
                    data={feelingsArray}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity onPress={()=>{this.setState({selected: item.key})}}> 

                                <Image 
                                    source={item.pic}
                                    style={{margin: 20, opacity : this.state.selected !== null & item.key !== this.state.selected ? .2 : 1 }}
                                />
                                <Text style={{alignSelf: 'center', fontSize: 20 }}>{item.feeling}</Text>
                            
                            </TouchableOpacity>
                        </View>
                    )}
                />

                {
                    this.state.selected !== null ? 

                        <TouchableOpacity onPress={() => handleCheckInSubmit(kidKey, this.state.selected)}>

                            <View style={{ backgroundColor: 'rgba(131,242,196, 1.0)', zIndex: 2, width: this.props.ViewportWidth * .6, height: 80 }}>
                                <Text style={{...styles.Feelings, marginTop: 15}}>Done</Text>           
                            </View>
                        </TouchableOpacity>

                    :<View></View>
                }
            </View>
        )
    }
}

const GreenButton = (props) => {

    let { height, width } = props.globalDims
    let { heightFactor, widthFactor } = props

    return (

        <TouchableOpacity onPress={this.callback}>
            <View 
                style={{ ...styles.greenButton, height: height * heightFactor, width: width * widthFactor}}
            >
                <Text style={{ fontSize: 50, top: props.globalDims.height * .02, textAlign: 'center', textAlignVertical: 'center', alignSelf: 'center', flex: 1 }}>Done!</Text>
            </View>
        </TouchableOpacity>
    )
}

let kidsArray = []

for(let i = 0; i < 15; i++){
    kidsArray.push({
        name: "Kiddo " + i, 
        key: i,
        pic: i % 2 === 0 ? require("./girl.png") : require("./boy.png")
    })
}

let feelingsArray = []

let feelingsPics = [require('./feelings1.png'), require('./feelings2.png'),require('./feelings3.png'), require('./feelings4.png'),require('./feelings5.png'),require('./feelings6.png')]
let feelings = ['Happy', 'Sad', 'Angry', 'Nervous', 'Calm', 'Excited']
feelingsPics.forEach( (item, i) => (feelingsArray.push({ key: i, pic: feelingsPics[i], feeling: feelings[i] })) )

export default class Converted extends React.Component {

    constructor(props){
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
            kidData : {}
        }
    }

    componentDidMount(){

        Dimensions.addEventListener("change", (change) => this.resizeLayout(change))
        
        // this is where you would load the data object for the kids
        // with an AJAX call
        const initialKidData = {}

        kidsArray.forEach(kid => {
            let thisKid = kid
            thisKid["checkedIn"] = false 
            
            initialKidData[kid.key] = thisKid
        })

        this.setState({kidData : initialKidData})
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

    handleCheckInSubmit = (kidKey, itemKey) => {

        let newKidData = {...this.state.kidData}

        newKidData[kidKey].checkedIn = true 
        newKidData[kidKey].mood = feelings[itemKey] 

        let isEveryOneCheckedInYet = true

        // check if they're all checked in
        for (let kid in newKidData){
            if (!newKidData[kid].checkedIn){
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

        if(this.state.locked){

            this.setState({
                selectedKid : id,
                modalState:{
                    type: "kidCheckin",
                    visible: true
                }
            })
        }
    }

    handleCheckInDone = () => {

        this.setState({

        })
    }

    render(){

        console.log("here's state: ", this.state)
        
        return (
            <View style={styles.viewPortContainer}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalState.visible}
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
                            height: this.state.ViewportHeight * .7,
                            width: this.state.ViewportWidth * .6,
                            backgroundColor: 'white',}}
                    >
                    {this.state.modalState.type == "kidCheckin" ? <KidCheckIn 
                                                                        data={this.state.kidData[this.state.selectedKid]}
                                                                        dims={this.state.ViewportWidth * .1}
                                                                        handleCheckInSubmit={this.handleCheckInSubmit}
                                                                        ViewportHeight={this.state.ViewportHeight}
                                                                        ViewportWidth={this.state.ViewportWidth}
                                                                  /> : <View></View>}
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
                                    alignSelf: 'center',
                                }}
                            data={kidsArray}
                            renderItem={({item})=>(
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

                    {this.state.areKidsCheckedin ? 
                        <GreenButton 
                            globalDims={{height: this.state.ViewportHeight, width: this.state.ViewportWidth}} 
                            heightFactor={.1}
                            widthFactor={.95}
                        />
                    : <View></View>}
            
            </ScrollView>

            {!this.state.locked ? 
            
            <View >
                <Image source={require("./footer.png")} 
                       style={{ ...styles.FooterImage, 
                                height: this.state.ViewportHeight * .1, 
                                width: this.state.ViewportWidth }}
                        resize="contain"
                        callback={this.checkInDoneHandler}
                />
            </View>: <View></View>}

        </View>
        )
    }
}
