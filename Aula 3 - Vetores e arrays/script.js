//delcaracao de array
let array = ['string', true, 1];
console.log(array(0));

array.forEach(function(item, indice){console.log(item, indice)}); //repeticao para cada indice/item dentro de um array.

array.push('novo indice');
console.log(array);

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: 'Objeto Interno'};
console.log(object.boolean); //acessando o objeto

var string = object.string;
console.log(string); //desestruturando o object

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno) //outra forma de desestruturar.


