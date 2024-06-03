var parent_div = document.createElement("div");
parent_div.className = "main"
var input_date = document.createElement("input");
input_date.setAttribute("type", "date");
input_date.setAttribute("id", "dob");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary");
button.innerHTML = "Click me";
button.addEventListener("click", display_date);
parent_div.append(input_date,button);
document.body.append(parent_div)

function display_date(){
var input = document.getElementById("dob").value;
var inputdate = new Date(input);
var currentdate = new Date();
console.log(`Input date : ${ inputdate}, Current date: ${currentdate}`);
var millisecdiff = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime()) 
console.log(millisecdiff);
var secondsdiff = Math.floor(millisecdiff/1000);
console.log(secondsdiff);
var mindiff = Math.floor(secondsdiff/60);
console.log(mindiff);
var hoursdiff = Math.floor(mindiff/60);
console.log(hoursdiff);
var daydiff = Math.floor(hoursdiff/24);
console.log(daydiff);
var yeardiff = currentdate.getFullYear()-inputdate.getFullYear() 
console.log(yeardiff);
var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
console.log(monthdiff);

let inputdate_currentdate = document.createElement("div");
inputdate_currentdate.className= "main1"
inputdate_currentdate.innerHTML = `Input date : ${ inputdate}, Current date: ${currentdate}`;
document.body.append(inputdate_currentdate);

let yeardata = document.createElement("div");
yeardata.className= "main1"
yeardata.innerHTML = `Years:${yeardiff}`;
document.body.append(yeardata);

let monthdata = document.createElement("div");
monthdata.className= "main1"
monthdata.innerHTML = `Months:${monthdiff}`;
document.body.append(monthdata);

let daydata = document.createElement("div");
daydata.className= "main1"
daydata.innerHTML = `Days:${daydiff}`;
document.body.append(daydata);

let hoursdata = document.createElement("div");
hoursdata.className= "main1"
hoursdata.innerHTML = `Hours:${hoursdiff}`;
document.body.append(hoursdata);

let mindata = document.createElement("div");
mindata.className= "main1"
mindata.innerHTML = `Minutes:${mindiff}`;
document.body.append(mindata);

let seconddata = document.createElement("div");
seconddata.className= "main1"
seconddata.innerHTML = `Seconds:${secondsdiff}`;
document.body.append(seconddata);

let millidata = document.createElement("div");
millidata.className= "main1"
millidata.innerHTML = `Milliseconds:${millisecdiff}`;
document.body.append(millidata);


}
