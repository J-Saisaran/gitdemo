var parent_div=document.createElement("div");
parent_div.className="main";


print_number(TextHID);

document.body.append(parent_div);


function print_number(callback){

    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:10";
    },1000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:9";
    },2000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:8";
    },3000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:7";
    },4000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:6";
    },5000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:5";
    },6000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:4";
    },7000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:3";
    },8000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:2";
    },9000);
    setTimeout(()=>{
        parent_div.innerHTML="Countdown starts:1";
    },10000);
    callback("Happy Independence Day")
    

}

function TextHID(data){
    setTimeout(()=>{
        parent_div.innerHTML=data;
    },11000);
}