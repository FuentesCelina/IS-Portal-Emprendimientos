document.addEventListener("DOMContentLoaded", function() {
    var comercioBotton = document.getElementById("comercioBotton");
    var cancelar_comercio = document.getElementById("cancel_comercio");
    var datosComercio = document.getElementById("datosComercio");
    comercioBotton.addEventListener("click", function(event) {
        event.preventDefault();
        datosComercio.classList.add("visible")
        cancelar_comercio.style.display = 'block';
        comercioBotton.style.display = "none";
    });
    cancelar_comercio.addEventListener("click", function(event) {
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
});