import {createStore} from 'redux'
import itemReducer from "../reducers/reducer";

const store = createStore(itemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store