import { useParams } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();

  // Aquí podrías hacer fetch para obtener datos reales con el id
  // Por ahora mostramos un mensaje simple

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {id}</p>
      <p>Aquí puedes mostrar más detalles de la cita.</p>
    </div>
  );
}

export default CitaDetalle;
