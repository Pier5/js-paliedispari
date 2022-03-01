// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let word = prompt('Inserisci una parola e verifica se questa è palindroma o meno');
let output = document.querySelector('.output');

let reverseWord = checkPalindrome(word);

if(word.toLowerCase() == reverseWord.toLowerCase()){
    output.innerHTML = "Questa è una parola palindroma!"; 

} else {
    output.innerHTML = "Questa non è una parola palindroma!"; 
}
  
function checkPalindrome(string){
  let stringReverse = string.split('').reverse().join('');  
  return stringReverse;
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let question = prompt('Scegli: Pari o Dispari?').toLowerCase();
let num = parseInt(prompt('Inserisci un numero da 1 a 5'));
let outputTwo = document.querySelector('.output-two');
let outputThree = document.querySelector('.output-three');
let outputFour = document.querySelector('.output-four');
let outputFive = document.querySelector('.output-five');
let numCpu = random(5);
let totalSum = num + numCpu;

outputTwo.innerHTML = `Il tuo numero: ${num}`;
outputThree.innerHTML = `Numero Cpu: ${numCpu}`; 
outputFour.innerHTML = `Totale: ${totalSum}`;

if (question == 'pari' && sum(totalSum) == true) {
    outputFive.innerHTML = 'Hai vinto!!';
} else if (question == 'dispari' && sum(totalSum) == true) {
    outputFive.innerHTML = 'Hai perso!!';
} else if (question == 'dispari' && sum(totalSum) == false) {
    outputFive.innerHTML = 'Hai vinto!!';
} else {
    outputFive.innerHTML = 'Hai perso!!';
}

function random(max) {
    return Math.floor(Math.random() * (max) ) + 1;
}

function sum(result) {
    if (result % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

















