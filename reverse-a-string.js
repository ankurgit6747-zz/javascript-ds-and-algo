// Method 1

// function reverseString(str) {
//   return str.split("") // split method to return a new array
//         .reverse()  // reverse method to reverse a array
//         .join("");  // join method to join all element of the array into string
// }

// reverseString("hello");
// console.log(reverseString("hello"));

// Method 2

function reverseString2(str) {
  let newStr = ''
  for(let i = str.length -1 ; i >= 0 ; i--){
    newStr += str[i]
  }
    return newStr;
}

reverseString2('hello')
console.log(reverseString2('hello'));

