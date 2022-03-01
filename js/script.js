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






