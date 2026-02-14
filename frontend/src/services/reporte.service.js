const API_URL = "http://localhost:4000/api/reportes";

export const obtenerReportes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const crearReporte = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};
