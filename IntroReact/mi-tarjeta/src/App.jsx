import Tarjeta from './Tarjeta';
import TarjetaGustos from './TarjetaGustos';
import './App.css'; 


function App() {
  // Centrar el contenido
  const contenedorEstilos = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  };

  const tituloEstilos = {
    marginBottom: '10px',
    fontSize: '2rem',
  };

  return (
    <div style={contenedorEstilos}>
      <h1 style={tituloEstilos}>Tarjeta de Presentación</h1>
      <Tarjeta />
      <TarjetaGustos />
    </div>
  );
}

export default App;
