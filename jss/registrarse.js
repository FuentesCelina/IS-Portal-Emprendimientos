const cancelBoton = document.getElementById('cancelarRegistro');
cancelBoton.addEventListener('click', function() {
    window.location.href = "index.html"
});

function guardarDatos(event){
    event.preventDefault();

    /* Datos del colaborador*/
    var nombre_colaborador = document.getElementById('nombre_colaborador').value;
    var telefono = document.getElementById('telefono').value;
    var contacto_colaborador = document.getElementById('contacto_colaborador').value;
    var direccion = document.getElementById('direccion').value;

    var nuevo_id_colaborador = obtenerNuevoId();
    var nuevo_colaborador = {
        id:nuevo_id_colaborador,
        nombre: nombre_colaborador,
        telefono:telefono,
        contacto:contacto_colaborador,
        direccion:direccion
    };
    registrar(nuevo_colaborador);
}

function obtenerNuevoId(){
   var nuevoId=localStorage.getItem("ultimoId");
    return nuevoId;
}

function registrar(colaborador){
    //Funcion para guardar los datos personales del colaborador:No se guardan los datos...
}
