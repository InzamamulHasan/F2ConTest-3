console.log("Prototype In JS");
var arr=[1,2,3,4];
arr.map((item)=>{
    console.log(item);
})
console.log(arr);
let str="sdjhcfslk";
console.log(str);

let obj={
    inza:"Adsd"
}
console.log(obj);

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    showUsername(){
        return "My name is "+this.name;
    }
    shoeEmail(){
        return "My email is "+ this.email;
    }
}
let myUser=new User("Ifraz","ifr@gmail.com");
console.log(myUser);
console.log(myUser.showUsername());
// we can create new prototpe inside user class;

User.prototype.display=function(){
    return "Hi we can display";
}
console.log(myUser.display());



// we can change an existing function
Array.prototype.map=function(){
    console.log("Sorry map does not work anymore");
}
arr.map();//here we changed how map works

/// so we can also add a new function

//example
arr=[1,2,3,4,5,5,5,2,1,12];
Array.prototype.findOdd=function(){
    return this.filter((el)=>{
        return el%2!=0;
    })
}
console.log(arr.findOdd());

// If we want to see prototype
let mystr="iasoidhio";
console.log(mystr.__proto__);//It will return the the prototype for the string
let obj1={
    jas:"asd",
    ha:"sa"
}
// The methods we create in an class is called prototype
console.log(obj1.__proto__);
let a=2;
console.log(a.__proto__);


// A prototype is build-in proper of any classs and we can create new prototype 

//

 
