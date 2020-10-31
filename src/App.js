
import './App.css';
import React, {useEffect} from 'react'
import {Header, Main, Authentication} from './Components'
import {auth} from './backend/firebase'
import {useSelector, useDispatch} from 'react-redux'
import {setUser} from './actions'
//const electron = window.require("electron")
function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser=>{
        authUser? dispatch(setUser(authUser)): dispatch(setUser(null))
    })
    return () => {
      unsubscribe()
    }
  }, [])
  if(!user){
     return (
    <div className="app">
       <Header/>
       <div className="app__main">
         <Main/>
       </div>
    </div>
  );
  }else{
    return (
      <div className="app">
          <Authentication/>
      </div>
    )
  }
 
}

export default App;
