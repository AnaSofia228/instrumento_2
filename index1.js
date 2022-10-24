const URL = 'https://hp-api.onrender.com/api/characters';
const generateApi = document.getElementById ("btn-generate");
const main = document.getElementById('card');


window.addEventListener("DOMContentLoaded",Api);

function Api(){
    fetch (URL)

    .then (Response => Response.json())
    .then (data => data.forEach(element => {
        card(element);
    }))   
    }
    

function card(element) {

    const card = document.createElement('div');
    card.classList.add("cards");
    
    const imgC = document.createElement('img');
    imgC.classList.add("images");

    const nameC = document.createElement('h1');
    nameC.classList.add("name");

    const gender = document.createElement('h2');
    gender.classList.add("gender");

    const yearOfBirth = document.createElement('h2');
    yearOfBirth.classList.add('yearOfBirth');

    imgC.setAttribute('src',element["image"]);
    nameC.textContent = element["name"];
    gender.textContent = element["gender"];
    yearOfBirth.textContent = 2022 - (element["yearOfBirth"]);
    

    card.appendChild(nameC);
    card.appendChild(imgC);
    card.appendChild(gender);
    card.appendChild(yearOfBirth);

    main.appendChild(card);


}