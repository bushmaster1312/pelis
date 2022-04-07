import React from 'react'
import "./Navbar.css"
import Favoritos from "../../components/Favoritos/Favoritos"
import logo from "../../assets/image/logo.png"
import { Link } from 'react-router-dom'

const Nabvar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-danger">
  <div className="container-fluid">
    <img className='logo' src={logo}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link class="nav-link active" aria-current="page" to={`/`}>Inicio</Link>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
           mis favoritos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
                <Favoritos/>
            </li>
            
          </ul>
        </li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="ingresa tu peli" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Nabvar