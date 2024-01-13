console.log('JS OK')

// prendo gli elementi che mi servono

const timeElement = document.getElementById('time');
const numberInPage = document.querySelector('.numbers');
const inputNumber = document.getElementById('input');
const button = document.getElementById('button');

console.log(timeElement, numberInPage, inputNumber, button)

// svolgimento della logica

button.addEventListener('click', function(){
    numberInPage.classList.remove('d-none');
    inputNumber.classList.add('d-none');

    const randomNumber = [];
    for(let i  = 0; i < 5 ; i++){
         const generateRandomNumber = Math.floor(Math.random()* 100) + 1;
         randomNumber.push(generateRandomNumber)
    };

    numberInPage.innerText = randomNumber;

    let count = 5;
    const time = setInterval( () => {
        timeElement.innerText = --count;
        if(count === 0){
            clearInterval(time);
            numberInPage.classList.add('d-none');
            inputNumber.classList.remove('d-none');
            timeElement.innerText = "Quanti te ne ricordi?"
            button.innerText = 'Restart!'
        }
        }, 1000);

    
});