function iniciar() {
    var mapOptionsSl = {
            center: new google.maps.LatLng(-12.0623857,-77.0100127),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    var mapa = new google.maps.Map(document.getElementById("mapa"),mapOptionsSl);

    var ubirmsl = new google.maps.LatLng(-12.0623857,-77.0100127);
    var marca1 = new google.maps.Marker({
            position: ubirmsl,
            map: mapa,
            title: 'Inversiones Cordero Max E.I.R.L.'
        });

    function MostrarInfoSl() {
        var infowindow = new google.maps.InfoWindow({
            content: 'Inversiones Cordero Max E.I.R.L.'
        });

        infowindow.open(mapa,marca1);
    }
    google.maps.event.addListener(marca1, 'click', MostrarInfoSl);

    var mapOptionsDa = {
            center: new google.maps.LatLng(-12.0743065,-76.9958258),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    var mapa2 = new google.maps.Map(document.getElementById("mapa2"),mapOptionsDa);

    var ubirmda = new google.maps.LatLng(-12.0743065,-76.9958258);
    var marca2 = new google.maps.Marker({
            position: ubirmda,
            map: mapa2,
            title: 'Inversiones Cordero Max E.I.R.L.'
        });

    function MostrarInfoDa() {
        var infowindow = new google.maps.InfoWindow({
            content: 'Inversiones Cordero Max E.I.R.L.'
        });

        infowindow.open(mapa2,marca2);
    }
    google.maps.event.addListener(marca2, 'click', MostrarInfoDa);
}
