var buttonSaveRemind = document.getElementById("saveRemind");
buttonSaveRemind.addEventListener('click', function() {
    newElement();
});

var drugType = document.getElementById("drugType");
var drugDate = document.getElementById("drugDate");
var drugTime = document.getElementById("drugTime");

addCurrentTime();


var Reminds = JSON.parse(window.localStorage.getItem("Reminds"));

if (Reminds == null) {
    Reminds = new Array();
    console.log("hhh")
}
var idItem = Reminds.length ;

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
    if (drugType.value === '' || drugDate.value === '' || drugTime.value === '' ) {
        alert("You must fill all the blanks !");
    } else {
        var item = {
            id: idItem ,
            drugType: drugType.value,
            drugDate: drugDate.value,
            drugTime: drugTime.value,
        };
        console.log(item);
        Reminds.push(item);
        window.localStorage.setItem("Reminds", JSON.stringify(Reminds));
        var d = new Date(drugDate.value + ", " + drugTime.value);
        alert("Events Saved !");
        window.location.href='index.html' ;
    }
    
}
