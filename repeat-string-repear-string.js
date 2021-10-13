console.log("repeat string");


// sollution 1
function repeatStringNumTimes(str, num) {
  var newStr = ''
  while(num>0){
      newStr += str,
      num--
  }
  return newStr
//   console.log(newStr);
}

repeatStringNumTimes("abc", 3);
  console.log( repeatStringNumTimes("abc", 3));

// sollution 2
// function repeatStringNumTimes(str, num) {
//     return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
//   }

//   console.log(repeatStringNumTimes('ankur', 4));
