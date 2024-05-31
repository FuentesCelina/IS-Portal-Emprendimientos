var map = L.map('map').setView([-34.52172, -58.70111], 14);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
 maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);

setMarker(-34.51, -58.59);
centrarMapa(-34.5222, -58.5555);

function centrarMapa(lat, lon) {
    map.panTo(L.LatLng(lat, lon));
}

function setMarker(lat, lon) {
    L.marker([lat, lon], {draggable: false}).addTo(map);
}
