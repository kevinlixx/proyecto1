import React from 'react'
import { useState } from "react";
const Ejercicio4 = () => {
    
    //generarAleatorio
    function generarAleatorio() {
        const v = Math.trunc(Math.random() * 10);
        setNumero(v)
      }

      const [numero, setNumero] = useState(0);


      

  return (
    <div>
      <p>Número aleatorio: {numero}</p>
      <button onClick={generarAleatorio}>Generar número aleatorio</button>
    </div>
  )
}

export default Ejercicio4
