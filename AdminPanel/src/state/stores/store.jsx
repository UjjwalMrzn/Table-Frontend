import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import { TableReducer,TableDetailReducer,TablesUpdateReducer,   TableRegisterReducer,TableUpdateReducer,UserRegisterReducer } from "../reducers/tableReducer";

const reducer=combineReducers({

    tablelist:TableReducer,
    tabledetaillist:TableDetailReducer,
    tableRegisterstore:TableRegisterReducer,
    tableupdatestore:TableUpdateReducer,
    Userstore:UserRegisterReducer,
    tablesupdatestore:TablesUpdateReducer,
})


const initialState={

}

const store =configureStore({
    reducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    });



export default store   