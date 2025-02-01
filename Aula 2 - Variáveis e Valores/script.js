// tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer)); //O typeof serve para imprimir o tipo da variavel.

//string
var nome = 'diana';
console.log(typeof(nome));

let variavel2 = 'diana';
console.log(variavel2);

const constante = 'diana';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoGlobal () {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}

escopoLocal();


//atribuicao
var atribuicao = 'diana';


//comparacao
var comparacao = '0' == 0;
console.log(comparacao);


//comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//operadores
var adicao = 1 + 1;
console.log(adicao);

var subtracao = 1 - 1;
console.log(subtracao);

var multiplicacao = 1 * 1;
console.log(multiplicacao);

var divisao = 1 / 1;
console.log(divisao);


//Operadores relacionais.
var maiorQue = 5 > 2;
console.log(maiorQue);


//operadores logicos
var e = true && true;
