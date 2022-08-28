// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState, useEffect } from "react";

export default function Item(name, description, stock, total) {

  const [amount, setAmount] = useState(0)
  const [available, setAvailable] = useState(null);
  const [text, setText] = useState("");


  const handleAmount = () => {
    if(amount > 0){
      setAmount(amount - 1)
    } else {
      setAmount("agotado")
    }
  }

  useEffect(() => {
    
  });

  const handleAvailable = (stock) =>{
    if (stock === 0) {
      setAvailable(false)
      setText("Sin stock")
    } else {
      setAvailable(true)
      setText("Comprar")
    }
  }
  
  return (
    <div className='producto'>
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>En stock: <span>{handleAmount()}</span></h5>
      <button disabled={handleAvailable()} onClick={()=>total()}>{text}</button>
    </div>
  )
}
