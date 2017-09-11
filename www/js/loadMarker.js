

function showMarker(Reminds) {
    var ii;
    for (ii = 0; ii < Reminds.length; ii++) {
      var location = Reminds[ii].location;
      var eventName = Reminds[ii].drugType;
      var drugDate = Reminds[ii].drugDate;
      var request = { 'address': location };
        plugin.google.maps.Geocoder.geocode(request, function(results) {
          if (results.length) {
            var result = results[0];
            var position = result.position;

            map.addMarker({
              'position': position,
              title: "Welecome to \n" +eventName ,
              snippet: "Date : "+  drugDate ,
            }, function(marker) {
              // Show the info window
              marker.showInfoWindow();
              // Catch the click event
              marker.on(plugin.google.maps.event.INFO_CLICK, function() {
              // To do something...
              alert("Welecome to \n" +
                     eventName + " , " + location);
                        });
            });
          } else {
            alert("Not found");
          }
        });
    }
}
