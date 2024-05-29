var map = L.map('map').setView([-34.52172, -58.70111], 14);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
 maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-34.52172, -58.70111], {draggable: false}).addTo(map);
L.marker([-34.52, -58.70], {draggable: false}).addTo(map);
L.marker([-34.522, -58.694], {draggable: false}).addTo(map);