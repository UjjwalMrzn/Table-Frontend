import React ,{useEffect} from 'react';
import { useParams,Link } from 'wouter'
import Button from 'react-bootstrap/Button';

import './Details.css'; // Import CSS file
import { useDispatch,useSelector } from 'react-redux'
import { ListTableDetail,timer } from './actions/tableAction'
import { useNavigate, useLocation } from 'react-router-dom'

import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'

const Start = () => {
  const Userstore =useSelector(state=>state.Userstore)
  const {User}=Userstore
  const{id,id1}=useParams()
  const dispatch = useDispatch()
  const tabledetaillist =useSelector(state=>state.tabledetaillist)
  const { detail}=tabledetaillist
  const navigate=useNavigate()
  const boolean=false
  useEffect(()=>{
   
    User ?navigate('/dashboard'):navigate('/dashboard/')
    console.log('yoyoasdfyoy')

  },[dispatch,id,User,detail])
  console.log('yoyoasdfyoy')

  return ( 
    
    <div>
    
    <img src={`/api/background_run/${id}/${id1}`} alt={`Game start ${id}${id1}`} />
    
  
      
    </div>

 
  );
};

export default Start;
