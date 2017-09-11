var buttonSaveRemind = document.getElementById("saveRemind");
buttonSaveRemind.addEventListener('click', function() {
    newElement();
});

var eventPic ;
    $("#imgEvent").click(function(){
                window.imagePicker.getPictures(
          function(results) {
            eventPic =  results[0];
            alert("You have selected : " + eventPic)
          /*  for (var i = 0; i < results.length; i++) {
              console.log('Image URI: ' + results[i]);
              eventPic
            }*/
          }, function (error) {
            console.log('Error: ' + error);
          }
          );
    });

var drugType = document.getElementById("drugType");
var drugDate = document.getElementById("drugDate");
var drugTime = document.getElementById("drugTime");
var eventPlace = document.getElementById("eventPlace");
addCurrentTime();


var Reminds = JSON.parse(window.localStorage.getItem("Reminds"));

if (Reminds == null) {
    Reminds = new Array();
    console.log("hhh")
}
var idItem = Reminds.length ;

eventPlace.addEventListener("blur", function( event ) {
    if (eventPlace.value.length > 0) {
        eventPlace.className += " used";
    }

}, true);

drugType.addEventListener("blur", function( event ) {
    if (drugType.value.length > 0) {
        drugType.className += " used";
    }

}, true);

drugDate.addEventListener("blur", function( event ) {
  if (drugDate.value.length > 0) {
        drugDate.className += " used";
    }
}, true);


drugTime.addEventListener("blur", function( event ) {
  if (drugTime.value.length > 0) {
        drugTime.className += " used";
    }
}, true);

function addCurrentTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    drugTime.className += " used";
    drugDate.className += " used";
    drugDate.value = today;
    drugTime.value = "00:00";
}

function newElement() {
    if (drugType.value === '' || eventPlace.value === '' || drugDate.value === '' || drugTime.value === '' || eventPic === '') {
        alert("You must fill all the blanks !");
    } else {

        var item = {
            id: idItem ,
            location : eventPlace.value,
            drugType: drugType.value,
            drugDate: drugDate.value,
            drugTime: drugTime.value,
            pic : eventPic
        };

        Reminds.push(item);
        window.localStorage.setItem("Reminds", JSON.stringify(Reminds));
        var d = new Date(drugDate.value + ", " + drugTime.value);
        saveToServer(item);
    }

}

function saveToServer(item){
  item["data"] =  item.drugType ;
  console.log(item);
  window.plugins.spinnerDialog.show(null, "Saving Event to IntroToApps & LocalStorage ...",true);
  $.ajax({
      url: "http://introtoapps.com/datastore.php?action=save&appid=12345678&objectid=abc",
      method: "POST",
      data: item,
      timeout: 3000 ,
    success: function(msg){
        window.plugins.spinnerDialog.hide();
        alert("Events Saved to IntroToApps & LocalStorage !\nMessage From Server : " + msg);
        window.location.href='index.html' ;
    },
    error: function(err){
      window.plugins.spinnerDialog.hide();
      alert("Error Saving Event ! " + err);
    }
    })
}
