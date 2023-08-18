 import { useState } from 'react'
  import Form from './Form'
  import Card from './Card'

function App() {
  const [nombre, setNombre] = useState([])
  const [animal, setAnimal] = useState([])

  const AddNombre = (nombre)=>{
    setNombre([...nombre1,nombre2]);
  }
  const AddAnimal = (animal)=>{
    setAnimal([...animal1,animal2]);
  }
 return (
    
    <div className='App'>
      <h1>Carga de animales favoritos</h1>
      <Form onAddNombre={AddNombre}/>
      <Form onAddAnimal={AddAnimal}/>
      <Card animal={animal}/>
    </div>
  )
}

export default App;
