/* Creamos la lista de alumnos */

const Lista = document.getElementById("portfolio");

/* Recorremos el array y creamos el HTML para cada alumno */

/* Funcion para crear el HTML del alumno */
const crearAlumno = (alumno) => {
  const html = `
    <div class="card" style="width: 18rem;">
      <img src="assets/${alumno.imgPortada}" class="card-img-top" alt="${alumno.nombre} ${alumno.apellido}">
      <div class="card-body">
        <h5 class="card-title">${alumno.nombre} ${alumno.apellido}</h5>
        <p class="card-text">${alumno.email}</p>
        <a href="${alumno.web}" class="btn btn-info">Ver web</a>
      </div>
    </div>
  `;
  return html;
};

datosAlumnos.forEach((alumno) => {
  Lista.innerHTML += crearAlumno(alumno);
});
