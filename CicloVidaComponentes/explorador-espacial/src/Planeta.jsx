import React, { useEffect } from 'react';

function Planeta({ nombre }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`);

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]);

  return <div style={{ border: '1px solid #3399ff', padding: '10px', margin: '5px 0' }}>{nombre}</div>;
}

export default Planeta;
