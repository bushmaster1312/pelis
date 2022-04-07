
import "../Home/Home.css"
import Cards from '../../components/Cards_Home/Cards'
import image from "../../assets/image/pixar.webp"
import Nabvar from "../../components/Navbar/Nabvar"
import { VscDebugContinue, VscDebugReverseContinue } from "react-icons/vsc";
import { useContext } from "react"
import { Context } from "../../store/appContext"
import Favoritos from "../../components/Favoritos/Favoritos"
import Footer from "../../components/Footer";



const Home = () => {
  const {onNext, onPrevious} = useContext(Context)
 

  const prev = () => {
  onPrevious()
  }
  const next = () => {
    onNext()
  }
  return (

    <div>
      <Nabvar />

      <div className="hero mt-5 mb-5">
        <img className="image" src={image} />
      </div>
      <div className="paginas">
        <div><button className="prev"  onClick={prev}><VscDebugReverseContinue /></button></div>
        <div><button className="next" onClick={next}><VscDebugContinue/></button></div>
      </div>
      <Cards />
      <Footer/>
    </div>
  )
}

export default Home