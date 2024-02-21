// sometimes we get the value from frontend through forms or etc so we do  not know that the what type of value is coming but we want to make sure that it should be let's say number
// let {score} = req.body

let score = "33"
// two ways of checking type
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) // will conert it to "number" type
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1 = "b36";
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); // will convert to number but do not depend on it coz in this case we do not get the value see just below one
console.log(valueInNumber1); // gives NAN coz in our variable we have char b

let score2 = null
let valueInNumber2 = Number(score2);
console.log(valueInNumber2); // 0 dega 

let score3 = undefined;
let valueInNumber3 = Number(score3);
console.log(valueInNumber3); //NAN 

let score4 ="bennds"
let valueInNumber4 = Number(score4);
console.log(valueInNumber4);

// boolean
// 1=> true 0=>false
// ""==> false "string"=> true 


// *************OPERATIONS************************************

// 2**3 => 2 raise to 3

let str1 = "hello";
let str2 = " hi";
console.log(str1+str2);

// tricky
console.log("1"+2);
console.log(1+"2");
console.log("1"+3+3); // 133
console.log(1+2+"3"); // 33

console.log(+true); // 1
console.log(+""); // 0

// learn about prefix and postfix

// In js comparison (>= etc) works different than equality op(==) comparison frst convert null to 0 and then compares
console.log(null>0);
console.log(null==0);
console.log(null>=0);


// false hi aayega
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);


// === strict check value + dataType ya pe conversion nhi hota == pe conversion hota hai
console.log("2"===2); //false
console.log("2"==2); // true yaha pe conversion hota hai
 

