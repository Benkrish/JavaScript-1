// using const so that in future we can not change the value in future
const accountId = 363933;
// using let
let accountEmail = "ben@gmail.com";
// using var
var accountPassword = "ben"
// this is another way to declare variable
accountOwner = "Ben3"

let accountState; // this will give undefined coz we have not put any value in the variable


// to print all values in one go
console.table([accountId,accountEmail,accountPassword,accountOwner,accountState])

// let solves the problem of block scope and functional scope