import React from 'react'

const Ejercicio2 = () => {
 //funcion buscador
  const buscadores = ['http://www.google.com',
    'http://www.bing.com',
    'http://www.yahoo.com',
    'https://platzi.com/home/'
    ];

  return (
    <div>
      <h1>Ejercicio 2</h1>
      
      <a href={buscadores[0]}>Google</a><br />
      <a href={buscadores[1]}>Bing</a><br />
      <a href={buscadores[2]}>Yahoo</a><br />
      <a href={buscadores[3]}>Platzi</a><br />
    </div>
  )
}

export default Ejercicio2
