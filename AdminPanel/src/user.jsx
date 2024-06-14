import React, { useState } from 'react';
import { useRoute } from 'wouter';

function User() {
  const [match, params] = useRoute('/user/:id');
  const tableId = params?.id;

  const tables = [
    { id: 1, name: 'TABLE 1', price: 'Rs.8/min' },
    { id: 2, name: 'TABLE 2', price: 'Rs.8/min' },
    { id: 3, name: 'TABLE 3', price: 'Rs.5/min' },
    { id: 4, name: 'TABLE 4', price: 'Rs.8/min' },
    { id: 5, name: 'TABLE 5', price: 'Rs.11/min' },
    { id: 6, name: 'TABLE 6', price: 'Rs.15/min' },
  ];

  const table = tables.find(t => t.id === parseInt(tableId));

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
          <div><p>Price: {table ? table.price : 'N/A'}</p></div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
      
  );
}

export default User;
