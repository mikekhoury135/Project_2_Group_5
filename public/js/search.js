async function sendMake(event) {
    event.preventDefault();
    selectedOptionId = document.getElementById('makeId');
    if (selectedOptionId.value === "Make") {
        alert("Please Select A Make");
    } else {
        var selectedMakeFrontEnd = selectedOptionId.value;
        // window.history.pushState('', 'New Page Title', `/api/search//${selectedMakeFrontEnd}`);
        document.location.replace(`/welcome/api/search/${selectedMakeFrontEnd}`);

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
    event.preventDefault();
    selectedOptionId = document.getElementById('makeId');
    var selectedMakeFrontEnd = selectedOptionId.value;

    selectedModelOptionId = document.getElementById('modelId');

    if (selectedModelOptionId.value === "Model") {
        alert("Please Select A Model");
    } else {
        var selectedModelFrontEnd = selectedModelOptionId.value;
        document.location.replace(`/welcome/api/search/model/${selectedMakeFrontEnd}/${selectedModelFrontEnd}`);

        // fetch("/api/search/" + selectedMakeFrontEnd, {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(response => {
        //     console.log(response);
        //     response.json()
        // }).then(data
    }
}