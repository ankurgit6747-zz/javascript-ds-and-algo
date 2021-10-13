console.log("TITLE CASE A SENTENCE");

function titleCase(str) {
    let arrStr = str.toLowerCase().split(" ");
    let result = arrStr.map((val) => {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })

    return result.join(' ')
}

console.log(titleCase("I'm a little tea pot"));
