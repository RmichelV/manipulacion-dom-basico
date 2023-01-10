const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');

const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event){
    console.log({event});
    event.preventDefault();
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    let sum = num1 + num2; 
    pResult.innerHTML = "La suma es: " + sum;
}


