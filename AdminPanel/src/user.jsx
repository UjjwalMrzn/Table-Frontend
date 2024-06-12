import React, { useState } from 'react';

function User() {
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
    <main className='main-container'>
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
          <button type='submit'>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default User;
