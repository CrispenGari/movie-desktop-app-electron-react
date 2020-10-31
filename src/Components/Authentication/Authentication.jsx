import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import './Authentication.css'
import {Facebook, GitHub, CloudCircle, MovieFilter, VpnKey} from '@material-ui/icons'
import {auth, googleAuthProvider, facebookAuthProvider, githubAuthProvider} from '../../backend/firebase'
const Authentication = () => {
    const [error, setError]= useState("")
    const googleAuthentication=()=>{
        auth.signInWithPopup(googleAuthProvider).then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const githubAuthentication=()=>{
        auth.signInWithPopup(githubAuthProvider).then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const facebookAuthentication=()=>{
        auth.signInWithPopup(facebookAuthProvider).then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    return (
    <div className="authentication__container">
        <div className="authentication">
            <div className="authentication__header">
                 <h1>Crisp Movies</h1>
                 <MovieFilter/>
            </div>
            <h1>Authenticate</h1>
            <small>Hi user, Authenticate to watch movies <VpnKey/></small>
            <Button
            onClick={googleAuthentication}
                variant="contained"
                className="authentication__googlebtn authentication__btn"
                startIcon={<CloudCircle className="authentication__icon" />}
            >
                Google
            </Button>
            <Button
            onClick={facebookAuthentication}
                variant="contained"
                className="authentication__facebookbtn authentication__btn"
                startIcon={<Facebook className="authentication__icon" />}
            >
                Facebook
            </Button>
            <Button
            onClick={githubAuthentication}
                variant="contained"
                className="authentication__githubbtn authentication__btn"
                startIcon={<GitHub className="authentication__icon" />}
            >
                GitHub
            </Button>
            <small className="authentication__error">{error}</small>
            <small>Developed by Crispen Gari</small>
            </div>
        </div>
    )
}

export default Authentication
