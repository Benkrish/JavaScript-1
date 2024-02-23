// new ways to write string is using string interpolation coz it is more readible 

// 1- way to declare string

const name = "Krishna";
const myAim = "maintain discipline";

console.log(`${name} wants  to ${myAim}`);

// another way to declar a string   using new where u are using objects of js

const anotherName = new String("Radhe-_");
console.log(anotherName); // do same in console u will get there object with key nd value 
console.log(anotherName[0]);
console.log(anotherName.__proto__); // will get obj which is not empty console me dekh lena

// string methods
// these methods do not change our original string coz string are primitive data type it goes on stack(call by value or copyk)
console.log(anotherName.length);
console.log(anotherName.toUpperCase());
console.log(anotherName.charAt(1));
console.log(anotherName.indexOf("a"));
// to generate substring
const newString = anotherName.substring(0,4);
console.log(newString); //last index is exclusive(not include)
const anotherString = anotherName.slice(-6,4) //slice takes -ve number but sunstring don't -ve number means it starts from last (piche se)
console.log(anotherString);

// stimes users enter space while filling form which we do not want to save in our db so use trim()
const anotherOne = new String("    ben Kevin   ")
console.log(anotherOne);
// console.log(anotherOne.trim()); //Removes the leading and trailing white space and line terminator characters from a string.
// trimStart and trimEnd bhi hai

// const url = "https:://www.krishna.guj .com"
// sometime user enter space in url so browser convert that space int %20
const url = "https:://www.krishna.guj%20.com"
const newUrl = url.replace("%20","-")
console.log(newUrl);
console.log(url.includes("krishna"));

// string to split
const strArray = newUrl.split("-")
console.log(strArray);
