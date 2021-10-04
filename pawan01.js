const points = [40, 100, 1, 5, 25, 10]

function fun() {
    for (let i=points.length - 1 ; i>0 ; i--) {
        let j = Math.floor(Math.random() * i)
        let k = points[i]
        points[i] = points[j]
        points[j] = k
        console.log(k);
    }
    document.getElementById('demo').innerHTML = points  
}

//////////////////////////// CALL METHOD 

// let name1 = {
//     'fname': 'Ankur',
//     'lname': 'Sharma',
//     printFullName: function () {
//         console.log(`my full name is ${this.fname} ${this.lname}`);
//     }
// }

// FUNCTION BORROWING

// name1.printFullName()

let name1 = {
    'fname': 'Ankur',
    'lname': 'Sharma',
}


let name2 = {
    'fname': 'Ajay',
    'lname': 'Kumar'
}

const printIntro = function (city, state) {
    console.log(`My name is ${this.fname} ${this.lname} and from ${city} state ${state}`);
}

printIntro.call(name1, 'Dhanbad', 'Jharkhand')
// prontIntro.call(name2)

////////////// APPLY METHOD

// Only difference is is the way he pass arguments we pass the argument is in array list

// printIntro.apply(name2 , ['Mathura', 'Uttar pradesh'])

/////////// bind method

let printMyName = printIntro.bind(name1, 'Dhanbad', 'Jharkhand')

printMyName()

//////////// function currying 

// function multiply(x, y) {
//     console.log(x*y);
// }

// closer 

function multiply(x) {
    return function(y) {
       console.log(x*y);
    }
}

let multiplyTwo =  multiply.bind(this, 4)

multiplyTwo(2)