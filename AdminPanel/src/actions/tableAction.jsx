import axios from 'axios'


import { 
    TABLE_ADD_REQUEST ,
    TABLE_ADD_SUCCESS,
    TABLE_ADD_FAIL,
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

export const ListTable=()=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_ADD_REQUEST
        })
        const{data}=await axios.get('/api/getalltable')
        dispatch({
            type:TABLE_ADD_SUCCESS,    
            payload:data,

        })

    }catch(error){
        dispatch({
            type:TABLE_ADD_FAIL,
            payload:error.response && error.resonse.data.detail
                ?error.resonse.data.detail
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
        dispatch({
            type:TABLE_DETAIL_SUCCESS,    
            payload:data
        })
        
    }catch(error){
        dispatch({
            type:TABLE_DETAIL_FAIL,
            payload:error.response && error.response.data.detail
                ?error.response.data.detail
                :error.message
    
        })
      
    }
}
export const ListUpadateTable=(Info)=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_UPDATE_REQUEST
        });
        const config ={
            headers:{
                'Content-type':'application/json'
            }   
        }
        
        const {data}=await axios.put(
            `/api/updatetable/${Info.id}/`,
            Info,
            config)
        dispatch({
            type:TABLE_UPDATE_SUCCESS,    
            payload:data
        })
        
    }catch(error){
        dispatch({
            type:TABLE_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
                ?error.response.data.detail
                :error.message
    
        })
      
    }
}


export const TableRegister=(table_type,rate,price,frame,frame_time_limit,ac,is_running)=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_LOGIN_REQUEST
        })

        const config ={
            headers:{
                'Content-type':'application/json'
            }   
        }
      

        const{data}=await axios.post(
            '/api/registerTable/',
            {
            // 'name':name,
            // 'address':address,
            // 'phonenumber':phonenumber,
            // 'email':email,
            'table_type':table_type, 
            'rate':rate,
            'price':price,
            'frame':frame,
            'frame_time_limit':frame_time_limit,
            'ac':ac,
            'is_running':is_running
        },
            config)
            console.log(data),


        dispatch({
            type:TABLE_LOGIN_SUCCESS,    
            payload:data
        })
        localStorage.setItem('Info',JSON.stringify(data))
    }
    
    catch(error){
        dispatch({
            type:TABLE_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
                ?error.response.data.detail
                :error.message
    
        })
      
    }
}





export const RemoveInfo=()=>async(dispatch)=>{
        localStorage.removeItem('Info')

        dispatch({
            type:REMOVE_INFO
        })
        // dispatch({
        //     type:DETAIL_RESET
        // })
    }
    
