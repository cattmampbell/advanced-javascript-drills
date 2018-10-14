// console.log(`Testing... Testing... 1, 2, 3...`);

name = 'Matthew';
var name;
// let name;
console.log(name); // Should log: Matthew

setName(); // Calls setName() b/f it is declared!

function setName() {
    var name = 'Covalence';
    console.log(name); // Should log: Covalence
}

console.log(`Before findAverage() is called.`); // Should log: Before findAverage() is called.
let myAverage = findAverage(80, 88); 
console.log(`After findaverage() was called. myAverage() is ${myAverage}!`); // Should log: After findAverage() was called. myAverage() is 84!
function findAverage(number1, number2) {
    console.log(`Inside of findAverage().`); // Should log: Inside of findAverage().
    var answer = (number1 + number2) / 2;
    return answer;
}

/*
* CONSOLE SHOULD LOG (IN ORDER):
*
* Matthew
* Covalence
* Before findAverage() is called.
* Inside of findAverage().
* After findAverage() was called. myAverage() is 84!
* End of script.
*/ 

console.log(`End of script.`); // Should log: End of script.