const express = require("express");
const app = express();
const PORT = 3000;

// 1️⃣ Custom middleware: log de cada request (método y URL)
function logger(req, res, next) {
  console.log(`[${req.method}] ${req.url}`);
  next();
}

// 2️⃣ Primer use: usa el middleware logger
app.use(logger);

// 3️⃣ Rutas
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/status", (req, res) => {
  res.send({ ok: true });
});

app.get("/time", (req, res) => {
  res.send({ time: new Date().toLocaleTimeString() });
});

// 4️⃣ Segundo use: manejar rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada 😢");
});

// 5️⃣ Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
