// fethc is  function that allows us fetch data from an url
// fetch returns a promise
// response is not the actual data that you need. It is actually an response data
// and we need to say response.json() to get the data

fetch('https://dummyjson.com/products/1').then((res)=>{
    console.log(res);
    return res.json();
}).then((data)=>{
    console.log(data.brand);
}).catch((err)=>{
    console.log("err",err);
})
