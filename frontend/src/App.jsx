import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io(process.env.VITE_API_URL + "/api/reportes");

function App() {
  const [reportes, setReportes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

const API_URL = import.meta.env.VITE_API_URL;

const socket = io(API_URL);

const obtenerReportes = async () => {
  const res = await fetch(`${API_URL}/api/reportes`);
  const data = await res.json();
  setReportes(data);
};

  useEffect(() => {
    obtenerReportes();

    socket.on("nuevo_reporte", (nuevo) => {
      setReportes((prev) => [nuevo, ...prev]);
    });

    return () => socket.off("nuevo_reporte");
  }, []);

 const enviarReporte = async () => {
  console.log("Botón presionado");

  if (!titulo || !descripcion) return;

  await fetch(`${API_URL}/api/reportes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ titulo, descripcion })
  });

  setTitulo("");
  setDescripcion("");
};


  return (
    <div className="container">
      <header>
        <h1 style={{ textAlign: "center" }}> Plataforma de Reportes</h1>
      </header>

      <div className="card form">
        <input
          placeholder="Título del reporte"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          placeholder="Describe el reporte..."
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button onClick={enviarReporte}>Enviar Reporte</button>
      </div>

      <div className="reportes">
        {reportes.map((r) => (
          <div key={r._id} className="card reporte">
            <h3>{r.titulo}</h3>
            <p>{r.descripcion}</p>
            <span>
              {new Date(r.fecha).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
