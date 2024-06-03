function bar(num){
    return new Promise((resolve,reject)=>setTimeout(()=>resolve(`${2*num}`),2000));
}
function foo(){
return new Promise((resolve,reject)=>reject("This is rejected"),3000)
}
bar(5).then((data)=>{
    console.log(data);
    return bar(data);
}).then((data1)=>{
    console.log(data1);
    return foo();
}).then((data2)=>console.log(data2)).catch((error)=>console.log(error))