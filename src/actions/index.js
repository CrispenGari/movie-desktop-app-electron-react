
import constants from '../utils/constants'
const selectCategory =(value)=>{
    return{
        type: value? value : constants.RECCOMENTED 
    }
}
const setUser =(value)=>{
    return{
        type: constants.SET_USER,
        value: value
    }
}
export {selectCategory, setUser}