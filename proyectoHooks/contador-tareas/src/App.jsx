  import React, { useState, useEffect, useMemo } from 'react';

  function App() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [duracion, setDuracion] = useState('');
    const [filtroDuracion, setFiltroDuracion] = useState('');

    // Cargar tareas de localStorage al inicio
    useEffect(() => {
      const tareasGuardadas = localStorage.getItem('tareas');
      if (tareasGuardadas) {
        setTareas(JSON.parse(tareasGuardadas));
      }
    }, []);

    // Guardar tareas en localStorage cuando cambien
    useEffect(() => {
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    // Calcular tiempo total usando useMemo
    const calcularTiempoTotal = useMemo(() => {
      console.log("Calculando tiempo total...");
      return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
    }, [tareas]);

    // Actualizar título con el total
    useEffect(() => {
      document.title = `Total: ${calcularTiempoTotal} minutos`;
    }, [calcularTiempoTotal]);

    // Filtrar tareas según filtroDuracion
    const tareasFiltradas = useMemo(() => {
      if (!filtroDuracion) return tareas;
      return tareas.filter(tarea => tarea.duracion >= parseInt(filtroDuracion));
    }, [tareas, filtroDuracion]);

    // Agregar nueva tarea
    const agregarTarea = () => {
      if (nuevaTarea.trim() !== '' && duracion.trim() !== '') {
        const nuevaTareaObj = {
          nombre: nuevaTarea,
          duracion: parseInt(duracion)
        };
        setTareas([...tareas, nuevaTareaObj]);
        setNuevaTarea('');
        setDuracion('');
      }
    };

    // Estilos
    const estilosApp = {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px',
      margin: '20px auto',
      backgroundColor: '#3e5373',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 128, 0.2)'
    };

    const estilosInput = {
      padding: '8px',
      marginRight: '10px',
      borderRadius: '5px',
      border: '1px solid #3399ff',
      outline: 'none',
      fontSize: '14px',
      width: '160px'
    };

    const estilosBoton = {
      padding: '9px 15px',
      backgroundColor: '#3399ff',
      border: 'none',
      color: 'white',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '14px'
    };

    return (
      <div style={estilosApp}>
        <h1>Contador de Tareas</h1>
        
        <div>
          <input 
            type="text" 
            value={nuevaTarea} 
            onChange={(e) => setNuevaTarea(e.target.value)} 
            placeholder="Nombre de la tarea"
            style={estilosInput}
          />
          <input 
            type="number" 
            value={duracion} 
            onChange={(e) => setDuracion(e.target.value)} 
            placeholder="Duración en minutos" 
            min="1"
            style={estilosInput}
          />
          <button onClick={agregarTarea} style={estilosBoton}>Agregar tarea</button>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label>Filtrar tareas con duración mínima (minutos): </label>
          <input
            type="number"
            min="0"
            value={filtroDuracion}
            onChange={e => setFiltroDuracion(e.target.value)}
            placeholder="Ejemplo: 10"
            style={{ ...estilosInput, width: '100px' }}
          />
        </div>

        <h2>Tareas</h2>
        <ul>
          {tareasFiltradas.map((tarea, index) => (
            <li key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
          ))}
        </ul>

        <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
      </div>
    );
  }

  export default App;
