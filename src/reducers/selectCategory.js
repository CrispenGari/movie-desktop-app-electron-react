
import endpoints from '../data/endpoints'
import constants from '../utils/constants'
const selectCategoryReducer = (state=[], action)=>{
    switch(action.type){
        case constants.TOP_RATED:
            return state = endpoints.topRated
        case constants.ACTION:
            return state = endpoints.actionMovies
        case constants.HORROR:
            return state = endpoints.horrorMovies
        case constants.RECCOMENTED:
            return state = endpoints.netflixOriginal
        case constants.ROMANCE:
            return state = endpoints.romanceMovies
        case constants.ACTION:
            return state = endpoints.actionMovies
        case constants.DOCUMENTARIES:
            return state = endpoints.documentaries
        default:
            // for recomented movies
            return state = endpoints.netflixOriginal
    }
}
export default selectCategoryReducer