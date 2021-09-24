console.log('hello');

function largestOfFour(arr) {
    
    let result = [];

    for(let i=0 ; i<arr.length ; i++){
        let largestNumber = arr[i][0]
        // console.log(largestNumber);  // it will display the first number of each nested array
        for(let j=0 ; j<arr[i].length ; j++){
            if(arr[i][j] > largestNumber) {
                largestNumber = arr[i][j]
            }
        }
        result[i] = largestNumber
    }
    console.log(result, 'largest');
    return result;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


