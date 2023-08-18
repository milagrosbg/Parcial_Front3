/* eslint-disable react/prop-types */
import { useState } from "react"

const Form = (props) => {

    const [nombre, setNombre] = useState('')
    const [animal, setAnimal] = useState('')
    const [mensaje, setMensaje] = useState('')

    function validar(event){
        event.preventDefault()

        if (nombre.trim().length >= 3 &&  nombre.startsWith(' ') && animal.trim().length >=6 ){
            setMensaje ('')
            props.agregar(nombre,animal)
        }
        else {
            setMensaje ('Por favor chequea que la información sea correcta')
            props.agregar('','')
        }
    }


    return (

        <form className={styles.form} onSubmit={validar} >
            <label htmlFor="nombre">INGRESA TU NOMBRE</label>
            <input 
                type="text" 
                id="nombre" 
                value={nombre} onChange={(e) => setNombre (e.target.value)} 
            />
            <label htmlFor="animal">INGRESA TU ANIMAL FAVORITO </label>
            <input 
                type="text" 
                id="notaanimal" 
                placeholder="INGRESE UN ANIMAL"
                value={animal} onChange={(e) => setAnimal (e.target.value)} 
            />
            <button type="submit"> ENVIAR </button>
            {mensaje ? <p> {mensaje} </p> : null}
        </form>
    )
}

export default Form