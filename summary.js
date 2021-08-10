// decliar a variable
var skyColor = 'white';

// decliar a array
var phones = ['Iphone', 'shaomi', 'shamsung', 'LG', 'HTC'];

// changing an element in an array by position
// phones[3] = 'walton';


// check oppo exists in an array
if (phones.indexOf('oppo') == -1){
    console.log('Ooopss! there is no oppo');
}

// if lg is available
if (phones.indexOf('LG') != -1){
    console.log('LG is available now');
}


// loop
var num = 0;
while(num <= 10) {
    num++;
}

for (var i = 0; i < phones.length; num++){

}

// function 
function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}
//  calling function 
addThreeNumbers(87, 41, 56);

// Object 
var microphone = {
    brand: 'blue yeti',
    price: '120',
    color: 'black'

}

