import React , {useState} from 'react'
import './NavBar.css'
import { useDispatch} from 'react-redux'
import {selectCategory} from '../../actions'
import constants from '../../utils/constants'
const NavBar = () => {
    const [tab, setTab] = useState("recommented");
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <h1 className={`navbar__item ${tab==="recommented" && "navbar__item--selected"}`} onClick={()=>{
                setTab("recommented")
                dispatch(selectCategory(constants.RECCOMENTED))
            }}>
                Recommended
            </h1>
            <h1 className={`navbar__item ${tab==="trending" && "navbar__item--selected"}`} onClick={()=>{
                setTab("trending")
                dispatch(selectCategory(constants.TRENDING))
            }}>
                Trending
            </h1>
            <h1 className={`navbar__item ${tab==="rated" && "navbar__item--selected"}`} onClick={()=>{
                setTab("rated")
                dispatch(selectCategory(constants.TOP_RATED))
            }}>
                Rated
            </h1>
            <h1 className={`navbar__item ${tab==="action" && "navbar__item--selected"}`} onClick={()=>{
                setTab("action")
                dispatch(selectCategory(constants.ACTION))
            }}>
                Action
            </h1>
            <h1 className={`navbar__item ${tab==="horror" && "navbar__item--selected"}`} onClick={()=>{
                setTab("horror")
                dispatch(selectCategory(constants.HORROR))
            }}>
                Horror
            </h1>
            <h1 className={`navbar__item ${tab==="romance" && "navbar__item--selected"}`} onClick={()=>{
                setTab("romance")
                dispatch(selectCategory(constants.ROMANCE))
            }}>
                Romance
            </h1>
            <h1 className={`navbar__item ${tab==="documentaries" && "navbar__item--selected"}`} onClick={()=>{
                setTab("documentaries")
                dispatch(selectCategory(constants.DOCUMENTARIES))
            }}>
                Documentaries
            </h1>
        </div>
    )
}
export default NavBar
