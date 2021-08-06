// 1. declier a variable
var favouriteBook = '4 Hour work week';

// 2. Array
var boolList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = boolList.indexOf('shoe dog');
boolList[1] = 'story Brand';

boolList.push('small giant');
boolList.pop();

// 3. conditionals
if(boolList[1] == 'hooked') {
    console.log('I am hooked');
}
else{
    console.log('I am not hooked');
}

// 4. Loop
// a. while Loop
var i = 0; // loop variable
while(i < 15) {
    console.log(i);
    console.log('Looping Looping Looping');
    i++;
}

// b. for loop
for(var i = 0; i < 25; i++) {
    console.log(i);
}