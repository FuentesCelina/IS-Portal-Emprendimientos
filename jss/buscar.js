const emprendimientos = [];
fetch('https://raw.githubusercontent.com/FuentesCelina/IS-Portal-Emprendimientos/main/json/emprendimientos.json')
    .then(response => response.json())
    .then(data => {
        // Llamar a la función para mostrar los productos
        crearNuevoEmp(data);
    })
    .catch(error => console.error('Error al cargar los emprendimientos:', error));
var ultimoId = 0;

document.addEventListener('DOMContentLoaded', function () {
    filtrarJSONEmp("");//se muestran todos
    var buscar = document.getElementById("searchField");
    buscar.addEventListener('input', function (event) {
        var emp_abuscar = event.target.value;
        filtrarJSONEmp(emp_abuscar.toLowerCase());
    });
});


function filtrarJSONEmp(filtrado) {
    fetch('https://raw.githubusercontent.com/FuentesCelina/IS-Portal-Emprendimientos/main/json/emprendimientos.json')
        .then(response => response.json())
        .then(data => {
            // Llamar a la función para mostrar los productos
            const emprendimientos=[];
            data.forEach((item) => {
                if (item.rubro.toLowerCase() === filtrado || filtrado === "") {
                    let obj = {
                        nombre: item.nombre,
                        descripcion: item.descripcion,
                        contacto: item.contacto,
                        red_social: item.red_social,
                        forma_de_pago: item.forma_de_pago,
                        zona_de_referencia: item.zona_de_referencia,
                        rubro: item.rubro,
                        imagen: item.imagen
                    }
                    emprendimientos.push(obj);
                }
            })
            crearNuevoEmp(emprendimientos);
        })
        .catch(error => console.error('Error al cargar los emprendimientos:', error));
}