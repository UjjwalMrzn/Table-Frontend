import axios from 'axios';
import { 
    TABLE_ADD_REQUEST,
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
    TABLE_DELETE_REQUEST,
    TABLE_DELETE_SUCCESS,
    TABLE_DELETE_FAIL,
    REMOVE_INFO
} from '../constants/tableConstant';

export const ListTable = () => async (dispatch) => {
    try {
        dispatch({ type: TABLE_ADD_REQUEST });
        const { data } = await axios.get('/api/getalltable');
        dispatch({
            type: TABLE_ADD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TABLE_ADD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const ListTableDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: TABLE_DETAIL_REQUEST });
        const { data } = await axios.get(`/api/gettable/${id}`);
        dispatch({
            type: TABLE_DETAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TABLE_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}
export const ListUpadateTable=(User)=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_UPDATE_REQUEST
        });
        const config ={
            headers:{
                'Content-type':'application/json'
            }   
        }
        
        const {data:data1}=await axios.put(
            `/api/updatetable/${User.tableno}/`,
            User,
            config);
        


        const { data: data2 } = await axios.put(
            `/api/chooseGame/${User.tableno}/`,
            User,
            config
        );
        dispatch({
            type:TABLE_UPDATE_SUCCESS,    
            payload: { data1, data2 }
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

export const ListUpadateTables=(User)=>async(dispatch)=>{
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
            `/api/updatewholetable/${User.tableno}/`,
            User,
            config);
        


      
        dispatch({
            type:TABLE_UPDATE_SUCCESS,    
            payload: { data }
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


export const TableRegister=(tableno,rate,per_frame,frame_limit,ac,is_running)=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };
        // const payload = {};
        // if (table_type !== undefined) payload.table_type = table_type;
        // if (rate !== undefined) payload.rate = rate;
        // if (price !== undefined) payload.price = price;
        // if (frame_time_limit !== undefined) payload.frame_time_limit = frame_time_limit;
        // if (ac !== undefined) payload.ac = ac;
        // if (is_running !== undefined) payload.is_running = is_running;

        const { data } = await axios.post(
            '/api/registerTable/',
            {
            // 'name':name,
            // 'address':address,
            // 'phonenumber':phonenumber,
            // 'email':email,
            'tableno':tableno, 
            'rate':rate,
            'per_frame':per_frame,
            'frame_limit':frame_limit,
            'ac':ac,
            'is_running':is_running
            
        },
            // payload,
            config)
            console.log(data),


        dispatch({
            type: TABLE_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem('Info', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: TABLE_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};



export const UserRegister=(name,address,phonenumber,email,tableno,frame)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_ADD_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axios.post(
            '/api/userregister/',
            {
            'name':name,
            'address':address,
            'phonenumber':phonenumber,
            'email':email,
            'tableno':tableno,
            'frame':frame,
            
            // 'table_type':table_type, 
            // 'rate':rate,
            // 'price':price,
            // 'frame':frame,
            // 'frame_time_limit':frame_time_limit,
            // 'ac':ac,
            // 'is_running':is_running
        },
            config)


        dispatch({
            type: USER_ADD_SUCCESS,
            payload: data,
        });

        localStorage.setItem('User', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_ADD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const RemoveInfo = () => async (dispatch) => {
    localStorage.removeItem('User');
    dispatch({
        type: REMOVE_INFO,
    });
};


export const timer = (id) => async (dispatch) => {
    try {
        
        const { data } = await axios.get(`/api/arduino/${id}`);
        dispatch({
            
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TABLE_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}



export const DeleteTable=(User)=>async(dispatch)=>{
    try{
        dispatch({
            type:TABLE_DELETE_REQUEST
        });
        const config ={
            headers:{
                'Content-type':'application/json'
            }   
        }
        
        const {data}=await axios.put(
            `/api/deletetable/${User.tableno}/`,
            User,
            config);
        


      
        dispatch({
            type:TABLE_DELETE_SUCCESS,    
            payload: { data }
        })
        
    }catch(error){
        dispatch({
            type:TABLE_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ?error.response.data.detail
                :error.message
    
        })
      
    }
}
