// how u store ur data in memory and how you access that data , by this data types are categorized in two categories


/* Primitive(7)
    These are callByValue i.e when u copy u do not get there memory ref instead u get the copy and whatever changes has done it show on the copy data;
    7 types: String,Number,Boolean,null(empty , not empty string),undefined,Symbol,BigInt*/

    
    
    const id = Symbol('123');
    const anotherId = Symbol('123');
    
    console.log(id===anotherId); // false coz Symbol itself makes it unique regardless of same value

    const bigNumber = 3454556464645645545454544564456545454n; // n dentotes that it is a big Int number
    console.log(typeof bigNumber); // undefined dega ya bigint ek baar check kar lena


    /*Refrence (Non Primitive)
        These are call by refrence i.e in memory we get there refrence
        Array,Objects,Function*/

        const arr = ["Ben","Kevin"]
        const obj = {
            name:"Ben",
            age:19
        }
        const myFunc = function(){}
        // All non primitive data type types are object
        console.log(typeof arr);
        console.log(typeof obj);
        console.log(typeof myFunc); // return function but it is called as function object





// JS is dynamically typed which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to