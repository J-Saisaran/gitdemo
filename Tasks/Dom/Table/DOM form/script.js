function label_create(tagname, attrname, attrvalue, content) {
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname, attrvalue);
    label_ele.innerHTML = content;
    return label_ele;
}
// <label for="email">Email</label> 

var email = label_create("label", "for", "email", "Email");
var firstname = label_create("label", "for", "firstname", "Firstname");
var Middlename = label_create("label", "for", "middlename", "Middlename");
var lastname = label_create("label", "for", "lastname", "Lastname");
var loc = label_create("label", "for", "location", "Location");

function break_create() {
    var break_create = document.createElement("br");
    return break_create;
}
var a = break_create();
var b = break_create();
var c = break_create();
var d = break_create();
var e = break_create();
var f = break_create();
var g = break_create();
var h = break_create();
var i = break_create();
var j = break_create();
var k = break_create();
var l = break_create();
var m = break_create();
var n = break_create();
var o = break_create();
var p = break_create();



function input_create(inputtag, attrname, attrval, attrname1, attrval1) {
    var input_ele = document.createElement(inputtag);
    input_ele.setAttribute(attrname, attrval);
    input_ele.setAttribute(attrname1, attrval1);
    return input_ele;
}
// <input type="email" id="email">

var emailinput = input_create("input", "type", "email", "id", "email")
var firstnameinput = input_create("input", "type", "text", "id", "firstname")
var Middlenameinput = input_create("input", "type", "text", "id", "middlename")
var lastnameinput = input_create("input", "type", "text", "id", "lastname")
var locinput = input_create("input", "type", "text", "id", "location")

function but_create(inputtag, attrname, attrval, attrname1, attrval1, content) {
    var but_ele = document.createElement(inputtag);
    but_ele.setAttribute(attrname, attrval);
    but_ele.setAttribute(attrname1, attrval1);
    but_ele.innerHTML = content;
    return but_ele;
}
var button = but_create("button", "type", "button", "onclick", "values()", "Submit")

function values() {
    var firstprint = document.getElementById("firstname").value;
    console.log(firstprint);
    let fdata = document.createElement("div");
    fdata.innerHTML = `Firstname:${firstprint}`;
    document.body.append(fdata);

    var middleprint = document.getElementById("middlename").value;
    console.log(middleprint);
    let mdata = document.createElement("div");
    mdata.innerHTML = `Middlename:${middleprint}`;
    document.body.append(mdata);

    var lastprint = document.getElementById("lastname").value;
    console.log(lastprint);
    let ldata = document.createElement("div");
    ldata.innerHTML = `Lastname:${lastprint}`;
    document.body.append(ldata);
    var emailprint = document.getElementById("email").value;
    console.log(emailprint);
    let edata = document.createElement("div");
    edata.innerHTML = `Email:${emailprint}`;
    document.body.append(edata);
    var locprint = document.getElementById("location").value;
    console.log(locprint);
    let lodata = document.createElement("div");
    lodata.innerHTML = `Location:${locprint}`;
    document.body.append(lodata);
}
// <label for="email">Email</label>
// label_create("label", "for", "email", "Email");

document.body.append(firstname);
document.body.append(a);
document.body.append(firstnameinput);
document.body.append(b)
document.body.append(Middlename)
document.body.append(c)
document.body.append(Middlenameinput)
document.body.append(d)
document.body.append(lastname)
document.body.append(e)
document.body.append(lastnameinput)
document.body.append(f)
document.body.append(email)
document.body.append(g)
document.body.append(emailinput)
document.body.append(h)
document.body.append(loc)
document.body.append(i)
document.body.append(locinput)
document.body.append(j)
document.body.append(button)
document.body.append(k)