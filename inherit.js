console.log("Inheritance")
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

class Animal{
    speak(){
        return "Animal speaks";
    }
    eats(){
        return "Animal eats"
    }

}

// Extends is  the keyword that we use , so that the child class can acces the properties of the parent class
// The child extends the parent
class Dog extends Animal{
    constructor(color,bread){
        super();//
        this.color=color;
        this.bread=bread;
        
        this.age=4;
    }
    speak(){// here we are over_riding the speak function
        return "Dogs barks"
    }
    animalspeaks(){
        return super.speak();//
    }
}
var tommy=new Dog("Brown","German Shehpard");
console.log(tommy);
console.log(tommy.speak());

let an=new Animal();
console.log(an);
console.log(an.color);// undefined

// Another Example

class Person{
    constructor(name,species){
        this.name=name;
        this.species=species;
        this.mammal=true;
    }
    speak(){
        return "Human speaks"
    }
}
class Student extends Person{
    constructor(nameval,speciesval,id){
        // Super keyword is calling the parent
        super(nameval,speciesval)// It will go to parent and create ans propert name:nameval and speceise=speciesval in the parent constructor

        this.id=id;
    }
    //The super() method refers to the parent class.

     //By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

    speak(){// this is overriding the parent spaek() method so accessing the parents speaks is possible in normal way ,then we use super();  
        return "All species speaks in their own sign language";
    }
    speakAtHome(){
        return super.speak()// It will return the parents i.e. Person classes speak method
    }
}

let student1=new Student("Inzaa","Human","23123");
console.log(student1);
console.log(student1.speak());
console.log(student1.speakAtHome());
///////////////



 class Car{
   constructor(brand,price){
        this.brand=brand;
        this.price=price;
    }
    brandName(){
        return this.brand;
    }
    brandName2(x){
        this.brand=x;
    }
 }
 class Bullero extends Car{
    constructor(name,price){
        super(name,price);
        
    }
 }
 let b1=new Bullero("Suv","20 Lakh");
 console.log(b1);
 console.log(b1.brandName());
///////////
 
 console.log("getter and setter");

// GETTER AND SETTER 
// getter is used to get some data from class object and setter is use

class User{
    constructor(name,email,pass,phone,age){
        this.name=name;
        this.email=email;
        this.pass=pass;
        this.phone=phone;
        this.age=age;
    }
    set setPhoneNumber(phone){
        this.phone=phone;
    }
    get getPhoneNumber(){
        return this.phone;

    }
}
let user1=new User("Inza","ih@gmail.com","12#djkcb2","09890977878","25");
console.log(user1);
console.log(user1.getPhoneNumber);

user1.setPhoneNumber="123232323";
/// When ever we use set and get the methods will behave like properties
console.log(user1);
console.log(user1.getPhoneNumber)

