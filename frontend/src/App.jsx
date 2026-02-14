import { useEffect, useState } from "react";
import { obtenerReportes } from "./services/reporte.service";
import { useSocket } from "./hooks/useSocket";
import ReporteForm from "./components/ReporteForm";
import ReporteList from "./components/ReporteList";
import "./App.css";

function App() {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerReportes();
      setReportes(data);
    };
    cargar();
  }, []);

  useSocket(setReportes);

  return (
    <div className="container">
      <h1> Plataforma de Reportes</h1>
      <ReporteForm />
      <ReporteList reportes={reportes} />
    </div>
  );
}

export default App;
