import { useState } from "react";
import "./ListaCompras.css";

function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  const eliminarProducto = (index) => {
    setProductos(productos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Lista de Compras</h2>
      <div className="input-group">
        <input
          type="text"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          placeholder="Añadir producto"
          onKeyDown={(e) => e.key === "Enter" && agregarProducto()}
        />
        <button onClick={agregarProducto}>Agregar</button>
      </div>
      <ul className="list">
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
        {productos.length === 0 && <p>No hay productos en la lista.</p>}
      </ul>
    </div>
  );
}

export default ListaCompras;
