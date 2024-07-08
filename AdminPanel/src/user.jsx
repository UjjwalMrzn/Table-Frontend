
//frame


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'wouter';
import { ListTableDetail, ListUpadateTable, UserRegister } from './actions/tableAction';
import Errormsg from './components/Errormsg';
import Spinner from './components/Spinner';
import { useNavigate } from 'react-router-dom';
import './User.css'; // Import CSS file

function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [tableno, setTableNo] = useState('');
  const [frame, setFrame] = useState('');

  const { error, loading, User } = useSelector(state => state.Userstore);
  const { detail } = useSelector(state => state.tabledetaillist);

  useEffect(() => {
    if (User) {
      navigate(`/start/${id}/${User.id}`);
    } else {
      dispatch(ListTableDetail(id));
    }
  }, [dispatch, id, navigate, User]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(UserRegister(name, address, phonenumber, email, tableno, frame));
      dispatch(ListUpadateTable({ tableno: id, is_running: true }));
    } catch (error) {
      console.error("Error during form submission:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    if (detail) {
      setTableNo(detail.tableno);
    }
  }, [detail]);

  return (
    <div className='form-box'>
      <div className='user-form-container'>
        <h2>New Booking Form</h2>
        {error && <Errormsg varient='danger'>{error}</Errormsg>}
        {loading && <Spinner />}
        <form onSubmit={submitHandler}>
          <div className='form-group2'>
            <label>Name :</label>
            <input type='text' name='name' placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='form-group2'>
            <label>Phone :</label>
            <input type='tel' name='phone' placeholder='Enter a phone number' value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} required />
          </div>
          <div className='form-group2'>
            <label>Address :</label>
            <input type='text' name='address' placeholder='Enter an address' value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className='form-group2'>
            <label>Email :</label>
            <input type='email' name='email' placeholder='Enter an email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>


          <div className='form-group-row'>
            <label1>Table No. :</label1>
            <div className='row-input'>
            <input  type='number' name='tableno' value={tableno} readOnly />

            </div>
          
       
          <label2>Per Frame :</label2>
          <div className='row-input'>
            <input type='number' name='Per_Frame' value={detail.per_frame} />
            
          </div>
           
          </div>


          <div className='form-group-row'>

            <label1>Frame :</label1>
            <div className='row-input'>
            <input className='row-input' placeholder='Enter a frame number' type='text' name='Frame' value={frame} onChange={(e) => setFrame(e.target.value)} />
            </div>

            <label2>Frame Limit :</label2>
            <div className='row-input'>
            <input className='row-input' type='text' name='Frame_limit' value={detail.frame_limit} readOnly />
            </div>
          </div>
          
          <div className='form-group2'>
           
          </div>
          <div className='form-group2'>
            <label>A/C :</label>
            <div className='input-with-unit'>
              <label className='switch'>
                <input type="checkbox" name="Ac" checked={detail.ac} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className='submit-btn'>
            <button type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
