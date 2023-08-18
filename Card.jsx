//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = (props) => {

  return (
      <div className={styles.card} >
          <h2>Hola {props.nombre}!!!</h2>
          <p>Sabemos que tu animal favorito es {props.animal}</p>
      </div>
  )
}

export default Card
