// var a = 'ankur is my name'

// let b = a.split(' ')

// console.log(b);

// console.log('hello world');

function findLongest(str) {

    let words = str.split(' ')
    let maxLength = 0

    for(let i=0 ; i<words.length ; i++){
        if(words[i].length > maxLength) {
            maxLength = words[i].length
        }
    }
    return maxLength
}

console.log(findLongest('lorem is a great this to practice on words'));

