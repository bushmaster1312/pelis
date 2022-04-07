import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import { IMAGE_URL } from '../../utils/BASE_URL';
import "./Cards.css"


const Cards = (a) => {
    const {peliculas, setFav, fav} =useContext(Context)
    const favoritos =(pelicula)=>{
      setFav([pelicula, ...fav])
    }

    useEffect(() => {
     
    },[])
    
    return (
        <div className='container'>
            <div className='row'>
                {
                    peliculas.length == 0 ?

                        <p>cargando</p>

                        :
                        peliculas.map((cartelera, idx) => (

                            <div className="col-4" key={idx}>
                                <div className="movie-card">
                                    <div className="movie-header " style={{   backgroundSize: 'cover',  backgroundPosition: 'center', backgroundImage:`url(${IMAGE_URL}/w500${cartelera.backdrop_path})`}}>
                                        
                                    </div>
                                   
                                    <div className="movie-content">
                                        <div className="movie-content-header">
                                            
                                                <h3 className="movie-title">{cartelera.title}</h3>
                                            
                                            <div>
                                            <Link to={`/${cartelera.id}`}><button className='btn btn-danger'>Mas</button></Link>
                                             <button className='btn btn-primary ' onClick={()=>favoritos(cartelera)}> favoritos</button>
                                            </div>
                                            
                                        </div>
                                        <div className="movie-info">
                                            <div className="info-section">
                                                <p>Estreno</p>
                                                <span>{cartelera.release_date}</span>
                                            </div>
                                            
                                            <div className="info-section">
                                                <label>Screen</label>
                                                <span>06</span>
                                            </div>
                                           
                                            <div className="info-section">
                                                <label>Row</label>
                                                <span>D</span>
                                            </div>
                                           
                                            <div className="info-section">
                                                <label>Seat</label>
                                                <span>05,06</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>


                            </div>



                        ))
                }
            </div>
        </div>
    )
}

export default Cards