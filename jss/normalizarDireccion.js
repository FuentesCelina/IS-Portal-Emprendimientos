
function normalizarDireccion() {
    const direccion = document.getElementById('direccion').value.trim();
    const url = `https://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(direccion)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            mostrarResultados(data, 'direccion');
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function mostrarResultados(data, campo) {
    const resultadosDiv = document.getElementById(`resultados${campo.charAt(0).toUpperCase() + campo.slice(1)}`);
    resultadosDiv.innerHTML = '';

    if (data && data.direccionesNormalizadas && data.direccionesNormalizadas.length > 0) {
        const listaDirecciones = document.createElement('ul');
        data.direccionesNormalizadas.forEach(direccion => {
            const elementoLista = document.createElement('li');
            elementoLista.textContent = `${direccion.direccion}`;

            // coordenadas
            if (direccion.coordenadas && direccion.coordenadas.x && direccion.coordenadas.y) {
                elementoLista.textContent += ` - Coordenadas: X ${direccion.coordenadas.x}, Y ${direccion.coordenadas.y}`;
            }
            elementoLista.style.cursor = 'pointer';
            elementoLista.onclick = () => {
                document.getElementById(campo).value = direccion.direccion;
                listaDirecciones.style.display = 'none';
            };
            listaDirecciones.appendChild(elementoLista);
        });
        resultadosDiv.appendChild(listaDirecciones);
    } else {
        resultadosDiv.textContent = 'No se encontraron direcciones similares.';
    }
}




function normalizarDireccionComercio() {
    const direccionComercio = document.getElementById('direccion_comercio').value.trim();
    const url = `https://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(direccionComercio)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarResultadosComercio(data, 'direccion_comercio');
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function mostrarResultadosComercio(data, campo) {
    const resultadosDiv = document.getElementById(`resultados${campo.charAt(0).toUpperCase() + campo.slice(1)}`);
    resultadosDiv.innerHTML = '';

    if (data && data.direccionesNormalizadas && data.direccionesNormalizadas.length > 0) {
        const listaDirecciones = document.createElement('ul');
        data.direccionesNormalizadas.forEach(direccion => {
            const elementoLista = document.createElement('li');
            elementoLista.textContent = `${direccion.direccion}`;

            // Agregar coordenadas si están disponibles
            if (direccion.coordenadas && direccion.coordenadas.x && direccion.coordenadas.y) {
                elementoLista.textContent += ` - Coordenadas: X ${direccion.coordenadas.x}, Y ${direccion.coordenadas.y}`;
            }

            elementoLista.style.cursor = 'pointer';
            elementoLista.onclick = () => {
                document.getElementById(campo).value = direccion.direccion;
                listaDirecciones.style.display = 'none';
            };
            listaDirecciones.appendChild(elementoLista);
        });
        resultadosDiv.appendChild(listaDirecciones);
    } else {
        resultadosDiv.textContent = 'No se encontraron direcciones similares.';
    }
}
function eliminarDirecciones(){
    const resultadosDiv = document.getElementById("resultadosDireccion");
    resultadosDiv.innerHTML = '';
}