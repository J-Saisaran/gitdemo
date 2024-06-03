var res = fetch("https://restcountries.com/v3.1/all")
res.then((data) => {
  return data.json()

}).then((data1) => foo(data1)).catch((error) => console.log(error));



var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(data1) {

  for (var i = 0; i < data1.length; i++) {
    var x = data1[i];
    var col = document.createElement("div");
    col.className = "col-lg-4";
    col.innerHTML = `<div class="card" style="width: 18rem;">
    <h5 class="card-title">${x.name.common}</h5>
    
    <img src="${x.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
    

<p>Capital: ${x.capital}</p>
<p>Region: ${x.region}</p>
<p>Country-Code: ${x.cca3}</p>
      <button class="btn btn-primary">Wheather</button>
    </div>
  </div>`; 
  
    row.append(col);
  }
  container.append(row);
  document.body.append(container);
  console.log(data1)

}
