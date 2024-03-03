import { combineReducers } from 'redux'

import applicationReducer from '../slice/aplication-slice'

export const rootReducer = combineReducers({
    application: applicationReducer,
})