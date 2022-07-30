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
function triangleCheck(lineA, lineB, lineC) {
  // Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

  // O que será testado:

  // A função triangleCheck deve retornar o valor false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois lados;

  // A função triangleCheck deve retornar o valor false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença das medidas dos outros dois lados;

  // A função triangleCheck deve retornar o valor true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois lados e maior que o valor absoluto da diferença entre os outros dois lados.

  //Opção 01: cirando variáveis para as somas e substrações, limitado a 3 linhas:

  // let arrayLinhas = [lineA, lineB, lineC];

  // let somaAB = lineA + lineB;
  // let somaAC = lineA + lineC;
  // let somaBC = lineB + lineC;
  // let minusAB = Math.abs (lineA - lineB);
  // let minusAC = Math.abs (lineA - lineC);
  // let minusBC = Math.abs (lineA - lineC);
  // let statusTamanhoLinhas = false;
  //   for (var index in arrayLinhas){
  //     let linhaAtual = arrayLinhas[index];
  //     if (linhaAtual > somaAB || linhaAtual > somaAC || linhaAtual > somaBC) {
  //         statusTamanhoLinhas = false;
  //     } else if (linhaAtual < minusAB || linhaAtual < minusAC || linhaAtual < minusBC) {
  //       statusTamanhoLinhas = false;
  //     } else {
  //       statusTamanhoLinhas = true;
  //     }
  //   }
  //   return(statusTamanhoLinhas);
  // }
  // triangleCheck(10, 14, 8);

  //Opção 2: aplicando estrutura loop for para realizar operações com números independente da quantidade de linhas:
  
  let arrayLinhas = [lineA, lineB, lineC];
  
  let primeiraSoma = arrayLinhas[0] + arrayLinhas[1];
  let somaMinima = primeiraSoma;
  let primeiraSubtracao = arrayLinhas[0] - arrayLinhas[1];
  let subtracaoMaxima = Math.abs (primeiraSubtracao);
  let statusTamanho = false;

  for (var index = 0; index < arrayLinhas.length -1; index ++){
    let linhaAtual = arrayLinhas[index];

    //for para encontrar a menor soma, já que as linhas devem ser menor que o somatório das outras duas
    for (var index2 = index + 1; index2 < arrayLinhas.length; index2 ++){
      let proximaLinha = arrayLinhas[index2];
      if (somaMinima > linhaAtual + proximaLinha){
        somaMinima = linhaAtual + proximaLinha;
      }
    }
    for (var index2 = index + 1; index2 < arrayLinhas.length; index2 ++){
      let proximaLinha = arrayLinhas[index2];
      if (subtracaoMaxima < Math.abs (linhaAtual - proximaLinha)){
          subtracaoMaxima = Math.abs (linhaAtual - proximaLinha);
      }
    }
  }

  for (var index = 0; index < arrayLinhas.length; index ++){
      let linhaAtual = arrayLinhas[index];
      if (linhaAtual < somaMinima && linhaAtual > subtracaoMaxima){
          statusTamanho = true;
      }
  }
  return(statusTamanho);
}
triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(string) {
  //O método para extrair números de uma string, foi encontrado através do canal All Things JavaScript, LLC. Que pode ser visto através do link: https://www.youtube.com/watch?v=pfkkdzeyx6U 

  let reg = /\d+/g;

  let arrayStringNumeros = string.match(reg);

  let arrayNumeros = [];

  let coposDeAgua = 0;

  for (var index = 0; index < arrayStringNumeros.length; index ++){
      let numeroAtual = parseInt (arrayStringNumeros[index]);
      arrayNumeros.push(numeroAtual);
      coposDeAgua += numeroAtual
  }
  let resultado = coposDeAgua

  if (coposDeAgua === 1){
    resultado = coposDeAgua + ' copo de água'
  } else {
    resultado = coposDeAgua + ' copos de água'
  }

  // console.log(arrayStringNumbers);
  // console.log(arrayNumeros);
  // console.log(coposDeAgua);
  // console.log(resultado);
  
  return (resultado);
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
