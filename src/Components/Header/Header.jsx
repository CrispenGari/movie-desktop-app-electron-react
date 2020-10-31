import React from 'react'

import './Header.css'
import {Avatar, IconButton} from '@material-ui/core'
import { ExitToApp, MovieFilter } from '@material-ui/icons'
import {useSelector} from 'react-redux'
import {auth} from '../../backend/firebase'
const Header = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="header">
            <div className="header__left">
                 <h1>Crisp Movies</h1>
                 <MovieFilter/>
            </div>
            <div className="header__right">
                <div className="header__user" title={user?.displayName}>
                      <Avatar className="header__avatar" src={user?.photoURL} alt={user?.displayName}/>
                    <small>{user?.displayName}</small>
                </div>
             
               <IconButton clasName="header__iconBtn" title="Sign Out" onClick={()=>auth.signOut()}>
                   <ExitToApp className="header__logout"/>
               </IconButton>
               
            </div>
            
        </div>
    )
}

export default Header
