import React, { useState,useEffect } from 'react';
import { useRoute } from 'wouter';
import { useDispatch,useSelector } from 'react-redux'

import { ListTableDetail } from './actions/tableAction'
function User() {


  // const dispatch=useDispatch()
  const [match, params] = useRoute('/user/:id');


  // const tabledetaillist =useSelector(state=>state.tabledetaillist)
  // const {error, loading , table}=tabledetaillist

  // useEffect(()=>{
  //   dispatch(ListTableDetail())


  // },[dispatch])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server or display it)
    console.log(formData);
  };

  return (
    <div className='form-box'>
      <div className='form-container'>
        <h2>New Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input type='tel' name='phone' value={formData.phone} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label>Address</label>
            <input type='text' name='address' value={formData.address} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} required />
          </div>
  
          <div class="select-box">
            <select required>
              
            <option disabled selected hidden>Select an option</option>
            <option value="Frame">Frame-Based</option>
              <option value="Time">Time-Based</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
      
  );
}





export default User;
