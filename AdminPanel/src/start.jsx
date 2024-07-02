import React ,{useEffect} from 'react';
import { useParams,Link } from 'wouter'
import Button from 'react-bootstrap/Button';

import './Details.css'; // Import CSS file
import { useDispatch,useSelector } from 'react-redux'
import { ListTableDetail } from './actions/tableAction'
import { useNavigate, useLocation } from 'react-router-dom'

import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'

const Start = () => {
  const Userstore =useSelector(state=>state.Userstore)
  const {User}=Userstore
    const{id}=useParams()
    const dispatch = useDispatch()
    const tabledetaillist =useSelector(state=>state.tabledetaillist)
    const { error, loading , detail}=tabledetaillist
    const navigate=useNavigate()
    const boolean=false
    useEffect(()=>{
      dispatch(ListTableDetail(id))
      User ?navigate('/dashboard'):navigate('/dashboard/')
      
    },[dispatch,id,User])

  return (
    <div >
      Game Started
        <img src={`/api/game_start/${id}/`} alt={`Game start ${id}`}/>
        
       

    </div>
  );
};

export default Start;
