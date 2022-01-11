// o que são arrays

// // como declarar um array
// let array = ['string', 1, true];
// console.log(array);

// pode guardar vários tipos de dados
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array[3]);

// // forEach
// array.forEach(function(item, index) {console.log(item, index)});

// // push
// array.push('novo item');
// console.log(array);

// // pop
// array.pop();
// console.log(array);

// // shift
// array.shift();
// console.log(array);

// // unshift
// array.unshift('novo item no inicio');
// console.log(array);

// // splice
// array.splice(0, 3);
// console.log(array);

// //slice
// let novoArray = array.slice(0, 3);
// console.log(novoArray);

// objetos
let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectIntern: {objectIntern: "Objeto Interno"}};
console.log(object);
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var array = object.array;
console.log(array)

var { string, boolean, objectIntern} = object;
console.log(string, boolean, objectIntern)