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
function catAndMouse(mouse, cat1, cat2) {
  let distancia1;
  let distancia2;
  
  if(cat1 > mouse){
    distancia1 = (cat1 - mouse);
  } else {
    distancia1 = (mouse - cat1);
  }

  if(cat2 > mouse){
    distancia2 = (cat2 - mouse);
  } else {
    distancia2 = (mouse - cat2);
  }
  if(distancia1 < distancia2){
    return ('cat1');
  } else if (distancia2 < distancia1) {
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];

  for (let index = 0; index < array.length; index ++){
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      resultado[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0){
      resultado[index] = 'fizz';
    } else if (array[index] % 5 === 0){
      resultado[index] = 'buzz';
    } else {
      resultado[index] = 'bug!'
    }
  }
  return (resultado);
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let stringToArray = string.split("");

    for(let index in stringToArray){
        if(stringToArray[index] === 'a'){
            stringToArray[index] = '1';
        } else if (stringToArray[index] === 'e'){
            stringToArray[index] = '2';
        } else if (stringToArray[index] === 'i'){
            stringToArray[index] = '3';
        } else if (stringToArray[index] === 'o'){
            stringToArray[index] = '4';
        } else if (stringToArray[index] === 'u'){
            stringToArray[index] = '5';
        } else {
            stringToArray[index] = stringToArray[index];
        }
    }

    let arrayToString = stringToArray.join('')
    return (arrayToString);
  }
  
  console.log(encode('hi there!'));

function decode(string) {
  let stringToArray = string.split("");

  for(let index in stringToArray){
      if(stringToArray[index] === '1'){
          stringToArray[index] = 'a';
      } else if (stringToArray[index] === '2'){
          stringToArray[index] = 'e';
      } else if (stringToArray[index] === '3'){
          stringToArray[index] = 'i';
      } else if (stringToArray[index] === '4'){
          stringToArray[index] = 'o';
      } else if (stringToArray[index] === '5'){
          stringToArray[index] = 'u';
      } else {
          stringToArray[index] = stringToArray[index];
      }
  }

  let arrayToString = stringToArray.join('')
  return (arrayToString);
}

console.log(decode('h3 th2r2!'));

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
