const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");
function logique(){
    setTimeout("logique()",1000);
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    var x = (hour - 3)*30;
    var y = (min - 15)*30/5 ;
    var z = sec*6;
    h.style.rotate=`${x+"deg"}`;
    m.style.rotate=`${y+"deg"}`;
    s.style.rotate=`${z+"deg"}`;
    console.log(sec)
}
logique();
