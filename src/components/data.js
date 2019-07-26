
export const kidsArray = []

for (let i = 0; i < 2; i++) {
    kidsArray.push({
            name: i % 2 === 0 ? "Agnus" : "Tyler",
        key: i,
        pic : i % 2 === 0 ? require("../assets/girl.png") : require("../assets/boy.png")

    })
}

// kidsArray.push({
//         name: "Corabelle",
//         key: 3,
//         pic: require("../assets/corabelle.png")
// })
// kidsArray.push({
//         name: "Sam",
//         key: 4,
//         pic: require("../assets/sam.png")
// })
// kidsArray.push({
//         name: "Chris",
//         key: 5,
//         pic: require("../assets/chrisKid.png")
// })
// kidsArray.push({
//         name: "Miriam",
//         key: 6,
//         pic: require("../assets/miriam.png")
// })
// kidsArray.push({
//         name: "Monica",
//         key: 7,
//         pic: require("../assets/monica.png")
// })


kidsArray.push({
        name: "Dianne",
        key: 3,
        pic: require("../assets/dianne.png")
})
kidsArray.push({
        name: "Grant",
        key: 4,
        pic: require("../assets/grant.png")
})
kidsArray.push({
        name: "Conor",
        key: 5,
        pic: require("../assets/conor.png")
})
kidsArray.push({
        name: "Chris",
        key: 6,
        pic: require("../assets/chris.png")
})
kidsArray.push({
        name: "Wolfgang",
        key: 7,
        pic: require("../assets/wolfgang.png")
})
kidsArray.push({
        name: "Cheryl",
        key: 8,
        pic: require("../assets/cheryl.png")
})
kidsArray.push({
        name: "Justine",
        key: 9,
        pic: require("../assets/justine.png")
})
kidsArray.push({
        name: "Katie",
        key: 10,
        pic: require("../assets/katie.png")
})

export const feelingsArray = []

export const feelingsPics = [require('../assets/feelings1.png'), require('../assets/feelings2.png'), require('../assets/feelings3.png'), require('../assets/feelings4.png'), require('../assets/feelings5.png'), require('../assets/feelings6.png')]

export const feelings = ['Happy', 'Sad', 'Angry', 'Nervous', 'Calm', 'Excited']

feelingsPics.forEach((item, i) => (feelingsArray.push({ key: i, pic: feelingsPics[i], feeling: feelings[i] })))
