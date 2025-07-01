import { Link } from 'react-router-dom';

// Datos de ejemplo de citas
const citas = [
  { id: 1, paciente: "Juan Pérez", fecha: "2025-07-15" },
  { id: 2, paciente: "María Gómez", fecha: "2025-07-20" },
  { id: 3, paciente: "Carlos López", fecha: "2025-07-25" },
];

function Citas() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Lista de Citas Médicas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            {cita.paciente} - {cita.fecha} -{" "}
            <Link to={`/cita/${cita.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
