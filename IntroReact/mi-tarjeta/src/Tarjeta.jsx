function Tarjeta() {
  const nombre = "Monica Espinosa";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  const tarjetaEstilos = {
    border: '1px solid #ccc',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    animation: 'fadeSlideUp 0.8s ease forwards',
  };

  return (
    <div style={tarjetaEstilos}>
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;
