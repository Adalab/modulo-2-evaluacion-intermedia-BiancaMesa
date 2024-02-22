'use strict';

//Declarar variables 
//const window = document.querySelector('.js-window');
const numberCollected = document.querySelector('.js-number-collected');
const numberCollectedValue = parseInt(numberCollected.value); 
const submit = document.querySelector('.js-submit');
const messageClue = document.querySelector('.js-message-clue');
const numberAttempts = document.querySelector('.js-number-attempts');

//0
// Función generar N aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//1
//Variable para recoger el resultado del N aleatorio
const randomNumber = getRandomNumber(100);
console.log("Número aleatorio: ", randomNumber); 


// Función para que se genere el N aleatorio sólo al cargar la página
// function getRandomNumberWhenPageLoads () {
//     getRandomNumber(100);
//     console.log(getRandomNumber(100));
//     console.log("Número aleatorio: ", getRandomNumber); 
// }

//window.onload = getRandomNumberWhenPageLoads; 
//window.addEventListener('onload', getRandomNumberWhenPageLoads); 

messageClue.value = "El número debe estar entre 1 y 100";

//3
//Función manejadora del evento submit
function handleClick () { 
    if (numberCollectedValue < 0 || numberCollectedValue > 100) {
        messageClue.value = "El número debe estar entre 1 y 100"; 
        console.log("El número debe estar entre 1 y 100");

    } else if (numberCollectedValue > randomNumber){
        messageClue.value = "Demasiado Alto";
        console.log("Demasiado Alto");

    } else if (numberCollectedValue < randomNumber) {
        messageClue.value = "Demasiado Bajo";
        console.log("Demasiado bajo"); 

    } else if (numberCollectedValue === randomNumber) {
        messageClue.value = "Has ganado campeona!!!";
        console.log("Has ganado campeona!!!")
    }
}

handleClick();



//2
//Evento al hacer click en submit 
submit.addEventListener('click', handleClick); 


   