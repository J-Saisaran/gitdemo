//1.
let a = { name: "Person1", age: 29};
let b = { age: 29,name: "Person1"};
console.log(JSON.stringify(a)===JSON.stringify(b))
//2,3.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var res = JSON.parse(request.response);
    //console.log(res);
    for(var i in res){
       // console.log(res[i].flags.png)
        //console.log(res[i].name.common)
        //console.log(res[i].region)
        //console.log(res[i].sub-region)
        //console.log(res[i].population)
        console.log(res[i].name.common,"-",res[i].region,"-",res[i].subregion,"-",res[i].population,"-",res[i].flags.png);
    }
}


