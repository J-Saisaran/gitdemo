document.querySelector("button").addEventListener("click",result)

async function result(){
    try {
        var ask = document.getElementById("Shows").value; 
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`);
        var res = await data.json();
        console.log(res);
        card_info
        (res[0].show);
    } catch (error) {
        console.log(error);
    }
}

function card_info(info){
    
    var col = document.createElement("div");
    col.className = "col-lg-12 col-md-8 col-sm-6 col d-flex info justify-content-center";
    col.innerHTML= `<div class="card" style="width: 18rem;">
    <img src="${info.image.original}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-teinfot">
    <h5>Show name: ${info.name}</h5>
    Genres: ${info.genres.join(",")}<br>
    Premiered Date: ${info.premiered}<br>
    Rating: ${info.rating.average}<br>
    Show running days: ${info.schedule.days.join(",")}<br>
    Official site: ${info.officialSite}<br><br>
    ${info.network.name}<br><br>
    ${info.network.country.name}<br><br>
    ${info.summary}
    </p>
    </div>
  </div>`
  document.body.append(col);



}