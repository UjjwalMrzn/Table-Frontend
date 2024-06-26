
import { 
    TABLE_ADD_REQUEST ,
    TABLE_ADD_SUCCESS,
    TABLE_ADD_FAIL,
    USER_ADD_REQUEST,
    USER_ADD_SUCCESS,
    USER_ADD_FAIL,
    TABLE_UPDATE_REQUEST ,
    TABLE_UPDATE_SUCCESS,
    TABLE_UPDATE_FAIL,
    TABLE_DETAIL_REQUEST ,
    TABLE_DETAIL_SUCCESS ,
    TABLE_DETAIL_FAIL ,
    TABLE_LOGIN_REQUEST,
    TABLE_LOGIN_SUCCESS,
    TABLE_LOGIN_FAIL,
    REMOVE_INFO,
    // DETAIL_RESET

} from '../constants/tableConstant'

export const TableReducer=(state={table:[]},action)=>{  //getalltable
    switch(action.type){
        case TABLE_ADD_REQUEST:
            return {loading:true, table:[]}

            case TABLE_ADD_SUCCESS:
                return {loading:false, table:action.payload} 

            case TABLE_ADD_FAIL:
                return {loading:false, error:action.payload}    
                

            default:
                return state

    }
}
export const TableUpdateReducer=(state={},action)=>{
    switch(action.type){
        case TABLE_UPDATE_REQUEST:
            return {loading:true}

            case TABLE_UPDATE_SUCCESS:
                return {loading:false,success:true, Info:action.payload} 

            case TABLE_UPDATE_FAIL:
                return {loading:false, error:action.payload}    
            case REMOVE_INFO:
                return{}

            default:
                return state

    }
}


export const UserRegisterReducer=(state={},action)=>{ //post
    switch(action.type){
             case USER_ADD_REQUEST:
                return {loading:true}

            case USER_ADD_SUCCESS:
                return {loading:false, User:action.payload} 

            case USER_ADD_FAIL:
                return {loading:false, error:action.payload}    
            case REMOVE_INFO:
                return{}
                
            default:
                return state

    }
}

export const TableRegisterReducer=(state={},action)=>{ //post
    switch(action.type){
             case TABLE_LOGIN_REQUEST:
                return {loading:true}

            case TABLE_LOGIN_SUCCESS:
                return {loading:false, Info:action.payload} 

            case TABLE_LOGIN_FAIL:
                return {loading:false, error:action.payload}    
            case REMOVE_INFO:
                return{}
                
            default:
                return state

    }
}


export const TableDetailReducer=(state={detail:[]},action)=>{ //gettable by id
    switch(action.type){
             case TABLE_DETAIL_REQUEST:
                return {loading:true, detail:[]}

            case TABLE_DETAIL_SUCCESS:
                return {loading:false, detail:action.payload} 

            case TABLE_DETAIL_FAIL:
                return {loading:false, error:action.payload}  
            // case  DETAIL_RESET:
            //     return {detail:{}}

            default:
                return state

    }
}

export const GetTableReducer=(state={gettable:[]},action)=>{
    switch(action.type){
             case GET_TABLE:
                const item=action.payload
                return {
                    ...state,
                    gettable:[...state.gettable,item]}


            default:
                return state

    }
}

