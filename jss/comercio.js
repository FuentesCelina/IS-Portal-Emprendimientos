document.addEventListener("DOMContentLoaded", function () {
    var comercioBotton = document.getElementById("comercioBotton");
    var cancelar_comercio = document.getElementById("cancel_comercio");
    var datosComercio = document.getElementById("datosComercio");
    comercioBotton.addEventListener("click", function (event) {
        event.preventDefault();
        datosComercio.classList.add("visible")
        cancelar_comercio.style.display = 'block';
        comercioBotton.style.display = "none";
    });
    cancelar_comercio.addEventListener("click", function (event) {
        event.preventDefault();
        eliminarDirecciones();
        comercioBotton.style.display = "block";
        cancelar_comercio.style.display = 'none';
        datosComercio.classList.remove("visible");
    });

    const cancelBoton = document.getElementById('cancelarRegistro');
    cancelBoton.addEventListener('click', function () {
        window.location.href = "index.html"
    });

    const guardarButton = document.getElementById('formulario');
    guardarButton.addEventListener('submit', function (event) {
        event.preventDefault();
       guardarDatos();
        const cancelBoton = document.getElementById('cancelarRegistro');
        cancelBoton.textContent="Volver a inicio";
        var comercioBotton = document.getElementById("comercioBotton");
        comercioBotton.style.display = "none";
    });
});

function guardarDatos() {
    /* Datos del emprendimiento*/
    var nombre_emprendimiento = document.getElementById('nombre_emprendimiento').value;
    var descripcion = document.getElementById('descripcion').value;
    var contacto_emprendimiento = document.getElementById('contacto_emprendimiento').value;
    var red_social = document.getElementById('red_social').value;
    var forma_de_pago = document.getElementById('forma_de_pago').value;
    var zona_referencia = document.getElementById('zonaReferencia').value;
    var imagen = document.getElementById('logoEmp').value;
    var rubro;
    var selectRubro = document.getElementById('categoria');
    selectRubro.addEventListener('change', function () {
        rubro = selectRubro.value;
    });
    var visibilidad;
    var selectVisibilidad = document.getElementById('visibilidad');
    selectVisibilidad.addEventListener('change', function () {
        visibilidad = selectVisibilidad.value;
    });

    var horario = document.getElementById('horario').value;
    var direccion = document.getElementById('direccion').value;

    var nuevo_emprendimiento = {
        id_propietario: obtenerNuevoId(),
        nombre: nombre_emprendimiento,
        descripcion: descripcion,
        contacto: contacto_emprendimiento,
        red_social: red_social,
        forma_de_pago: forma_de_pago,
        zona_de_referencia: zona_referencia,
        rubro: rubro,
        imagen: imagen,
        visibilidad_Direccion: visibilidad,
        coordenada_X: obtenerCoordenada_X(),
        coordenada_Y: obtenerCoordenada_Y(),
        Horario: horario,
        destacado: false//hasta que el dueño realice una donacion se llama a la funcion destacar()
    };

    registrar(nuevo_emprendimiento);
}

function registrar(emprendimiento) {
    //Se muestra un mensaje con los datos gurdados pero:No se guardan los datos...
    var h3 = document.getElementById("mensaje")
    h3.textContent = "Datos guardados correctamente..."
}

function obtenerCoordenada_X(direccion) {
    return 0;//debe retornar la coordenada x de la direccion ingresada
}
function obtenerCoordenada_Y(direccion) {
    return 0;//debe retornar la coordenada y de la direccion ingresada
}

function obtenerNuevoId() {
    var nuevoId = localStorage.getItem("ultimoId");
    return nuevoId;
}

function destacar() {

}