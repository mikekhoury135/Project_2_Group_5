module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },



    getImgAccord: {
        fetch("/images/accord.png").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }
    getImgM5: {
        fetch("/images/bmw 5.jpeg").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }
    getImgM3: {
        fetch("/images/bmw3.jpeg").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }
    getImgCivic: {
        fetch("/images/civic.png").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }
    getImgCorolla: {
        fetch("/images/cor.png").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }
    getImgF150: {
        fetch("/images/f150.png").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }
    getImgSupra: {
        fetch("/images/sup.png").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }
    getImgWindstar: {
        fetch("/images/Windstar.png").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }

}