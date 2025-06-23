import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
  const generarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio());
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [mensaje, setMensaje] = useState('Ingresa un número para comenzar');
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const manejarCambio = (e) => {
    setNumeroUsuario(e.target.value);
  };

  const verificarNumero = () => {
    const num = parseInt(numeroUsuario);

    if (isNaN(num) || num < 1 || num > 100) {
      setMensaje('Por favor, ingresa un número válido entre 1 y 100.');
      return;
    }

    if (num === numeroSecreto) {
      setMensaje('¡Correcto! 🎉');
      setJuegoTerminado(true);
    } else if (num < numeroSecreto) {
      setMensaje('El número es mayor 🔼');
    } else {
      setMensaje('El número es menor 🔽');
    }
  };

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumeroAleatorio());
    setNumeroUsuario('');
    setMensaje('Ingresa un número para comenzar');
    setJuegoTerminado(false);
  };

  useEffect(() => {
    if (numeroUsuario !== '' && !juegoTerminado) {
      verificarNumero();
    }
  }, [numeroUsuario]);

  return (
    <div>
      <h1>Adivina el Número</h1>
      <InputNumber value={numeroUsuario} onChange={manejarCambio} />
      <Message text={mensaje} />
      {juegoTerminado && <RestartButton onRestart={reiniciarJuego} />}
    </div>
  );
}

export default Game;
