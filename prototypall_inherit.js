console.log("Prototypal Inheritance");

class GrandParent{
    constructor(){
        this.supername="Hi"
    }
    grandSpeaks(){
        return
    }
} 

 class Parent extends GrandParent{
    constructor(surname){
        super();
        this.surname=surname;
    }
    parentSpeak(){
        return "Parent is speaking";
    }
 }
 
 class Child extends Parent{
    constructor(firstname,surname){
        super(surname);
        this.firstname=firstname;
        
    }
    speak(){
        return "Child is speaking";
    }
 }
 var me=new Child("Inzaa","Hasan");
 console.log(me);


 /// Problem statement make parent obj the parent of  the obj child

 const parent={
    lastname:"Hasan",
    pspeak: function(){
        return "Parent is speaking";
    },
 }
 const child1={
    firstname:"Inzaa",
    cspeak: function(){
        return "Child is speaking"
    },
    __proto__:parent,// now child1 is inheriting parent1
 }
 console.log(child1);
 console.log(child1.lastname);
 console.log(child1.pspeak());



 /// function protype
 function Person(name, age){
    this.name=name,
    this.age=age
 }
Person.prototype.greet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

function Employee(name, age, jobTitle) {
        this.name=name,
        this.age=age,
        this.jobTitle=jobTitle   
}
Employee.prototype.jobGreet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
}
let cg=new Person("inza","25");
console.log(cg);
cg.greet();

