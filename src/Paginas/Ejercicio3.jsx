import React from 'react'

  
const Ejercicio3 = () => {
  return (
    <div>
    <h1> Ejercicio3 capturar eventos </h1>

        <form onSubmit={presion}>
        <p>Ingrese primer valor:
          <input type="number" name="valor1" />
         </p>
        <p>Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
        </form>

    </div>
  );
}
//funcion presion
function presion(e) {
    e.preventDefault();
    const v1=parseInt(e.target.valor1.value, 10);
    const v2=parseInt(e.target.valor2.value, 10);
    const suma=v1+v2;
    alert('La suma es:'+suma);
  }
export default Ejercicio3
