import React from 'react'
import "./Footer.css"

import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai"
const Footer = () => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social"><span><AiOutlineFacebook/></span><span><AiOutlineInstagram/></span><span><AiOutlineLinkedin/></span></div>
                <ul className="list-inline">
                    <li className="list-inline-item"><p>Inicio</p></li>
                    <li className="list-inline-item"><p>Servicios</p></li>
                    <li className="list-inline-item"><p>Sobre nosotros</p></li>
                    <li className="list-inline-item"><p>Terminos</p></li>
                    <li className="list-inline-item"><p>politica y privacidad</p></li>
                </ul>
                <p className="copyright">Programa desde tu casa © 2022</p>
            </footer>
        </div>
    )
}

export default Footer