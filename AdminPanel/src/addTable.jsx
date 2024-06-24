import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'
import { TableRegister } from './actions/tableAction'
import { useNavigate, useLocation } from 'react-router-dom'
function addTable() {

  const dispatch=useDispatch()
//   const tableRegister =useSelector(state=>state.tableRegister)
//   const {error, loading , info}=tableRegister


  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [email,setEmail]=useState('')
  const [table_type,setTable_type]=useState('')
//   const [Rate,setRate]=useState('')
//   const [Price,setPrice]=useState('')
  const [frame,setFrame]=useState('')
  const [frame_time_limit,setFrame_time_limit]=useState('')
//   const [Ac,setAc]=useState('')

  const navigate = useNavigate()

  const submitHandler=(e)=>{
    e.preventDefault();  // Prevent default form submission
    dispatch(TableRegister(name,address,phonenumber,email,table_type,frame,frame_time_limit))
    console.log(email,'===============',table_type)
    // dispatch(TableRegister(Name,Address,Phonenumber,Email,Table_type,Rate,Price,Frame,Frame_time_limit,Ac))
    navigate("/")
  }


  return (
    <div className='form-box'>
      <div className='form-container'>
        <h2>New Booking Form</h2>
        {/* {error && <Errormsg varient='danger'>{ error }</Errormsg> }
        {loading && <Spinner/>} */}
        <form onSubmit={submitHandler}>
         <div className='form-group'>
            <label>Table_type</label>
            <input type='number' name='Table_type' value={table_type} onChange={(e)=>setTable_type(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Address</label>
            <input type='text' name='address' value={address} onChange={(e)=>setAddress(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input type='tel' name='phone' value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}  required />
          </div>
        
          <div className='form-group'>
            <label>Email</label>
            <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
          </div>
          
          <div className='form-group'>
            <label>Frame</label>
            <input type='Frame' name='Frame' value={frame} onChange={(e)=>setFrame(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Frame_time_limit</label>
            <input type='Frame_time_limit' name='Frame_time_limit' value={frame_time_limit} onChange={(e)=>setFrame_time_limit(e.target.value)}  />
          </div>
          {/* <div className='form-group'>
            <label>Ac</label>
            <input type='checkbox' name='Ac' checked={Ac}  onChange={(e)=>setAc(e.target.checked)}  />
          </div> */}
    
          {/* <div class="select-box">
            <select required>
              
            <option disabled selected hidden>Select an option</option>
            <option value="Frame">Frame-Based</option>
              <option value="Time">Time-Based</option>
            </select>
          </div> */}
          <div className='submit-btn'>
            <button type='submit'>Submit</button>
            </div>
         
        </form>
      </div>
    </div>
      
  );
}





export default addTable;
