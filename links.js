/*
  LINKS DE MALACA MUSIC LAB
  Este es el único archivo que hay que editar para cambiar la página.

  - Las fechas van así: "2026-11-25T23:59:00-06:00" (año-mes-día T hora, hora de CDMX).
  - Para apagar un bloque: activo: false.
  - "destacado" se oculta solo cuando pasa su fecha de cierre.
  - "evento" se oculta solo 3 horas después de su fecha.
  - Si una fecha queda vacía (""), el bloque se muestra sin cuenta regresiva ni fecha.
*/
window.MALACA = {
  nombre: "Malaca Music Lab",
  descripcion: "Ableton Live, Push y Move <em>en español</em>, con Ernesto Malaca desde Ciudad de México.",
  logo: "", // ruta de la imagen del logo, p. ej. "img/logo.gif"; vacío = sin logo

  redes: [
    { red: "instagram", url: "https://instagram.com/malacamusiclab" },
    { red: "youtube", url: "https://youtube.com/@malacamusiclab" },
    { red: "tiktok", url: "https://tiktok.com/@malacamusiclab" },
    { red: "whatsapp", url: "https://wa.me/525518047945" }
  ],

  // El bloque con fuego, hasta arriba
  destacado: {
    activo: true,
    etiqueta: "Ya empezó",
    titulo: "Ableton Live 12 <em>al mejor precio</em>",
    texto: "Cupón educativo para Latinoamérica. Llenas el formulario y tu código llega al momento por WhatsApp y correo.",
    boton: "Quiero mi cupón",
    url: "https://docs.google.com/forms/d/1UMLR9AyD76Nm3nsVW6y_z4GAAVff1n2fXrC73DL-hKo",
    cierre: "", // fecha de cierre de la campaña
    nota: "Programa Ableton para la educación"
  },

  // Evento de la semana
  evento: {
    activo: true,
    etiqueta: "Zoom en vivo",
    titulo: "Masterclass de Live 13 con Santo & Mala",
    boton: "Regístrate al zoom",
    url: "https://forms.gle/wf5fP7fBDHy6PjFG9",
    fecha: "" // fecha y hora del evento
  },

  // Curso destacado
  curso: {
    activo: true,
    etiqueta: "Nuevo curso",
    titulo: "Domina Ableton Move",
    boton: "Ver el curso",
    url: "https://www.malacamusiclab.com/dominamove",
    imagen: "" // p. ej. "img/move.jpg"; vacío = tarjeta sin portada
  },

  // Tarjetas chicas (iconos disponibles: foco, regalo, bolsa, gato, nota, video)
  tarjetas: [
    { icono: "foco", titulo: "Tips", texto: "Un tip para cada sesión", url: "https://tips.malacamusiclab.com" },
    { icono: "regalo", titulo: "Patreon gratis", texto: "3 meses de regalo", url: "https://www.patreon.com/MalacaMusicLab/redeem/941E2" },
    { icono: "bolsa", titulo: "Tienda", texto: "Herramientas para Live y Push", url: "https://malacamusiclab.gumroad.com" },
    { icono: "gato", titulo: "Malacats", texto: "Los cómics de los gatos", url: "https://malacats.malacamusiclab.com" }
  ],

  pie: {
    imagen: "", // p. ej. "img/gatos.png" (la caricatura); vacío = sin imagen
    textoImagen: "Bruna, Ceniza y Pandorito",
    enlace: { texto: "malacamusiclab.com", url: "https://www.malacamusiclab.com" }
  }
};
