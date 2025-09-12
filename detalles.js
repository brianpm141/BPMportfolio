let inv_det = false;
let inventario = `
            <div>
                <h3>Tecnologías usadas:</h3>
                <ul>
                    <li>Angular</li>
                    <li>Express</li>
                    <li>MYSQL</li>
                    <li>Docker</li>
                </ul>
            </div>
            <div>
                <p>
                La aplicación se creó a partir de la necesidad de modernizar el proceso mediante el cual
                se gestionaba el inventario de la empresa, que utilizaba hojas de Excel y realizaba las
                asignaciones manualmente con una plantilla en Word. Por lo tanto, se unificaron la generación de reportes, la asignación
                de los equipos y la gestión de los mismos en una sola aplicación web.
                </p>
            </div>
            <div class = "grid_container">
                <strong>Asignación de equipos</strong>
                <p>
                La aplicación permite asignar los equipos de cómputo y accesorios por área y departamento, genera el formato de responsiva de manera
                automática y permite llevar un registro de quién es el responsable de cada equipo asignado dentro de la empresa.
                </p>
            </div>
            <div class = "grid_container">
                <img src="img/Inventarios/Asignacion.png" alt="Asignación" class = "img_detail">
            </div>
            <div class = "grid_container">
                <strong>Generación de reportes</strong>
                <p>
                    Se optimizó el proceso de generación de reportes con la opción de aplicar diversos filtros a los datos
                    y de exportar los resultados en diferentes formatos como PDF y Excel.
                </p>
            </div>
            <div class = "grid_container">
                <img src="img/Inventarios/Reportes.png" alt="Reportes" class = "img_detail">
            </div>
            `;

function invDet(){
    inv_det = !inv_det;
    mostrarDetalle();
}

function mostrarDetalle(){
    const detailsContainer = document.getElementById("ext_inventarios");
    const button = document.getElementById("inventarios_btn");

    // Set content on first click
    if (detailsContainer.innerHTML.trim() === "") {
        detailsContainer.innerHTML = inventario;
    }

    // Toggle class and button text based on state
    if (inv_det) {
        button.textContent = "Ver menos";
        detailsContainer.classList.add("expanded");
    } else {
        button.textContent = "Ver más";
        detailsContainer.classList.remove("expanded");
    }
}

document.getElementById("inventarios_btn").addEventListener("click", invDet);