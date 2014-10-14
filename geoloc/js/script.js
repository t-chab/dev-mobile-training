(function () {
    'use strict';

    function getPosition() {
        navigator.geolocation.getCurrentPosition(showMap, onError);
    }

    function showMap(pPosition) {
        console.log(pPosition);
        var location = new google.maps.LatLng(pPosition.coords.latitude, pPosition.coords.longitude);
        var mapOptions = {
            zoom: 20,
            center: location,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        new google.maps.Marker({
            position: location,
            map: map
        });
    }

    function onError(pErr) {
        console.log(pErr);
    }

    google.maps.event.addDomListener(window, 'load', getPosition);

}());
