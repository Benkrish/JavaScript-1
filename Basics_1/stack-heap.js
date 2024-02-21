// stack(primitive) => here will get copy ,  heap(non primitive)=> will get refrence

let user = "ben@"
let anotherUser  = user
console.log(anotherUser);
// now
anotherUser = "kevin@"
console.log(anotherUser); //coz copy cretae ho rahi hai stack me

// heap

const obj = {
    name:"ben"
}
const newObj = obj;
newObj.name ="kevin";

console.log(obj);
console.log(newObj);
