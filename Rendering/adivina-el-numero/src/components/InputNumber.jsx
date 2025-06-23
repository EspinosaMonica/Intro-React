import React from 'react';

function InputNumber({ value, onChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Escribe un número del 1 al 100"
      min={1}
      max={100}
    />
  );
}

export default InputNumber;
