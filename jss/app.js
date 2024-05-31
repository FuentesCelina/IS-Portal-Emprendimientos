function crearNuevoEmp(emprendimientos) {
    var container = document.querySelector('.container_emp'); // Selecciona el contenedor que contiene los divs a borrar
    var divs = container.querySelectorAll('div'); // Selecciona todos los divs dentro del contenedor

    // Itera sobre cada div y los elimina
    divs.forEach(function(div) {
        div.remove();
    });
    for (var i = 0; i < emprendimientos.length; i++) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.className = "emprendimiento"

        var infoDiv = document.createElement('div');
        infoDiv.className = "info";

        var nuevoH2 = document.createElement('h2');
        nuevoH2.textContent = emprendimientos[i].nombre;
        nuevoH2.id = "nombre";
       
        var nuevoH31 = document.createElement('h3');
        nuevoH31.textContent = emprendimientos[i].descripcion;
        nuevoH31.id = "descripcion";
        
        var nuevoH32 = document.createElement('h3');
        nuevoH32.textContent = emprendimientos[i].contacto;
        nuevoH32.id = "contacto";
        
        var nuevoH33 = document.createElement('h3');
        nuevoH33.textContent = emprendimientos[i].red_social;
        nuevoH33.id = "red_social";

        var nuevoimg = document.createElement('img');
        nuevoimg.src = emprendimientos[i].imagen;
        nuevoimg.id = "imagen";


        infoDiv.appendChild(nuevoH2);
        infoDiv.appendChild(nuevoimg);
        infoDiv.appendChild(nuevoH31);
        infoDiv.appendChild(nuevoH32);
        infoDiv.appendChild(nuevoH33);
        
        var nuevoBoton = document.createElement('button');
        nuevoBoton.className = "button";
        nuevoBoton.id = "mostrar";
        nuevoBoton.textContent="Ver detalle";

        /*Evento del boton para ver mapa */
        nuevoBoton.addEventListener('click', function () {
            window.location.href = "leaflet.html";
        });

        nuevoDiv.appendChild(infoDiv);
        nuevoDiv.appendChild(nuevoBoton);
        container.appendChild(nuevoDiv);
    }
}

function cargarJSONCol() {/*No sé si está bien cargarlos,pero se necesita el ultimo id */
    fetch(url_colaboradores)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let colaboradores = [];
            data.forEach((item) => {
                let obj = {
                    id: item.id,
                    nombre: item.nombre,
                    telefono: item.telefono,
                    contacto: item.contacto,
                    direccion: item.direccion
                }
                colaboradores.push(obj);
            })
            ultimoId = colaboradores.id;
        })


}
function darUltimoId(){
    return ultimoId;
}
