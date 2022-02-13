async function logout() {
<<<<<<< HEAD
    const response = await fetch('/user/logout', {
=======
    const response = await fetch('api/user/logout', {
>>>>>>> feature/mix-routes-login
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

<<<<<<< HEAD
document.querySelector('#logout').addEventListener('click', logout);
=======
document.querySelector('#logout').addEventListener('click', logout);




async function retrieveData() {
    selectedOptionId = document.getElementById('modelId');
    if (selectedOptionId.value === "Model") {
        alert("Please Select A Model");
    } else {
        var selectedMakeFrontEnd = selectedOptionId.value;

        document.location.replace(`/api/search/?make=${selectedMakeFrontEnd}+?model={}`)
    }

}
>>>>>>> feature/mix-routes-login
