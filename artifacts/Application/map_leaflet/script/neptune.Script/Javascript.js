var map;
setTimeout(function(){
    var mapBox = mapContainer.getDomRef();
    map = L.map(mapBox).setView([59.9139, 10.7522], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.opestreetmap.org/copyright">OpenStreetMap</a>'

    }).addTo(map);
    L.marker([59.9139, 10.7522]).addTo(map);
}, 500)