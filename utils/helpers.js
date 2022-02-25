// import fetch from 'cross-fetch';


// function getImgPrius() {
//     fetch("https://i.ibb.co/kQLkdx8/prius.png").then(response => {
//         response.blob();
//     }).then(blob => {
//         return SecondImage = blob;
//     })
// }

// function getImgM5() {
//     fetch("https://i.ibb.co/1Kk9sNK/bmw-5.jpg").then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

// function getImgBeetle() {
//     fetch('https://i.ibb.co/4dY2Vf9/beetle.jpg').then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

// function getImgM3() {
//     fetch("https://i.ibb.co/qRrY7r3/bmw3.png").then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

// function getImgCivic() {
//     fetch("https://i.ibb.co/5sYnqvZ/cor.png").then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

// function getImgAccord() {
//     fetch('https://i.ibb.co/hfDGpgk/phv.png').then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

// function getImgCorolla() {
//     fetch("https://i.ibb.co/5sYnqvZ/cor.png").then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

// function getImgWindstar() {
//     fetch("https://i.ibb.co/sbVHcjX/Windstar.png").then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

// function getImgSupra() {
//     fetch("https://i.ibb.co/S7BZwhG/sup.png").then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

// function getImgF150() {
//     fetch("https://i.ibb.co/C6Wk63p/f150.webp").then(response => {
//         response.blob();
//     }).then(blob => {
//         return FirstImage = blob;
//     })
// }

module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    }

    ,
    // getImgWindstar,
    // getImgAccord,
    // getImgBeetle,
    // getImgCivic,
    // getImgCorolla,
    // getImgF150,
    // getImgM3,
    // getImgM5,
    // getImgPrius,
    // getImgSupra,


}