async function sendMake(event) {
    // event.preventDefault();
    selectedOptionId = document.getElementById('makeId');
    if (selectedOptionId.value === "Make") {
        alert("Please Select A Make");
    } else {
        var selectedMakeFrontEnd = selectedOptionId.value;

        document.location.replace(`/api/search/${selectedMakeFrontEnd}`);

        // fetch("/api/search/" + selectedMakeFrontEnd, {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(response => {
        //     console.log(response);
        //     response.json()
        // }).then(data => {
        //     console.log(data);
        // })
    }

}

async function getAllCars(event) {

    selectedOptionId = document.getElementById('modelId');

    if (selectedOptionId.value === "Model") {
        alert("Please Select A Model");
    } else {
        var selectedModelFrontEnd = selectedOptionId.value;

        document.location.replace(`/api/search/model/${selectedModelFrontEnd}`);

        // fetch("/api/search/" + selectedMakeFrontEnd, {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(response => {
        //     console.log(response);
        //     response.json()
        // }).then(data => {
        //     console.log(data);
        // })
    }






}