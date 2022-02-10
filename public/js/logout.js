async function logout() {
    const response = await fetch('api/user/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);


async function sendMake() {
    selectedOptionId = document.getElementById('makeId');
    if (selectedOptionId.value === "Make") {
        alert("Please Select A Make");
    } else {
        var selectedMakeFrontEnd = selectedOptionId.value;

        document.location.replace(`/api/search/?make=${selectedMakeFrontEnd}`)
    }

}