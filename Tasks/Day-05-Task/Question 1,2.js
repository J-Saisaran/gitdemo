/*object I created for My Resume
var Resume={
  "Name":"J Saisaran",
  "Objective":"To obtain a challenging position with a reputed organization as an intern for the main aim of acquiring deep knowledge and experience, which in turn helps in company’s growth and to pursue my career.",
  "Education":"B.E. CSE",
  "CGPA": 8.40,
  "Skills":"C ReactNative, Java, Python, Html and CSS",
  "Area of Interest":"Full stack development",
  "Project":"Prediction of house pricing using SMLT"
  }*/
  //for...in loop
var Resume={
  "Name":"J Saisaran",
  "Objective":"To obtain a challenging position with a reputed organization as an intern for the main aim of acquiring deep knowledge and experience, which in turn helps in company’s growth and to pursue my career.",
  "Education":"B.E. CSE",
  "CGPA": 8.40,
  "Skills":"C ReactNative, Java, Python, Html and CSS",
  "Area of Interest":"Full stack development",
  "Project":"Prediction of house pricing using SMLT"
  }
console.log("1.Question: Create your resume data in JSON format")
  console.log(Resume)
  
  console.log("2.Question: For the above JSON, iterate over all for loops(for, for...in, for...of, for...Each)")
//for loop
console.log("A.for Loop");
var a=Object.keys(Resume);
var b=Object.values(Resume);
for (var i=0 ; i< a.length ; i++ )
{
 console.log (`${a[i]}: ${b[i]}`);
}
//for..in loop
console.log("B.for...in Loop");
for (const property in Resume) 
{
console.log(`${property}: ${Resume[property]}`);
}
//for...loop
console.log("C. for...of loop")
var res = Object.keys(Resume)
for ( var ele of a){
  console.log(`${ele} : ${Resume[ele]}`)
}
//for...each
console.log("D. for...each loop")
a.forEach((ele)=> console.log(`${ele} : ${Resume[ele]}`))