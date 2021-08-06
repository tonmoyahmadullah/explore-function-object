function bringSingara (taka) {
    console.log('singara er jnno dici', taka);
    console.log('Mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
console.log('ei nen singara', singara);