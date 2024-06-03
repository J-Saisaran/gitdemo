var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
var res = JSON.parse(request.response);

//a.Get all the countries from Asia continent/region using Filter method
console.log("a. Get all the countries from Asia continent/region using Filter method")

var details_asia = res.filter((ele)=>ele.region == "Asia");
//console.log(details_asia); 
var details_data = details_asia.map((ele)=>ele.name.common);
console.log(`All the countries from Asia continent/region: ${details_data}`);
console.log("-------------------------------------------------------------------------------------")
//b. Get all the countries with a population of less than 2 lakhs using filter method
console.log("b. Get all the countries with a population of less than 2 lakhs using filter method")

var data_popu = res.filter((ele)=>ele.population<200000);
//console.log(data_popu);
for(var i =0;i<data_popu.length;i++){
console.log(`Country name with population less than 2 lakhs: ${data_popu[i].name.common} `)}
console.log("-------------------------------------------------------------------------------------")
//c.Print the following details name, capital, flag, using ForEach
console.log("c.Print the following details name, capital, flag, using ForEach")

res.forEach(element => {
   console.log(`Name: ${element.name.common}- Capital: ${element.capital} - Flag: ${element.flag}`);
  });
  console.log("-------------------------------------------------------------------------------------")
  // d.Print the total population of countries using reduce function
console.log("d.Print the total population of countries using reduce function")

  var total = res.reduce((acc,curr) =>{
   return acc+curr.population;
} ,0);
console.log(`The total population: ${total}`);
console.log("-------------------------------------------------------------------------------------")

//e. Print the country that uses US dollars as currency.
console.log("e.Print the country that uses US dollars as currency.")

 var curr = res.filter((ele)=>ele?.currencies?.USD);
 var USDcurr = curr.map((ele)=>ele.name.common);

   console.log(`Countries using US dollar as currency: ${USDcurr}`);
   console.log("-------------------------------------------------------------------------------------")

 
   }



