
export const kidsArray = []

for (let i = 0; i < 4; i++) {
    kidsArray.push({
        name: "Kiddo " + i,
        key: i,
pic : i % 2 === 0 ? require("../assets/girl.png") : require("../assets/boy.png")

    })
}

export const feelingsArray = []

let feelingsPics = [require('../assets/feelings1.png'), require('../assets/feelings2.png'), require('../assets/feelings3.png'), require('../assets/feelings4.png'), require('../assets/feelings5.png'), require('../assets/feelings6.png')]

export const feelings = ['Happy', 'Sad', 'Angry', 'Nervous', 'Calm', 'Excited']

feelingsPics.forEach((item, i) => (feelingsArray.push({ key: i, pic: feelingsPics[i], feeling: feelings[i] })))
