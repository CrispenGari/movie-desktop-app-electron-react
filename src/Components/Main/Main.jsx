import React from 'react'

import './Main.css'
import {NavBar, MoviesContainer} from '../../Components'
const Main = () => {
    return (
        <div className="main">
           <NavBar/>
           <MoviesContainer/>
        </div>
    )
}

export default Main
