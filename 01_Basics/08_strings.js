const myName = "Prakash Nayak"
const age = 28

//string interpolation
console.log(`My name is ${myName} and age is ${age}`);


const gameName = new String("Prakash-Nayak")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));

const anotherString = gameName.slice(-7, 3)
console.log(anotherString);

const url = "https://prakashnayak.com.np/profile%20status"

console.log(url.replace('%20', '-'));
console.log(url.includes('prakash'));

console.log(gameName.split('-'));