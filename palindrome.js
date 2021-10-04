var word = 'racecar';

var letter = []; // this is our stack

var rword = ''

// put the word letter into stack   
for(var i=0 ; i<word.length ; i++){
    letter.push(word[i])
}

// pop the word in stack
for(let i=0 ; i<word.length ; i++){
    rword += letter.pop()
}

console.log(letter+ '---' + rword);

if(letter === rword){
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}