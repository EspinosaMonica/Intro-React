function TarjetaGustos() {
  const futbol = "Me gusta el fútbol";
  const marvel = "Soy fan de Marvel";
  const cantante = "Mi cantante favorita es Taylor Swift";

  const tarjetaEstilos = {
    border: '1px solid #4A90E2',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(74, 144, 226, 0.2)',
    animation: 'fadeSlideUp 0.8s ease forwards',
    animationDelay: '0.3s',
  };

  return (
    <div style={tarjetaEstilos}>
      <h2>Sobre Mí</h2>
      <p>{futbol}</p>
      <p>{marvel}</p>
      <p>{cantante}</p>
    </div>
  );
}

export default TarjetaGustos;

