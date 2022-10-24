const URL = "https://hp-api.onrender.com/api/characters";
const btnGenerate = document.getElementById("btn-generate");
const imageCard = document.getElementById("img-card");

btnGenerate.addEventListener("click",getApi);

function getApi() {
    fetch (URL)
    .then (response => response.json())
    .then (data => { 
        nameUser.textContent = data[0].name,
        genderUser.textContent = "Gender " +  data[0].gender,
        userAge.textContent = "Edad " + (2022 - (data[0].yearOfBirth)),
        imageCard.src = data[0].image        
    })
}