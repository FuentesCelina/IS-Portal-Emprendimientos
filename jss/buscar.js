const emprendimientos = [];
fetch('https://raw.githubusercontent.com/FuentesCelina/IS-Portal-Emprendimientos/main/json/emprendimientos.json')
    .then(response => response.json())
    .then(data => {
        // Llamar a la función para mostrar los emprendimientos en pantalla
        ordenarEmprendimientos(data);
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
            // Llamar a la función para mostrar los emprendimientos en pantalla
            const emprendimientos=[];
            data.forEach((item) => {
                if (filtrado === "" || item.nombre.toLowerCase().includes(filtrado) || item.rubro.toLowerCase() === filtrado || item.zona_de_referencia.toLowerCase() === filtrado ) {
                    emprendimientos.push(item);
                }
            })
            ordenarEmprendimientos(emprendimientos);
        })
        .catch(error => console.error('Error al cargar los emprendimientos:', error));
}

function ordenarEmprendimientos(data){ //ordena los emprendimientos para que los destacados esten al inicio
    const emprendimientos = [];
    data.forEach(element => {
        emprendimientos.push(element);
    });
    emprendimientos.sort((emp1,emp2) =>{
        if(emp1.destacado && !emp2.destacado){
            return -1;
        }
        else if(!emp1.destacado && emp2.destacado){
            return 1;
        }
        else{
            return 0;
        }
    });
    crearNuevoEmp(emprendimientos);
}