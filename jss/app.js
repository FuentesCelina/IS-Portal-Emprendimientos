function crearNuevoEmp(emprendimientos) {
    var container = document.querySelector('.container_emp'); // Selecciona el contenedor que contiene los divs a borrar
    var divs = container.querySelectorAll('div'); // Selecciona todos los divs dentro del contenedor

    // Itera sobre cada div y los elimina
    divs.forEach(function (div) {
        div.remove();
    });
    var id;
    for (let i = 0; i < emprendimientos.length; i++) {
        var nuevoDiv = document.createElement('div');
        var nuevoBoton = document.createElement('button');
        if (emprendimientos[i].destacado) {
            nuevoDiv.className = "emprendimiento_dest";
            nuevoBoton.className = "button";
            nuevoBoton.id = "mostrar_dest";
            nuevoBoton.textContent = "Ver detalle";
        }
        else {
            nuevoDiv.className = "emprendimiento";
            nuevoBoton.className = "button";
            nuevoBoton.id = "mostrar";
            nuevoBoton.textContent = "Ver detalle";
        }
        var infoDiv = document.createElement('div');
        infoDiv.className = "info";

        var nuevoH2 = document.createElement('h2');
        nuevoH2.textContent = emprendimientos[i].nombre;
        nuevoH2.id = "nombre";

        var nuevoimg = document.createElement('img');
        nuevoimg.src = emprendimientos[i].imagen;
        nuevoimg.id = "imagen";

        infoDiv.appendChild(nuevoH2);
        infoDiv.appendChild(nuevoimg);

        /*Evento del boton para ver mapa */
        nuevoBoton.addEventListener('click', function () {
            localStorage.removeItem('latitud');//limpio el localStorage para no obtener datos viejos
            localStorage.removeItem('longitud');
            
            localStorage.setItem("latitud", emprendimientos[i].coordenada_X);
            localStorage.setItem("longitud", emprendimientos[i].coordenada_Y);
            localStorage.setItem("id_emp",emprendimientos[i].id_propietario);
            window.location.href = "leaflet.html";
        });

        nuevoDiv.appendChild(infoDiv);
        nuevoDiv.appendChild(nuevoBoton);
        container.appendChild(nuevoDiv);
        id=emprendimientos[i].id_propietario;
        
    }
    localStorage.removeItem('ultimoId');//limpio el localStorage para no obtener datos viejos
    localStorage.setItem("ultimoId",id);
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
function darUltimoId() {
    return ultimoId;
}
