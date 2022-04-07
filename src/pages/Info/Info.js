import axios from 'axios'
import { Circle } from 'rc-progress'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nabvar from '../../components/Navbar/Nabvar'
import { BASE_URL, IMAGE_URL } from '../../utils/BASE_URL'
import Footer from "../../components/Footer"

import "./Info.css"


const Info = () => {
  const { id } = useParams()
  let key = "63f8b86b378c29444c7e2be9ce8ff801"
  const [pelis, setPelis] = useState({})
  const { title, backdrop_path, vote_average, overview, release_date } = pelis


  console.log(pelis)

  const getPeli = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
      .then(data => {
        setPelis(data.data)

      })
  }
  useEffect(() => {
    getPeli()
  }, [])



  return (

    <div>
      <div><Nabvar /></div>
      <div className='container info'>
        <div id="mainContainer">
        </div>
        <div className="containers" style={{ backgroundImage: `url(${IMAGE_URL}/w500${backdrop_path})`, backgroundSize: `cover`, }}>
          <div id="left">
            <h1>{title}</h1>
            <div id="info">
              <ul id="menu">
                <li> <p>Fecha de lanzamiento : {release_date}</p> </li>
              </ul>
            </div>
            <div className="circle" >
              <h3> IMDb Rating:   </h3>
              <div className='circulo'><Circle percent={vote_average * 10} strokeWidth="4" strokeColor="#ff372d" /> </div>
              <p>{vote_average}</p>

            </div>
          </div>
          <div id="right">
            <p>{overview}</p>
            <div id="trailer">
              <i className="fa fa-play" aria-hidden="true"></i>
              <h4>Volver inicio</h4>
            </div>
          </div>
        </div>

      </div>

      <div><Footer /></div>
    </div>
  )
}

export default Info