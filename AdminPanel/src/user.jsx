import React, { useState,useEffect } from 'react';
import { useRoute } from 'wouter';
import { useDispatch,useSelector } from 'react-redux'
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'
import { TableRegister ,ListTableDetail} from './actions/tableAction'
import { useNavigate, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Link ,useParams} from 'wouter'
function User() {
  const{id}=useParams()
  const dispatch=useDispatch()
  
  const tableRegisterstore =useSelector(state=>state.tableRegisterstore)
  const {error, loading , Info}=tableRegisterstore

  const tabledetaillist =useSelector(state=>state.tabledetaillist)
  const {detail}=tabledetaillist


  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [email,setEmail]=useState('')
  const [table_type,setTable_type]=useState(detail.table_type)
  const [frame,setFrame]=useState('')
  const [frame_time_limit,setFrame_time_limit]=useState('')
  const [rate,setRate]=useState('')
  const [price,setPrice]=useState('')
  // const [time,setTime]=useState('')
  const [ac,setAc]=useState('')


  const navigate = useNavigate()
  useEffect(()=>{
    if (Info){
      
          navigate('/')
     
      // setShouldValidate(false);
    }
    else{
      dispatch(ListTableDetail(id))


    }

  },[navigate,Info,dispatch,id])
  const submitHandler=(e)=>{
    e.preventDefault();  // Prevent default form submission
    dispatch(TableRegister(name,address,phonenumber,email,table_type,frame,frame_time_limit,rate,price,ac ))
    
    navigate("/start")
  }

  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   address: '',
  //   email: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission (e.g., send data to server or display it)
  //   console.log(formData);
  // };

  return (
    <div className='form-box'>
      <div className='form-container'>
        <h2>New Booking Form</h2>
        {error && <Errormsg varient='danger'>{ error }</Errormsg> }
        {loading && <Spinner/>}
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input type='tel' name='phone' value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}  required />
          </div>
          <div className='form-group'>
            <label>Address</label>
            <input type='text' name='address' value={address} onChange={(e)=>setAddress(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Table_type</label>
            <input type='Table_type' name='Table_type' value={detail.table_type} onChange={(e)=>setTable_type(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Rate</label>
            <input type='number' name='Rate' value={rate} onChange={(e)=>setRate(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input type='number' name='Price' value={price} onChange={(e)=>setPrice(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Frame</label>
            <input type='Frame' name='Frame' value={frame} onChange={(e)=>setFrame(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Frame_time_limit</label>
            <input type='time' name='Frame_time_limit' value={frame_time_limit} onChange={(e)=>setFrame_time_limit(e.target.value)}  />
          </div>
          {/* <div className='form-group'>
            <label>Time</label>
            <input type='time' name='time' value={time}  onChange={(e)=>setTime(e.target.value)}  />
          </div>
          */}
          <div className='form-group'>
            <label>Ac</label>
            <input type='checkbox' name='Ac' checked={ac}  onChange={(e)=>setAc(e.target.checked)}  />
          </div>
    
          {/* <div class="select-box">
            <select required>
              
            <option disabled selected hidden>Select an option</option>
            <option value="Frame">Frame-Based</option>
              <option value="Time">Time-Based</option>
            </select>
          </div> */}
          <div className='submit-btn'>
            
            <button type='submit'   >
              Submit
              </button>
            
          </div>
                
            
      </form>
        
      </div>
      
    
       
    </div>
 
    
      
  );
  
}





export default User;
