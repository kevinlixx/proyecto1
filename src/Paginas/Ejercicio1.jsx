import React from 'react'

//funcion retornarAleatorio

function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);

}

const Ejercicio1 = () => {
  const siglo = 21
  const persona = {
    nombre: 'Jannez urrego',
    edad: 100
  }
  return (

    
    <div>Ejercicio1

      <h1>Título nivel 1</h1>
      <hr />
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Llamada a un método</h3>
      <p>Un valor aleatorio llamando a un método.</p>
      {retornarAleatorio()}
      <h3>Calculo inmediato de expresiones</h3>
      5 + 4 = {5 + 4}
    </div>
    
  )
}

export default Ejercicio1
