fetch('https://raw.githubusercontent.com/FuentesCelina/IS-Portal-Emprendimientos/main/json/emprendimientos.json')
    .then(response => response.json())
    .then(data => {
        // Llamar a la función para mostrar los emprendimientos en pantalla
        ordenarEmprendimientosDestacados(data);
    })
    .catch(error => console.error('Error al cargar los emprendimientos:', error));

function ordenarEmprendimientosDestacados(data){
    /*
    const emprendimientos = [];
    data.forEach(element => {
        emprendimientos.push(element);
    });
    */
}