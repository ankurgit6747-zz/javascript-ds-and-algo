console.log('hello');

let length = 5
let array = [1,2,4,5]

const isPresent = (element, array) => {
    for (let i=0 ; i<array.length ; i++) {
        if (element === array[i]) {
            return true
        }
    }
    return false
}

const findMissingElement = (length, array) => {
    for (let i=1 ; i<length ; i++) {
        if(!isPresent(i, array)) {
            console.log('Missing element', i);
        }
    }
}

findMissingElement(length, array)