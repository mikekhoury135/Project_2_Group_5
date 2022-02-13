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