const peli = {
    titulo: "Jurassic Park",
    sinopsis: "Un multimillonario construye un parque temático con dinosaurios clonados...",
    añoEstreno: 1993,
    director: "Steven Spielberg",
    duracionMinutos: 127,
    calificacionIMDb: 8.1,
  };
  
  // process.argv[2] es el argumento enviado desde la terminal
  const propiedadSeleccionada = process.argv[2];
  console.log(peli[propiedadSeleccionada]); // Asegúrate de tener esta línea
  