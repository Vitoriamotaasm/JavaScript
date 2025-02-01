var jogador1 = 1;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log("Jogadores inválidos");

if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marcou um ponto!");
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log("O jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
} else {
    console.log("O jogador não marcou ponto");
}

switch (placar) {
    case jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
    propriedade4: 'valor4',
    propriedade5: 'valor5'
}

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

for (let i in array) {
    console.log(i);
}

for (let i in object) {
    console.log(i);
}

for (let i of array) {
    console.log(i);
}

for (let i of object.propriedade1) {
    console.log(i);
}

var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

do {
    a++;
    console.log(a);
} while (a < 10);
