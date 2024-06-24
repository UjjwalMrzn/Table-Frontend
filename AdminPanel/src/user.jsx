import React, { useState,useEffect } from 'react';
import { useRoute } from 'wouter';
import { useDispatch,useSelector } from 'react-redux'
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'
import { TableRegister } from './actions/tableAction'
import { useNavigate, useLocation } from 'react-router-dom'
function User() {

  const dispatch=useDispatch()
  const [match, params] = useRoute('/user/:id');
  const tableRegister =useSelector(state=>state.tableRegister)
  const {error, loading , info}=tableRegister


  const [Name,setName]=useState('')
  const [Address,setAddress]=useState('')
  const [Phonenumber,setPhonenumber]=useState('')
  const [Email,setEmail]=useState('')
  const [Table_type,setTable_type]=useState('')
  const [Rate,setRate]=useState('')
  const [Price,setPrice]=useState('')
  const [Frame,setFrame]=useState('')
  const [Frame_time_limit,setFrame_time_limit]=useState('')
  const [Ac,setAc]=useState('')

  const navigate = useNavigate()

  const submitHandler=(e)=>{
    dispatch(TableRegister(Name,Address,Phonenumber,Email,Table_type,Rate,Price,Frame,Frame_time_limit,Ac))
    navigate("/")
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
            <input type='text' name='name' value={Name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input type='tel' name='phone' value={Phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}  required />
          </div>
          <div className='form-group'>
            <label>Address</label>
            <input type='text' name='address' value={Address} onChange={(e)=>setAddress(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' name='email' value={Email} onChange={(e)=>setEmail(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Table_type</label>
            <input type='Table_type' name='Table_type' value={Table_type} onChange={(e)=>setTable_type(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Rate</label>
            <input type='Rate' name='Rate' value={Rate} onChange={(e)=>setRate(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input type='Price' name='Price' value={Price} onChange={(e)=>setPrice(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Frame</label>
            <input type='Frame' name='Frame' value={Frame} onChange={(e)=>setFrame(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Frame_time_limit</label>
            <input type='Frame_time_limit' name='Frame_time_limit' value={Frame_time_limit} onChange={(e)=>setFrame_time_limit(e.target.value)}  />
          </div>
          <div className='form-group'>
            <label>Ac</label>
            <input type='checkbox' name='Ac' checked={Ac}  onChange={(e)=>setAc(e.target.checked)}  />
          </div>
    
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





export default User;
