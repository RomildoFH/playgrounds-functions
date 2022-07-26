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
function highestCount(array) {
  let maiorNumero = array[0]; //variável que irá receber o maior numero do array
  let repeticao = 0; //variável que vai receber a quantidade de repeticões
  for (let index in array){ //primeiro for para definir quem é o maiorNumero
    if(maiorNumero < array[index]){
      maiorNumero = array[index]
    }
  }
  for (let contador in array){ //segundo for para definir repetição do maiorNumero
    if(maiorNumero === array[contador]){
      repeticao += 1;
    }
  }
  return (repeticao);
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))


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
