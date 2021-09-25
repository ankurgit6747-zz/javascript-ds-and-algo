console.log('confirm the ending');  

// function confirmEnding(str, target) {

//     let arr = str.split('').reverse()
//     let targetValue = target.split('').reverse()
//     console.log(arr, 'arr');
//     console.log(targetValue, 'target');
    
//     for(let i=0 ; i<targetValue.length ; i++) {
//         if(targetValue[i] === arr[i]) {
//             return true
//         }
//          return false
//     }
    
//     return str;
//   }
  
// //   confirmEnding("Bastian", "n");

// //   console.log(confirmEnding("Bastian", "ian"));  // this is return GOOD
// console.log(confirmEnding("Open sesame", "sage"));  // this is not returning GOOD

function confirmEnding(str, target) {

    return str.slice(str.length - target.length) === target
}

console.log(confirmEnding("Bastian", "ian"));  // this is return GOOD
