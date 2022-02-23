module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },



    getImg1: {
        fetch("/images/1.jpeg").then(response => {
            response.blob();
        }).then(blob => {
            return FirstImage = blob;
        })
    }

}