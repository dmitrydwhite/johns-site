var lhreMapHandler = function () {
  // Scope vars
  var mapHasMarker = false;
  var map = new google.maps.Map(document.getElementById('mark-this-map'),
  {
    center: { lat: 43.8041, lng: -120.5542 },
    minZoom: 7,
    zoom: 7,
  });
  var currentMarker; // Placeholder for the user's placed marker.

  // Scope private methods
  var handleClick = function (evt) {
    if (currentMarker) currentMarker.setMap(null);

    currentMarker = new google.maps.Marker({
      map: map,
      draggable: true,
      position: evt.latLng
    });
  }

  google.maps.event.addListener(map, 'click', handleClick);
}
