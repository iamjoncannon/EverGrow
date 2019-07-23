
export const kidsArray = []

for (let i = 0; i < 1; i++) {
    kidsArray.push({
        name: "Kiddo " + i,
        key: i,
        pic: i % 2 === 0 ? require("./girl.png") : require("./boy.png")
    })
}

export const feelingsArray = []

let feelingsPics = [require('./feelings1.png'), require('./feelings2.png'), require('./feelings3.png'), require('./feelings4.png'), require('./feelings5.png'), require('./feelings6.png')]
export const feelings = ['Happy', 'Sad', 'Angry', 'Nervous', 'Calm', 'Excited']
feelingsPics.forEach((item, i) => (feelingsArray.push({ key: i, pic: feelingsPics[i], feeling: feelings[i] })))
