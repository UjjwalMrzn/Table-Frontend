import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import { TableReducer,TableDetailReducer,TableRegisterReducer } from './reducers/tableReducer'


const reducer=combineReducers({

    tablelist:TableReducer,
    tabledetaillist:TableDetailReducer,
    tableRegister:TableRegisterReducer,
})


const initialState={

}

const store =configureStore({
    reducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    });



export default store   