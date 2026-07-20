const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// 👇 Este es el mensaje que puedes cambiar en tu demo para "escenario de cambio"
const MENSAJE = "Hola, esta es la versión 1 del backend de prueba";

app.get("/api/status", (req, res) => {
  res.json({
    mensaje: MENSAJE,
    fecha: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Backend de prueba corriendo en el puerto ${PORT}`);
});
