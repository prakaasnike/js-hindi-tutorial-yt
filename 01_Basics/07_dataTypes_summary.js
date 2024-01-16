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