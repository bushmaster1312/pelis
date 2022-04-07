import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { BASE_URL } from "../utils/BASE_URL";
export const Context = createContext(null)

const AppContext = ({ children }) => {
    const [fav, setFav]= useState([])
    const [peliculas, setPeliculas] = useState([])
    const [siguiente, setSiguiente] = useState([])
    const getPeliculas = (BASE_URL) => {
        axios.get(BASE_URL)
            .then(data => {
                setPeliculas(data.data.results)
                setSiguiente(data.data)
            })
    }

    const onPrevious = () => {
        getPeliculas(`${BASE_URL}&page=${siguiente.page - 1}`)
    }

    const onNext = () => {
        getPeliculas(`${BASE_URL}&page=${siguiente.page + 1}`)
    }


    useEffect(() => {
        getPeliculas(BASE_URL)
    }, [])





    return (
        <Context.Provider value={{peliculas, onNext, onPrevious, setFav, fav}}>
            {children}
        </Context.Provider>

    )
}

export default AppContext