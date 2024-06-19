import axios from 'axios'


import { 
    TABLE_ADD_REQUEST ,
    TABLE_ADD_SUCCESS,
    TABLE_ADD_FAIL,
    TABLE_DETAIL_REQUEST ,
    TABLE_DETAIL_SUCCESS ,
    TABLE_DETAIL_FAIL ,
    TABLE_LOGIN_REQUEST,
    TABLE_LOGIN_SUCCESS,
    TABLE_LOGIN_FAIL,


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


export const TableRegister=(name,address,phonenumber,email,table_type,frame,frame_time_limit )=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_LOGIN_REQUEST
        })
        console.log(email,'+++++++++',table_type)

        const config ={
            headers:{
                'Content-type':'application/json'
            }   
        }
      
        console.log(phonenumber)

        const{data}=await axios.post(
            '/api/registerTable/',
            {
            'table_type':table_type,
            'name':name,
            'address':address,
            'phonenumber':phonenumber,
            'email':email,
            'frame':frame,
            'frame_time_limit':frame_time_limit,
            
        },
            config)
            console.log(data),


        dispatch({
            type:TABLE_LOGIN_SUCCESS,    
            payload:data
        })
        localStorage.setItem('Info',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:TABLE_LOGIN_FAIL,
            payload:error.response && error.response.data.message
                ?error.response.data.message
                :error.message
    
        })
      
    }
}