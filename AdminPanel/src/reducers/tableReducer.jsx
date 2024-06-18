
import { 
    TABLE_ADD_REQUEST ,
    TABLE_ADD_SUCCESS,
    TABLE_ADD_FAIL,
    TABLE_DETAIL_REQUEST ,
    TABLE_DETAIL_SUCCESS ,
    TABLE_DETAIL_FAIL ,



} from '../constants/tableConstant'

export const TableReducer=(state={table:[]},action)=>{
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


export const TableDetailReducer=(state={detail:[]},action)=>{
    switch(action.type){
             case TABLE_DETAIL_REQUEST:
                return {loading:true, detail:[]}

            case TABLE_DETAIL_SUCCESS:
                return {loading:false, table:action.payload} 

            case TABLE_DETAIL_FAIL:
                return {loading:false, error:action.payload}    

            default:
                return state

    }
}