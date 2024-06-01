var map = L.map('map').setView([-34.52172, -58.70111], 14);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);
function centrarMapa(lat, lon) {
    console.log(lat, "|", lon)
    map.panTo(L.latLng(lat, lon));
}

function setMarker(lat, lon) {
    L.marker([lat, lon], { draggable: false }).addTo(map);
}
var latitud = localStorage.getItem("latitud");
var longitud = localStorage.getItem("longitud");
setMarker(latitud, longitud);
centrarMapa(latitud, longitud);
enviarInfo();
function enviarInfo() {
    fetch('https://raw.githubusercontent.com/FuentesCelina/IS-Portal-Emprendimientos/main/json/emprendimientos.json')
        .then(response => response.json())
        .then(data => {
            // Llamar a la función para mostrar los emprendimientos en pantalla
            mostrarInfoEmprendimiento(data);
        })
        .catch(error => console.error('Error al cargar los emprendimientos:', error));
}

function mostrarInfoEmprendimiento(emprendimientos) {
    const cont_emp = document.querySelector('.emprendimiento');
    var elems = cont_emp.querySelectorAll('*');
    elems.forEach(function (elems) {
        elems.remove();
    });
    var idEmp = localStorage.getItem("id_emp");
    for (let i = 0; i < emprendimientos.length; i++) {
        if (emprendimientos[i].id_propietario == idEmp) {
            var nuevoH2 = document.createElement('h2');
            nuevoH2.textContent = emprendimientos[i].nombre;
            nuevoH2.id = "nombre";

            var nuevoimg = document.createElement('img');
            nuevoimg.src = emprendimientos[i].imagen;
            nuevoimg.id = "imagen";

            var descripcion = document.createElement('label');
            descripcion.textContent= emprendimientos[i].descripcion+'\n';
            descripcion.id="descripcion";
            descripcion.className="label";
            
            var contacto = document.createElement('label');
            contacto.textContent = "Contacto: "+emprendimientos[i].contacto+'\n';
            contacto.id="contacto";
            contacto.className="label";

            var red_social = document.createElement('label');
            red_social.textContent = "Red social: "+emprendimientos[i].red_social;
            red_social.id="red_social";
            red_social.className="label";

            var forma_pago = document.createElement('label');
            forma_pago.textContent = "Formas de pago: "+emprendimientos[i].forma_de_pago;
            forma_pago.id="forma_pago";
            forma_pago.className="label";

            var zona_de_referencia = document.createElement('label');
            zona_de_referencia.textContent = "Zona de referencia: "+emprendimientos[i].zona_de_referencia;
            zona_de_referencia.id="zona_referencia";
            zona_de_referencia.className="label";

            var horario = document.createElement('label');
            horario.textContent = "Horario: "+emprendimientos[i].Horario;
            horario.id="horario";
            horario.className="label";
            
            cont_emp.appendChild(nuevoH2);
            cont_emp.appendChild(nuevoimg);
            cont_emp.appendChild(descripcion);
            cont_emp.appendChild(contacto);
            cont_emp.appendChild(red_social);
            cont_emp.appendChild(forma_pago);
            cont_emp.appendChild(zona_de_referencia);
            cont_emp.appendChild(horario);

            break;
        }
    }
}

