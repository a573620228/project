

var Reminds = JSON.parse(window.localStorage.getItem("Reminds"));
var activeDate = window.localStorage.getItem("activeDate");
if (Reminds == null) {
    Reminds = new Array();
}
var nb = 0;
getAllItem(Reminds);
if(nb == 0){
  alert("you don't have any active event !");
} else {
  alert("you have " +nb + " active event !");
}
function getAllItem(Reminds) {

    var ii;
    var divList = document.getElementById('listReminds');
    for (ii = 0; ii < Reminds.length; ii++) {
      if(Reminds[ii].drugDate == activeDate) {
        nb ++ ;
        var divE = "<div class='card_main' id='item"+ii+"'><div class='post_header'><img class='card_image' src='img/calendar.png' />"+
                  "<p class='txt_user'>Event "+(ii+1)+"</p>"+
                  "<p class='txt_user_description'>Event: "+Reminds[ii].drugType+"</p>"+
                  "<p onclick='delItem("+Reminds[ii].id+","+ii+")' class='txt_user_description1'><img width='5%' height='5%' src='img/delete.png'><b> Delete Events</b></p> </div>"+
                  "<div class='card_content'>"+
                  "<h1 class='txt_title'>Time: "+Reminds[ii].drugDate + ", " + Reminds[ii].drugTime+"</h1>"+
                  "</div><div class='box'></div></div>" ;

        document.getElementById("listReminds").innerHTML  += divE ;
      }

    }
}

function delItem(item,ii){
    console.log(item)
    for(var x = 0 ; x<Reminds.length;x++)   {
        if(Reminds[x].id == item  ){
            Reminds.splice(x,1);
            console.log("index " + x)
        }
    }
    window.localStorage.setItem("Reminds", JSON.stringify(Reminds));
    document.getElementById("item"+ii).remove();
}

function whichChild(elem) {
    var i = 0;
    while ((elem = elem.previousSibling) != null) ++i;
    return i;
}
