import React from 'react'

const Test = () => {

  
  const ejecucion = () => {
    console.time("Tiempo de ejecucion")
  for(var i=0;i<10000; i++){
    console.log(i)
  }
  console.log("Estoy ultimo")
  alert("Hola")
  console.timeEnd("Tiempo de ejecucion")
  }
  return (
    <button onClick={ejecucion}>Test</button>
  )
}

export default Test


/* 
const ejecucion = () => {
  setTimeout(() => {
    console.log("Estoy primero")
  }, 5000);
  
}
console.log("Estoy Ultimo")
 */


/* 

Clases de asincronia  ---- timers (setTimeout, setInterval) algo despues de tanto tiempo
                          triggers//activadores (eventos) se puede ejecutar o no // con un click por ejemplo que estamos para ejecutar
                          requests(ajax nombre tecnico, fetch) // necesitas algo que tarda //



*/
/* 
pidoUsuarios((usuarios)=>{

  pidoPosteos((usuarios.id),(posteos)=>{

    pidoComentariosDePosteos((posteo.id),(comentarios)=>{

    })
  })
}) 

pidoUsuarios (manejarResultadoUsuarios)

const manejarResultadoUsuarios = (usuarios) => {
  pidoPosteos(usuarios.id, manejarResultadoPosteos)
}

const manejarResultadoPosteos = (posteos) => {
  pidoComentarios(posteo.id, manejarResultadoComentarios)
}

const manejarResultadoComentarios = (comentarios) => {

}

*/


// Estados de promesas /// pending , fullfilled , rejected 