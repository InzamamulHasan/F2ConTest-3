console.log("Promises");

//What is promises
// what was the need of promise;

// Person A, Person B
// Person A gives 20 rs to person B
// Person B says that I promise I will give this money back to you in 10 days;
// Person B gives a "Promise " to person A...

// what does person A has?--> It just has a promise
// What can a person do?  
//                   Person A will wait for 10 days

// But there is two possibilities after 10 days.. 
//                   1. He will return the money back that is "resolve"  
//                   2. He will not return the money back that is "reject"

// A promise keeps pending till it 'resolves' or 'rejects'

// Till the promise will get completed either it gives data or error 

// Promises are objects

let prom1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Inza");
        reject("kjjh")
    },2000);
})
prom1.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("err",err)
})
setTimeout(()=>{
    console.log("Hasan");
},1000,"f")
console.log("I am from Assam")
console.log("Promise",prom1);


console.log("HIII", new Date())
let a;
a=3;

let myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Herer is your data...");
        reject("Sorry no data found");/// Here both returns some data so which ever is at first will work;
        
       
    },1000)
})
 console.log("Promise",myPromise, new Date());

 myPromise.then((data)=>{
    console.log(data);
 }).catch((err)=>{
    console.log("Error",err);
 })
 setTimeout(()=>{
    console.log("Promise",myPromise, new Date());

},1000)
 

// resolve and reject returns data and it changes the state of the promise from prending state to fullfilled ot rejected
// fullfiled or rejected

console.log("Promise Chaining");
// Promise chaining is 

// Problem statement---> You go to a salon, you want to get hair cut
// waiting time is 1500 miliseconds
// you haircut takes 3000 miliseconds
// you have to create promises

// wait() Then getHaircut() Then pay()
// Try understand something whenever an function returns something it behaves like
/* ex, function ret(){
    return "inza";
  }
  console.log(ret())// "inza"// so here we can see function ret() is behaving like string "inza"
*/
function waitFnc(){
    console.log("Enter the shop at",new Date());
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Waiting in line...")
        },2000)
    })
}
 function getHaircut(){
    console.log("Started geting the hair cut at ",new Date());
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hair cut is done and I look good...")
        },4000)
    })
 }
 function pay(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I have paid the amount...")
        },6000)
    })
   
 }
 waitFnc().then((data)=>{
    console.log(data);
    return getHaircut();
 }).then((data1)=>{
    console.log(data1);
    return pay();
 }).then((data2)=>{
    console.log(data2);
 }).catch(()=>{
    console.log("Error found",err);
 })
