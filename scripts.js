console.log("Introduction to JavaScript");

//FizzBuzz program
function fizzBuzz() {
    for(let i = 1; i < 101; i++) {
        if((i % 3) == 0 && (i % 5) == 0) {
            console.log("FIZZBUZZ");
        }
        else if((i % 5) == 0) {
            console.log("BUZZ");
        }
        else if((i % 3) == 0) {
            console.log("FIZZ");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz();
function countBs(string) {
    let num = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] == "B") {
            num += 1;
        }
    }
    return num;
}
let num = countBs("HeBllbo WBorlBd");
console.log(num + " letter B's");

function countChar(string, char) {
    let num = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] == char) {
            num += 1;
        }
    }
    return num;
}
num = countChar("HeBllbo WBorlBd", 'l');
console.log(num + " letter l's");