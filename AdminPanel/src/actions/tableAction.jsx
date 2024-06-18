import axios from 'axios'

import { 
    TABLE_ADD_REQUEST ,
    TABLE_ADD_SUCCESS,
    TABLE_ADD_FAIL,
    TABLE_DETAIL_REQUEST ,
    TABLE_DETAIL_SUCCESS ,
    TABLE_DETAIL_FAIL ,



} from '../constants/tableConstant'
export const ListTable=()=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_ADD_REQUEST
        })
        const{data}=await axios.get('/api/getalltable')
        console.log('yiiiiiiiiiii',data)
        dispatch({
            type:TABLE_ADD_SUCCESS,    
            payload:data
        })
    }catch(error){
        dispatch({
            type:TABLE_ADD_FAIL,
            payload:error.response && error.resonse.data.message
                ?error.resonse.data.message
                :error.message
    
        })
      
    }
}


export const ListTableDetail=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_DETAIL_REQUEST
        })
        const{data}=await axios.get(`/api/gettable/${id}`)
        console.log('detail: ',data)
        dispatch({
            type:TABLE_DETAIL_SUCCESS,    
            payload:data
        })
    }catch(error){
        dispatch({
            type:TABLE_DETAIL_FAIL,
            payload:error.response && error.response.data.message
                ?error.response.data.message
                :error.message
    
        })
      
    }
}