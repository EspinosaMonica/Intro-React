import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
