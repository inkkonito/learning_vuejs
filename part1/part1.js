// chapter 1

// numeral values

var a = 0.5;
var b = 1;
console.log(a, b);

// booleans values

a = false;
b = true;
console.log(a, b);

// strings values

a = "hello";
b = "hello";
console.log(a, b);

// table values

a = [10, "abc", -36.5];
console.log(a);
console.log(a[0]); // logging index 0 (first element)
console.log(a[1]); // logging index 1 (second element)
console.log(a[2]); // logging index 2 (third element)
a[3] = "def"; // added new element using index
console.log(a);

// objects values

obj = {
  age: 43, // standard writing approach
  name: "Clinton",
  firstname: "Bill",
};
console.log(obj);
obj["age"] = 42; // second type of assigning value to a property
console.log(obj);
obj.age = 41; // third type of assigning value to a property
console.log(obj);

console.log(obj.name); // logging name
console.log(obj["firstname"]); // logging firstname

// variables declaration using const
const c = "figma";
console.log(c);
// c = 42; // error can not re-assign a const

// variable declaration using var

var a = 12;
var b = 50;
var d = a + b;
var e = "My name is ";
var f = "Jon";
console.log("a + b = " + a + b); // will add values to string initied
console.log("d = " + d); // will display the value D (a + b)
console.log(e + f); // compute both variables in one

// let variables
