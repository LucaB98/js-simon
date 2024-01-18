console.log('JS OK');
// FUNZIONI

const getDifferentRandomNumbers = (min, max, totalNumbers) => {
    const extractedNumbers = [];
    while(extractedNumbers.length < totalNumbers){
        const randomNumber = Math.floor(Math.random()* (max - min + 1)) - min;
        if(!extractedNumbers.includes(randomNumber)) extractedNumbers.push(randomNumber)
    }
    return extractedNumbers;
};



// Prendo gli elementi che mi servono
const countdownElement = document.getElementById('countdown');
const numbersListElement = document.querySelector('numbers-list');
const form = document.getElementById('answers-form');
const messageElement = document.getElementById('message')
const inputGroup  = document.getElementById('input-group');
const instructionElement = document.getElementById('instructions')

// INFORMAZIONI INIZIALI

const min = 1;
const max = 100;
const totalNumbers = 5;
const time = 10;

// steps di partenza

countdownElement.innerText = time;

// generare TOT NUMERI RANDOM

const numbers = getDifferentRandomNumbers(min, max, totalNumbers);

// INSERIAMO I HNUMERI IN PAGINA

let items = '';
let inputs = '';

for(let number of numbers){
    items += `<li class= "fs-3">${number}</li>`;
    inputs += `<input type="number" class="form-control" min="1" max="100" required></input>`
}

numbersListElement.innerHTML = items;
inputGroup.innerHTML = inputs;
const inputFields = document.querySelectorAll('input');


const countdown = setInterval(() => {
    countdownElement.innerText = --time;
    if(time === 0){
        clearInterval(countdown);
        form.classList.remove('d-none');
        numbersListElement.classList.add('d-none');
        instructionElement.innerText = 'inserisci tutti i numeri che ti ricordi';
    }
}, 1000);

// controllo della soluzione dell'utente

const confirm = () =>{
    e.preventDefault();

    const userGuesses = [];

    for(let field of inputFields){
        const value = parseInt(field.value);
        if(isNaN(value) && value >= min && value <= min && !userGuesses.includes(value)){
            userGuesses.push(value)
        }
    }

    if(userGuesses.length !== totalNumbers){
        messageElement.classList.add('text-danger');
        messageElement.innerText = 'Ci sono valori non validi o duplicati'
    }

    const correctAnswers = [];
    for(let guess of userGuesses){
        if(numbers.includes(guess)) correctAnswers.push(guess);
    }

    messageElement.classList.remove('text-danger');
    if(correctAnswers.length === totalNumbers) messageElement.classList.add('text-success');
    messageElement.innerText = `Hai indovinato ${correctAnswers.length} numeri! (${correctAnswers})`;
};


form.addEventListener('submit', confirm)






































