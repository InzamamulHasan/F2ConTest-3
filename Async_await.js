/*let arr=[1,2,3,4];
// Filter()
let ans=arr.filter((el)=>{
    return el%2==1;
})
console.log(ans);

// Map()
let ans1=arr.map((el)=>{
    if(el%2==0){
        return el*2;
    }else{
        return el;
    }
})
console.log(ans1)
*/

console.log("1");
console.log("2");
console.log("3");
console.log("4");

// JS is Synchronous language
// Time , Tide and Javascripty waits for no one

// JS can also be 'Asynchronous'(==> Asynchronous is just absence of synchronous--. It could be running late)

function myPromise(){
    return new Promise((resolev,reject)=>{
        setTimeout(()=>{
            resolev("Here is your data");
        },1000)
    })
}
// Problem statement is --> create a function to hand an promise

function myAsnc(){
    console.log("My Funtion");
    let prom=myPromise();
    console.log(prom);
    setTimeout(()=>{
        console.log("ihsx")
        console.log(prom);
    },2000)
}
myAsnc();
// We want to wait till our promise gets fullfiled

async function myAsnc2(){
    console.log("ASync");
    const pr=await myPromise().catch((err)=>{console.log("err",err)});
    //if we want to check the error we can use catch;
    if(pr){
        console.log(pr);
    }
   
}
myAsnc2();


// We also can use try and catch
// try and catch is better approach
async function myAsnc3(){
    console.log("ASyjksha");
    try{
        const myPr=await myPromise();
        
        console.log(myPr,new Date);
    }catch(e){
        console.log("Error 2",e);
    }
}
myAsnc3();

/// Async wait in promise chaining

function waitFnc(time){
    //console.log("Enter the shop at",new Date());
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Waiting in line... from ${time} minutes`)
        },2000)
    })
}
 function getHaircut(time1,time){
    //console.log("Started geting the hair cut at ",new Date());
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Hair cut is done and I look good...But it took ${eval(time1+time)} minutes`)
        },2000)
    })
 }
 function pay(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I have paid the amount...")
        },2000)
    })
   
 }

 async function handleProm(){
    try{
        let pr1=await waitFnc(20);
        console.log(pr1,new Date());
        let pr2=await getHaircut(20,30);
        console.log(pr2,new Date());
        let pr3=await pay();
        console.log(pr3,new Date());
    }catch(e){
        throw error;
    }
 }
 handleProm();

 // we can pass parameter
 