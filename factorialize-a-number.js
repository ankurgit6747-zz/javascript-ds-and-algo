// console.log('hello');

function factorialize(num) {

   if(num === 0 || num ===1) {
       return 1
   }
    for(var i = num - 1 ; i >= 1 ; i--){
        // num *= i or
        num = num * i
    }
    return num
}

factorialize(5)
console.log(factorialize(5));

