import React from 'react'

import Dado from "../Dado.jsx";
import { useState } from "react";

const Ejercicio5 = () => {

  function generarValor() {
    return Math.trunc(Math.random() * 6) + 1
  }

  function lanzarDado() {
    setNumero1(generarValor())
    setNumero2(generarValor())
    setNumero3(generarValor())
  }

  const [numero1, setNumero1] = useState(generarValor())
  const [numero2, setNumero2] = useState(generarValor())
  const [numero3, setNumero3] = useState(generarValor())

  return (
    <div>Ejercicio5

       <Dado valor={numero1} />
      <Dado valor={numero2} />
      <Dado valor={numero3} />
      <button onClick={lanzarDado}>Dados </button>

    </div>
  );
}

export default Ejercicio5
