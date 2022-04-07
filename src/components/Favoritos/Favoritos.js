import React, { useContext } from 'react'
import { Context } from '../../store/appContext'
import { IMAGE_URL } from '../../utils/BASE_URL'
import { MdDelete } from "react-icons/md";
import "./Favoritos.css"

const Favoritos = () => {
  const { fav, setFav } = useContext(Context)
  const borrar = (id) => {
    const delet = fav.filter(fav => fav.id !== id)
    setFav(delet)
  }

  return (
    <div className='row'>
      <div>
        {fav.length > 0 ?
          fav.map((favori, idx) => (
            <div className='favoritos' key={idx}>
              <div ><img className='img' src={`${IMAGE_URL}/w500${favori.backdrop_path}`} /> </div>
              <div className='p'> <p>{favori.title} <button className='botonx' onClick={() => borrar(favori.id)}><MdDelete/></button> </p></div>
            </div>


          ))
          : <p className=' sinfavoritos'> Sin pelis favoritas</p>


        }
      </div>



    </div>
  )
}

export default Favoritos