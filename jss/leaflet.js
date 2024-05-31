var map = L.map('map').setView([-34.52172, -58.70111], 14);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);
function centrarMapa(lat, lon) {
    console.log(lat,"|",lon)
    map.panTo(L.latLng(lat, lon));
}

function setMarker(lat, lon) {
    L.marker([lat, lon], { draggable: false }).addTo(map);
}
var latitud = localStorage.getItem("latitud");
var longitud = localStorage.getItem("longitud");
setMarker(latitud,longitud);
centrarMapa(latitud,longitud);

function mostrarInfoEmprendimiento(id){
    
}

