var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}
// console.log(computer);
// console.log(computer.processor);

var computerPrice = computer.price;
// console.log(computerPrice);

// set a object property value
computer.price = 22000;
// console.log(computer);


// different way to set a value of an object property
computer.price = 22000;
computer['price'] = 23000;
// console.log(computer);

// another one
var pricePropertey = 'price';

computer.price = 22000;
computer['price'] = 23000;
computer[pricePropertey] = 19000;

// console.log(computer);


// another one
var storagePropertey = 'storage';
computer[storagePropertey] = '512gb';

console.log(computer);
