
const url = 'json/emprendimientos.json';
const url_colaboradores = 'json/colaboradores.json';
var ultimoId = 0;
document.addEventListener('DOMContentLoaded', function () {
    filtrarJSONEmp("");//se muestran todos
    var buscar = document.getElementById("searchField");
    searchField.addEventListener('input', function (event) {
        var emp_abuscar = event.target.value;
        filtrarJSONEmp(emp_abuscar.toLowerCase());
    });
});

function filtrarJSONEmp(filtrado) {
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let emprendimientos = [];
            data.forEach((item) => {
                if (item.rubro.toLowerCase() === filtrado || filtrado==="") {
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
}