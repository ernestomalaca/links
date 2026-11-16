/*
  LINKS DE MALACA MUSIC LAB
  Este es el único archivo que hay que editar para cambiar la página.

  - Las fechas van así: "2026-12-04T23:59:00-06:00" (año-mes-día T hora, hora de CDMX).
  - Para apagar un bloque: activo: false.
  - "destacado" se oculta solo cuando pasa su fecha de cierre.
  - "evento" se oculta solo 3 horas después de su fecha.
  - Si una fecha queda vacía (""), el bloque se muestra sin cuenta regresiva ni fecha.
  - El último video de YouTube NO se edita aquí: se actualiza solo (ver video.json).
*/
window.MALACA = {
  nombre: "Malaca Music Lab",
  descripcion: "Ableton Live, Push y Move <em>en español</em>, con Ernesto Malaca desde Ciudad de México.",
  logo: "img/logo.webp", // vacío = sin logo
  sello: { imagen: "img/ableton-certified-trainer-blanco.svg", texto: "Ableton Certified Trainer" },

  redes: [
    { red: "instagram", url: "https://instagram.com/malacamusiclab" },
    { red: "youtube", url: "https://youtube.com/@malacamusiclab" },
    { red: "tiktok", url: "https://tiktok.com/@malacamusiclab" },
    { red: "whatsapp", url: "https://wa.me/525518047945" }
  ],

  // El bloque blanco, hasta arriba
  destacado: {
    activo: true,
    enfoque: true, // al entrar, la página se desliza sola hasta este bloque
    marca: { imagen: "img/ableton-para-la-educacion.png", texto: "Ableton para la educación" },
    etiqueta: "Ya empezó",
    // {cambio} es el número que se tacha y se transforma (de -> a)
    titulo: "Ableton Live {cambio} Suite <em>a precio de locura</em>",
    cambio: { de: "12", a: "13" },
    texto: "Llenas el formulario y tu código llega al momento por WhatsApp y correo.",
    moneda: "USD",
    precios: [
      { nombre: "Comprar", detalle: "Licencia completa", antes: 749, ahora: 168 },
      { nombre: "Actualizar", detalle: "Desde una Suite anterior", antes: 229, ahora: 90 }
    ],
    regalo: "Compra Live 12 ahora y la actualización a <em>Live 13</em> va de regalo cuando salga, a inicios de 2027.",
    boton: "Quiero mi cupón",
    url: "https://docs.google.com/forms/d/1UMLR9AyD76Nm3nsVW6y_z4GAAVff1n2fXrC73DL-hKo",
    cierre: "2026-12-04T23:59:00-06:00",
    nota: "Para estudiantes de Latinoamérica que puedan comprobarlo. Aplican restricciones."
  },

  // Evento de la semana (apagado por ahora)
  evento: {
    activo: false,
    etiqueta: "Zoom en vivo",
    titulo: "",
    boton: "Regístrate al zoom",
    url: "",
    fecha: ""
  },

  // Último video del canal: se llena solo desde video.json
  video: {
    activo: true,
    etiqueta: "Último video",
    canal: "https://youtube.com/@malacamusiclab"
  },

  // Curso destacado
  curso: {
    activo: true,
    etiqueta: "Nuevo curso",
    titulo: "Domina Ableton Move",
    boton: "Ver el curso",
    url: "https://www.malacamusiclab.com/dominamove",
    imagen: "img/move.jpg" // vacío = tarjeta sin portada
  },

  // Tarjetas chicas (iconos disponibles: foco, regalo, bolsa, gato, nota, video)
  tarjetas: [
    { icono: "foco", titulo: "Tips", texto: "Un tip para cada sesión", url: "https://tips.malacamusiclab.com" },
    { icono: "regalo", titulo: "Patreon gratis", texto: "3 meses de regalo", url: "https://www.patreon.com/MalacaMusicLab/redeem/941E2" },
    { icono: "bolsa", titulo: "Tienda", texto: "Herramientas para Live y Push", url: "https://malacamusiclab.gumroad.com" },
    { icono: "gato", titulo: "Malacats", texto: "Los cómics de los gatos", url: "https://malacats.malacamusiclab.com" }
  ],

  pie: {
    gatos: [
      { nombre: "Bruna", imagen: "img/bruna.webp" },
      { nombre: "Ceniza", imagen: "img/ceniza.webp" },
      { nombre: "Pandorito", imagen: "img/pandorito.webp" }
    ],
    enlace: { texto: "malacamusiclab.com", url: "https://www.malacamusiclab.com" }
  }
};
