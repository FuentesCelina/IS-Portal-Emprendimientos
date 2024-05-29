console.log("asdasdasdas");
const saveButton = document.getElementById('formulario');
saveButton.addEventListener('submit',function(event){
    guardarDatos(event);
});

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
    /* Datos del emprendimiento*/
    var nombre_emprendimiento = document.getElementById('nombre_emprendimiento').value;
    var descripcion = document.getElementById('descripcion').value;
    var contacto_emprendimiento = document.getElementById('contacto_emprendimiento').value;
    var red_social = document.getElementById('red_social').value;
    var forma_de_pago = document.getElementById('forma_de_pago').value;
    var zona_referencia = document.getElementById('zonaReferencia').value;
    var rubro = document.getElementById('rubro').value;

    /*Guardando los datos en los json  TODAVIA NO TERMINADO */
    var nuevo_id_colaborador = obtenerNuevoId();
    var nuevo_colaborador = {
        id:nuevo_id_colaborador,
        nombre: nombre_colaborador,
        telefono:telefono,
        contacto:contacto_colaborador,
        direccion:direccion
    };
    var nuevo_emprendimiento = {
        id_propietario: 2,
        nombre:nombre_emprendimiento,
        descripcion:descripcion,
        contacto:contacto_emprendimiento,
        red_social:red_social,
        forma_de_pago:forma_de_pago,
        zona_de_referencia:zona_referencia,
        rubro:rubro
    };
}

function obtenerNuevoId(){
    return darUltimoId;
}
