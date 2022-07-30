// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;       
function compareTrue(valor1, valor2) {
    resultado1 = false;
    resultado2 = false;
    resultadoGeral = false;

    if (valor1 === true) {
        resultado1 = true;
    } else {
        resultado1 = false;
    }

    if (valor2 === true) {
        resultado2 = true;
    } else {
        resultado2 = false;
    }

    if (resultado1 === true && resultado2 === true) {
        resultadoGeral = true;
    }  

    return(resultadoGeral);
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

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  return (ultimoNome + ", " + primeiroNome);
}

// Desafio 5
function footballPoints(wins, ties) {
  resultado = wins * 3 + ties;
  return (resultado);  
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0]; // variável que irá receber o maior numero do array
  let repeticao = 0; // variável que vai receber a quantidade de repeticões
  for (let index in array){ // primeiro for para definir quem é o maiorNumero
    if(maiorNumero < array[index]) {
      maiorNumero = array[index];
    }
  }
  for (let contador in array) { //segundo for para definir repetição do maiorNumero
    if(maiorNumero === array[contador]) {
      repeticao += 1;
    }
  }
  return (repeticao);
}

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
  if(distancia1 < distancia2) {
    return ('cat1');
  } else if (distancia2 < distancia1) {
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];

  for (let index = 0; index < array.length; index ++) {
    if(array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      resultado[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      resultado[index] = 'buzz';
    } else {
      resultado[index] = 'bug!';
    }
  }
  return (resultado);
}

// Desafio 9
function encode(string) {
  let stringToArray = string.split("");
    for(let index in stringToArray) {
        if(stringToArray[index] === 'a') {
            stringToArray[index] = '1';
        } else if (stringToArray[index] === 'e') {
            stringToArray[index] = '2';
        } else if (stringToArray[index] === 'i') {
            stringToArray[index] = '3';
        } else if (stringToArray[index] === 'o') {
            stringToArray[index] = '4';
        } else if (stringToArray[index] === 'u') {
            stringToArray[index] = '5';
        } else {
            stringToArray[index] = stringToArray[index];
        }
    }
    let arrayToString = stringToArray.join('');
    return (arrayToString);
}  
function decode(string) {
  let stringToArray = string.split("");
  for(let index in stringToArray) {
      if(stringToArray[index] === '1') {
          stringToArray[index] = 'a';
      } else if (stringToArray[index] === '2') {
          stringToArray[index] = 'e';
      } else if (stringToArray[index] === '3') {
          stringToArray[index] = 'i';
      } else if (stringToArray[index] === '4') {
          stringToArray[index] = 'o';
      } else if (stringToArray[index] === '5') {
          stringToArray[index] = 'u';
      } else {
          stringToArray[index] = stringToArray[index];
      }
  }
  let arrayToString = stringToArray.join('');
  return (arrayToString);
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(techs, name) {
  let array = techs;
  let nome = name;
  let arraySorted = array.sort();
  let arrayObjetos = [];  
  if(array.length === 0) {
      return ("Vazio!");
  } else {
      for (let index = 0; index < arraySorted.length; index ++) {
          arrayObjetos.push({tech: arraySorted[index], name: nome})
      }
      return(arrayObjetos);
  }  
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
