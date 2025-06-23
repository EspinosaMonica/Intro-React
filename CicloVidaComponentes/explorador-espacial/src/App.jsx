import React, { useState, useEffect, useRef } from 'react';

function App() {
  // Estados para planetas y formulario
  const [planetas, setPlanetas] = useState(() => JSON.parse(localStorage.getItem('planetas')) || []);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [planetaEditandoIndex, setPlanetaEditandoIndex] = useState(null);

  const inputImagenRef = useRef(null);

  // Guardar en localStorage cuando cambian los planetas
  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas));
  }, [planetas]);

  // Manejar submit para agregar o editar
  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : planetas[planetaEditandoIndex]?.imagen || null,
    };

    if (planetaEditandoIndex !== null) {
      // Actualizar planeta existente
      const nuevosPlanetas = [...planetas];
      nuevosPlanetas[planetaEditandoIndex] = nuevoPlaneta;
      setPlanetas(nuevosPlanetas);
      setPlanetaEditandoIndex(null);
    } else {
      // Agregar nuevo planeta
      setPlanetas([...planetas, nuevoPlaneta]);
    }

    // Limpiar formulario
    setNombre('');
    setDescripcion('');
    setImagen(null);
    if (inputImagenRef.current) inputImagenRef.current.value = '';
  };

  // Cargar datos en formulario para editar
  const editarPlaneta = (index) => {
    const planeta = planetas[index];
    setNombre(planeta.nombre);
    setDescripcion(planeta.descripcion);
    setImagen(null); // No cambiar imagen hasta que cargues una nueva
    setPlanetaEditandoIndex(index);
    if (inputImagenRef.current) inputImagenRef.current.value = '';
  };

  // Eliminar planeta
  const handleDelete = (index) => {
    const nuevosPlanetas = [...planetas];
    nuevosPlanetas.splice(index, 1);
    setPlanetas(nuevosPlanetas);

    // Si borras el planeta que estás editando, limpia edición
    if (planetaEditandoIndex === index) {
      setPlanetaEditandoIndex(null);
      setNombre('');
      setDescripcion('');
      setImagen(null);
      if (inputImagenRef.current) inputImagenRef.current.value = '';
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'Arial', padding: 20 }}>
      <h1>Bitácora de Exploración</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={{ width: '100%', padding: 8, marginBottom: 10, borderRadius: 4, border: '1px solid #3399ff' }}
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          rows={3}
          style={{ width: '100%', padding: 8, marginBottom: 10, borderRadius: 4, border: '1px solid #3399ff' }}
        />
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef}
          style={{ marginBottom: 10 }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#3399ff',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: 5,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {planetaEditandoIndex !== null ? 'Actualizar' : 'Guardar'}
        </button>
      </form>

      <h2>Planetas Registrados</h2>
      {planetas.length === 0 && <p>No hay planetas registrados aún.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {planetas.map((planeta, index) => (
          <li
            key={index}
            style={{
              border: '1px solid #3399ff',
              borderRadius: 8,
              padding: 10,
              marginBottom: 10,
              backgroundColor: '#4c5b73',
            }}
          >
            <h3>{planeta.nombre}</h3>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && (
              <img
                src={planeta.imagen}
                alt={planeta.nombre}
                style={{ maxWidth: '100%', borderRadius: 6, marginBottom: 10 }}
              />
            )}
            <div>
              <button
                onClick={() => editarPlaneta(index)}
                style={{
                  backgroundColor: '#3399ff',
                  border: 'none',
                  color: 'white',
                  padding: '6px 10px',
                  borderRadius: 5,
                  cursor: 'pointer',
                  marginRight: 10,
                }}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  backgroundColor: '#ff4d4d',
                  border: 'none',
                  color: 'white',
                  padding: '6px 10px',
                  borderRadius: 5,
                  cursor: 'pointer',
                }}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

