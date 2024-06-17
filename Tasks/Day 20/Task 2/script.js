
document.querySelector("button").addEventListener("click",result)
async function result(){
    try {
        var ask = document.getElementById("Shows").value; 
        var data = await fetch(`https://www.cheapshark.com/api/1.0/games?id=${ask}`);
        var res = await data.json();
        console.log(res);
        card_info(res);
    } catch (error) {
        console.log(error);
    }
}

function card_info(collect){
    var col = document.createElement("div");
    col.className = "col-lg-12 col-md-8 col-sm-6 col d-flex info justify-content-center";
    col.innerHTML= `
    <div class="card" style="width: 18rem;">
    <img src="${collect.info.thumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-teinfot">
    <h5>Game name:${collect.info.title} </h5>
    Price: ${collect.cheapestPriceEver.price} <br>
    Store ID :${collect.deals[0].storeID} <br>
    </div>
  </div> `
  document.body.append(col);
}