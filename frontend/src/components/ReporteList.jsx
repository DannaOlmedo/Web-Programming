function ReporteList({ reportes }) {
  return (
    <div>
      <h2>Reportes</h2>
      {reportes.map((r) => (
        <div key={r._id}>
          <h3>{r.titulo}</h3>
          <p>{r.descripcion}</p>
          <small>{new Date(r.fecha).toLocaleString()}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ReporteList;
