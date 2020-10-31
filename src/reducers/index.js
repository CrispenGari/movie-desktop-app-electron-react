import {combineReducers} from 'redux'
import selectCategoryReducer from './selectCategory'
import setUserReducer from './setUser'
const rootReducers = combineReducers({
    category: selectCategoryReducer,
    user: setUserReducer
})
export default rootReducers;