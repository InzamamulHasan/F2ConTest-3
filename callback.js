console.log("Call back function")
 function Sayhello(callback){
    console.log("Hi")
    callback();
 }
 function sayBye(){
    console.log("Bye");
 }
 Sayhello(sayBye);
// This is a general way to write call back function
 // A call back function is nothing but a function that gets passed as parameter and gets called inside another function

 // sayBye--- function referce
 //SayBye()--- function calling

 // Problem statement --> You own a resturant, create a Resturant System for your resturant.

 /// Greet() -> takeOrder() -> giveFood() -> takePayment() -> Thankyou()

 function greet(a){
   console.log("Say Hello");
   a(giveFood);
 }

 function takeOrder(b){
   let order=prompt("Please enter your order")
   if(order){
      console.log("Talking order....");
      b(takePayment);
   }else{
      takePayment(thankyou)
   }
  
 }

 function giveFood(c){
   console.log("Serving food")
   c(thankyou);
 }
  function takePayment(d){
   console.log("Recieving payment")
   d();
  }
 
function thankyou(){
   console.log("Thank for coming, please come again");
}
greet(takeOrder)


