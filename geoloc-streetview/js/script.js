(function () {
    'use strict';

    function getPosition() {
        navigator.geolocation.getCurrentPosition(streetView, onError);
    }

    function onError(pErr) {
        console.log(pErr);
    }

    function streetView(pPosition) {
        var location = new google.maps.LatLng(pPosition.coords.latitude, pPosition.coords.longitude),
            streetViewMaxDistance = 100,
            mapOptions = {
                zoom: 20,
                center: location,
                mapTypeId: google.maps.MapTypeId.HYBRID
            },
            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions),
            streetViewService = new google.maps.StreetViewService(),
            panorama;
        panorama = map.getStreetView();

        streetViewService.getPanoramaByLocation(location, streetViewMaxDistance, function (streetViewPanoramaData, status) {
            if (status === google.maps.StreetViewStatus.OK) {

                var oldPoint = location, heading;
                location = streetViewPanoramaData.location.latLng;

                heading = google.maps.geometry.spherical.computeHeading(location, oldPoint);

                panorama.setPosition(location);
                panorama.setPov({
                    heading: heading,
                    zoom: 1,
                    pitch: 0
                });
                panorama.setVisible(true);

            } else {
                alert("Sorry! Street View is not available.");
                // no street view available in this range, or some error occurred
            }
        });
    }

    google.maps.event.addDomListener(window, 'load', getPosition);
}());

