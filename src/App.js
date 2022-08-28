// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto 
// Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import { useState } from "react";

function App() {

  const [totalCounter, setTotalCounter] = useState(totalCounter)

  const handleTotal = () => {
    setTotalCounter(totalCounter + 1)
  }

  return (
    <div className="App">
      <Cabecera totalPurchase={handleTotal()} />
      <Listado totalPurchase={handleTotal()} />
    </div>
  );
}

export default App;
