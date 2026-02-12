const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io"); // 👈 Importar Server

const app = express();
const server = http.createServer(app);   // 👈 Solo una vez

const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const reporteSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  fecha: { type: Date, default: Date.now }
});

const Reporte = mongoose.model("Reporte", reporteSchema);

app.get("/api/reportes", async (req, res) => {
  const reportes = await Reporte.find().sort({ fecha: -1 });
  res.json(reportes);
});

app.post("/api/reportes", async (req, res) => {
  console.log("Datos recibidos:", req.body);

  const nuevo = new Reporte(req.body);
  await nuevo.save();

  io.emit("nuevo_reporte", nuevo);

  res.status(201).json(nuevo);
});

io.on("connection", (socket) => {
  console.log("Usuario conectado");
});

const PORT = process.env.PORT || 4000; server.listen(PORT, () => { console.log(`Servidor en puerto ${PORT}`); });
