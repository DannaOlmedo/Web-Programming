import { useState } from "react";
import { crearReporte } from "../services/reporte.service";

function ReporteForm() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !descripcion) return;

    await crearReporte({ titulo, descripcion });

    setTitulo("");
    setDescripcion("");
  };

  return (
    <div>
      <h2>Nuevo Reporte</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ReporteForm;
