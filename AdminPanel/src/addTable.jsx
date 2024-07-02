import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'
import { TableRegister,RemoveInfo } from './actions/tableAction'
import { useNavigate, useLocation } from 'react-router-dom'
import { Form ,Button, Row, Col } from 'react-bootstrap'
import './App.css';


function addTable() {

  const dispatch=useDispatch()
  const tableRegisterstore =useSelector(state=>state.tableRegisterstore)
  const {error, loading ,Info}=tableRegisterstore


  // const [name,setName]=useState('')
  // const [address,setAddress]=useState('')
  // const [phonenumber,setPhonenumber]=useState('')
  // const [email,setEmail]=useState('')
  const [tableno,setTable_type]=useState('')     
  const [rate,setRate]=useState('')
  const [per_frame,setper_frame]=useState('')
  const [frame_limit,setFrame_limit]=useState('')


  // const [time,setTime]=useState('')
  const [ac,setAc]=useState(false)
  const [is_running,setIsrunning]=useState('')

  // const isValidEmail =(email)=>{
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // }

  const navigate = useNavigate()
  // const [shouldValidate, setShouldValidate] = useState(false);

 
  useEffect(()=>{
  if (Info){
    
        navigate('/dashboard')
   
    // setShouldValidate(false);
  }

},[navigate,Info])


useEffect(()=>{
 
    setIsrunning(false);
  
})
const submitHandler=(e)=>{
  e.preventDefault();  // Prevent default form submission
  dispatch(TableRegister(
    tableno,
    rate,
    per_frame,
   
    frame_limit,
    ac,
    is_running
  ))
  
  // dispatch(TableRegister(Name,Address,Phonenumber,Email,Table_type,Rate,Price,Frame,Frame_time_limit,Ac))
  // setShouldValidate(true);

}
const checked =Boolean


  return (
    <div className='form-box'>
      <div className='form-container'>
        <h2>New Table</h2>
        {error && <Errormsg varient='danger'>{ error }</Errormsg> }
        {loading && <Spinner/>}
        <Form onSubmit={submitHandler}>
          <div className='form-group'>
            <label>Table Number</label>
            <input type='number' name='tableno' value={tableno} onChange={(e)=>setTable_type(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Time Rate</label>
            <input type='number' name='Rate' value={rate} onChange={(e)=>setRate(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Per frame</label>
            <input type='number' name='per_frame' value={per_frame} onChange={(e)=>setper_frame(e.target.value)}  />
          </div>

          <div className='form-group'>
            <label>Frame Time Limit</label>
            <input type='timer' name='Frame_limit' value={frame_limit} onChange={(e)=>setFrame_limit(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>A/C</label>
            <input type='checkbox' name='Ac' checked={ac}  onChange={(e)=>setAc(e.target.checked)}  />
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
         
        </Form>
        
        
      </div>
    </div>
      
  );
}




export default addTable;
