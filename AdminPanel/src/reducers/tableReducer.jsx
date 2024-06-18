
import { TABLE_ADD_REQUEST ,TABLE_ADD_SUCCESS,TABLE_ADD_FAIL} from '../constants/tableConstant'

export const TableReducer=(state={table:[]},action)=>{
    switch(action.type){
        case TABLE_ADD_REQUEST:
            return {loading:true, ...state}

            case TABLE_ADD_SUCCESS:
                return {loading:false, table:action.payload} 

            case TABLE_ADD_FAIL:
                return {loading:false, error:action.payload}    

            default:
                return state

    }
}