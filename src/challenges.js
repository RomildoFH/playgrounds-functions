// Desafio 1
function compareTrue() {
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return(area);
}

// Desafio 3
function splitSentence(string) {
  resultado = string.split(" ");
  return (resultado);
}

console.log(splitSentence("be trybe"));


// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  return (ultimoNome + ", " + primeiroNome);
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
  resultado = wins * 3 + ties;
  return (resultado);  
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
