// Desafio 11
function generatePhoneNumber(array) {
  //dividindo o problema:
//1 - o array de numeros deverá retornar uma string no formato de um número de telefone
//2 - nenhum numero do array poderá ser maior que 9
//3 - nenhum numero do array poderá ser menor que zero
//4 - nenhum numero do array poderá se repetir por 3 vezes ou mais
//5 - o array não poderá ter mais e nem menos de 11 números
//6 - caso não cumpra os requisitos 2, 3 e 4, deverá retornar a mensagem: 'não é possível gerar um número de telefone com esses valores'
//7 - caso o array tenha mais de 11 números ou menos de 11 números, deverá retornar a mensagem: 'Array com tamanho incorreto.' 
  let maiorNumero = array[0];
  let menorNumero = array[0];
  let statusTamanho = false;
  let statusNumero = false;

  if (array.length > 11 || array.length < 11){
      statusTamanho = false;
      return('Array com tamanho incorreto.')
  } else {
      statusTamanho = true;
      for (let index in array){
          if (maiorNumero < array[index]){ //estrutura para identificar maior número do array
              maiorNumero = array[index];
          }
          if (menorNumero > array[index]){ //estrutura para identificar menor número do array
              menorNumero = array[index];
          }
      };
  }
  if (maiorNumero > 9 || menorNumero < 0){
      statusNumero = false;
      return('não é possível gerar um número de telefone com esses valores')
  } else {
      statusNumero = true;
  }
  //Verificando repetições

  let repeticao = 0;
  let contNumero = 0;
  let statusRepeticao = false;

  for (var atual in array){    
      for (var prox in array){
        if (array[atual] === array[prox]){
          contNumero += 1
        }      
      }
      if (contNumero > repeticao){
          repeticao = contNumero;
        }
      contNumero = 0;
    }
  if (repeticao < 3){
      statusRepeticao = true;
  } else {
      return('não é possível gerar um número de telefone com esses valores');
  }

  let numeroTelefone = "";

  if (statusTamanho === true && statusNumero === true && statusRepeticao === true){
      for(let contador in array){
          numeroTelefone += array[contador];
      }    
      return("(" + numeroTelefone[0] + numeroTelefone[1] + ") " + numeroTelefone[2] + numeroTelefone[3] + numeroTelefone[4] + numeroTelefone[5] + numeroTelefone[6] + "-" + numeroTelefone[7] + numeroTelefone[8] + numeroTelefone[9] + numeroTelefone[10]);
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
