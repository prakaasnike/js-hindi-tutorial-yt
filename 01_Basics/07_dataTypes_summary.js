//PrimitiveType

// 7 types: string, number, boolean,null,undefined,symbol,bigInt

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234234543523423n



//ReferenceType(Non PrimitiveType)
//Array,Objects,Functions
const Array = ["Array", "Objects", "Functions"]

let objects = {
    name: "prakash",
    age: "29"
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof bigNumber)
/* -------------------------------------------------------------------------- */
/* -------------------------------- Memories -------------------------------- */
//Stack(primitive) and Heap(non primitive) memories

let nameStack = "A"

let anotherStackName = nameStack

anotherStackName = "New A"
console.log(nameStack);
console.log(anotherStackName);

//heap

let userOne = {
    email: "user@gmail.com",
    upi: "abc@gmail.com"
}

let userTwo = userOne

userTwo.email = "hello@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);