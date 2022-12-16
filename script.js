// Prendo il mio elemento da HTML
const targetElement = document.getElementById('pwd-gen');
console .log('targetElement')

// Variabile per chiedere il nome
const firstName= prompt("Qual è il tuo nome?")
console .log('firstName')

// Variabile per chiedere il cognome
const Surname= prompt("Qual è il tuo cognome?")
console .log('Surname')

// Variabile per chiedere il colore preferito
const favColor= prompt("Qual è il tuo colore preferito?")
console .log('favColor')

// Stampo il risultato sull'HTML unendo le variabili precendenti e aggiungendo il numero 21
targetElement .innerText = firstName + Surname + favColor + 21
