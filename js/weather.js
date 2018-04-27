"use strict";
(function () {
// var start = {
//     lat: -18.717513,
//     lng: 34.6911
// };

    // <!--Starting API request for API access specifying where the data will be pulled from and how much data we want -->
var request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
    lat: -18.717513,
    lon: 34.6911,
    units: "imperial",
    cnt: 4
});


request.fail(function (current, status, error) {
    console.log(status);
    console.log(error);
});


console.log(request);
        //Requesting data and calling it back with a response parameter
request.done(function (response) {
    //Since we are calling data out of the same array we can create a loop to put the machine to work
 main(response);
 console.log(response);

});

function main(response) {
    response.list.forEach(function (data, i) {
        console.log(data);
        switch (i) {
            case 0 :
                $("#cityname").text(response.city.name);
                $(".card-group").html("<strong class='card-body text-center' id='box0'><h2>Today</h2><br><h4>" +
                    data.temp.min + "\xB0" + " / " +
                    data.temp.max + "\xB0" + "</h4><br><p class='m-0'><strong>" +
                    data.weather[0].main + ": </strong>" +
                    data.weather[0].description + "</p>" + "<p class='m-0'><strong>Humidity: </strong>" +
                    data.humidity + "</p><p class='m-0'><strong>Speed: </strong>" +
                    data.speed + "</p><p class='m-0'><strong>Pressure: </strong>" +
                    data.pressure + "</p></div>"
                );
                break;
            case 1 :
                $("#cityname").text(response.city.name);
                $(".card-group").append("<div class='card-body text-center' id='box1'><h2>Tomorrow</h2><br><h4>" +
                    data.temp.min + "\xB0" + " / " +
                    data.temp.max + "\xB0" + "</h4><br><p class='m-0'><strong>" +
                    data.weather[0].main + ": </strong>" +
                    data.weather[0].description + "</p>" + "<p class='m-0'><strong>Humidity: </strong>" +
                    data.humidity + "</p><p class='m-0'><strong>Speed: </strong>" +
                    data.speed + "</p><p class='m-0'><strong>Pressure: </strong>" +
                    data.pressure + "<br>"
                );
                break;
            case 2 :
                $("#cityname").text(response.city.name);
                $(".card-group").append("<div class='card-body text-center' id='box2'><h2>2-day forecast</h2><br><h4>" +
                    data.temp.min + "\xB0" + " / " +
                    data.temp.max + "\xB0" + "</h4><br><p class='m-0'><strong>" +
                    data.weather[0].main + ": </strong>" +
                    data.weather[0].description + "</p>" + "<p class='m-0'><strong>Humidity: </strong>" +
                    data.humidity + "</p><p class='m-0'><strong>Speed: </strong>" +
                    data.speed + "</p><p class='m-0'><strong>Pressure: </strong>" +
                    data.pressure
                );
                break;
            case 3:
                $("#cityname").text(response.city.name);
                $(".card-group").append("<div class='card-body text-center' id='box3'><h2>3-day forecast</h2><br><h4>" +
                    data.temp.min + "\xB0" + " / " +
                    data.temp.max + "\xB0" + "</h4><br><p class='m-0'><strong>" +
                    data.weather[0].main + ": </strong>" +
                    data.weather[0].description + "</p>" + "<p class='m-0'><strong>Humidity: </strong>" +
                    data.humidity + "</p><p class='m-0'><strong>Speed: </strong>" +
                    data.speed + "</p><p class='m-0'><strong>Pressure: </strong>" +
                    data.pressure
                );
                break;


        }

    });
}

    var address = {

        "location": {
            "lat": -18.717513,
            "lng": 34.6911
        }
    };

    var mapOptions = {
        //Zoom level from 1 - 23
        zoom: 5,
        // //setting the location in the map
        center: address,
        //Show this map in ROADMAP view
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var geocoder = new google.maps.Geocoder();

function callback(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            animation: google.maps.Animation.DROP,
            draggable: true
        });
        google.maps.event.addListener(marker, 'dragend', function () {
            var c0 = $('#box0');
            var c1 = $('#box1');
            var c2 = $('#box2');
            var c3 = $('#box3');
            c0.empty();
            c1.empty();
            c2.empty();
            c3.empty();
            var latitude = marker.getPosition().lat();
            var longitude = marker.getPosition().lng();
            request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
                APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
                lat: latitude,
                lon: longitude,
                units: "imperial",
                cnt: 4
            });
            request.done(function (response) {
                console.log(response);
                main(response);

        })});
    } else {
        alert("Geocoding was not successful - STATUS: " + status);
    }


    function callback(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            console.log(results);
            map.setCenter(results[0].geometry.location);
            var inputLat = results[0].geometry.location.lat;
            var inputLng = results[0].geometry.location.lng;
            getForecast(inputLat, inputLng);
            function moveMarker (map, marker) {
                marker.setPosition(results[0].geometry.location);
                map.panTo(results[0].geometry.location);
            }

            moveMarker(map, marker);

        } else {
            console.log("Geocoding was not successful - STATUS: " + status);
        }
    }


    $('#citysearch').click(function(){
        var city = $('#city');
        address = {
            address: city.val()
        };
        var c0 = $('#box0');
        var c1 = $('#box1');
        var c2 = $('#box2');
        var c3 = $('#box3');
        c0.empty();
        c1.empty();
        c2.empty();
        c3.empty();
        $('#cityname').empty();
        request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
            q: city.val(),
            units: "imperial",
            cnt: 4
        });

        request.done(function (response) {
            main(response);
        });
        geocoder.geocode(address, callback);

    });
    // function callback(results, status) {
    //     if (status === google.maps.GeocoderStatus.OK) {
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             position: results[0].geometry.location,
    //             map: map,
    //             animation: google.maps.Animation.DROP,
    //             draggable: true
    //         });
    //         google.maps.event.addListener(marker, 'dragend', function () {
    //             var c0 = $('#box0');
    //             var c1 = $('#box1');
    //             var c2 = $('#box2');
    //             var c3 = $('#box3');
    //             c0.empty();
    //             c1.empty();
    //             c2.empty();
    //             c3.empty();
    //             var latitude = marker.getPosition().lat();
    //             var longitude = marker.getPosition().lng();
    //             request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    //                 APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
    //                 lat: latitude,
    //                 lon: longitude,
    //                 units: "imperial",
    //                 cnt: 4
    //             });
    //             request.done(function (response) {
    //                 console.log(response);
    //                 main(response);
    //
    //             })});



}
geocoder.geocode(address, callback);


    // window.onload = function (ev) {
    //     alert("page is loaded!")
    // }

    //checking that our function is calling for any Errors from API we are requesting data from
    // request.fail(function (request, status, error) {
    //     console.log(status);
    //     console.log(error);
    // });
    // //



})();
