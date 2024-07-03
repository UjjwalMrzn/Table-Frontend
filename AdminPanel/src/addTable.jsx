import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Errormsg from './components/Errormsg';
import Spinner from './components/Spinner';
import { TableRegister, RemoveInfo } from './actions/tableAction';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './App.css';

function AddTable() {
  const dispatch = useDispatch();
  const tableRegisterstore = useSelector((state) => state.tableRegisterstore);
  const { error, loading, Info } = tableRegisterstore;

  const [tableno, setTable_type] = useState('');
  const [rate, setRate] = useState('');
  const [price, setPrice] = useState('');
  const [frame_time_limit, setFrame_time_limit] = useState('');
  const [ac, setAc] = useState(false);
  const [is_running, setIsrunning] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (Info) {
      navigate('/dashboard');
    }
  }, [navigate, Info]);

  useEffect(() => {
    setIsrunning(false);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(
      TableRegister(tableno, rate, price, frame_time_limit, ac, is_running)
    );
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <h2>New Table</h2>
        {error && <Errormsg variant="danger">{error}</Errormsg>}
        {loading && <Spinner />}
        <Form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Table Number :</label>
            <div className='input-with-unitt'>
            <input
              type="number"
              name="tableno"
              value={tableno}
              onChange={(e) => setTable_type(e.target.value)}
            />
            </div>
          </div>
          <div className="form-group">
            <label>Time Rate :</label>
            <div className="input-with-unit">
            {/* <span className="unit">Rs.</span> */}

              <input
                type="number"
                name="Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
              <span className="unit">/ min.</span>
            </div>
          </div>
          <div className="form-group">
            <label>Frame Price :</label>
            <div className="input-with-unit">
            <span className="unit">Rs.</span>

              <input
                type="number"
                name="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span className="unit">/ frame</span>
            </div>
          </div>
          <div className="form-group">
            <label>Frame Time - Limit :</label>
            <div className='input-with-unit'> <input
              type="time"
              name="Frame_time_limit"
              value={frame_time_limit}
              onChange={(e) => setFrame_time_limit(e.target.value)}
            /></div>
          </div>
          <div className="form-group">
            <label>A/C :</label>
              <div className='input-with-unit'>
              <label className='switch'>
              <input
                type="checkbox"
                name="Ac"
                checked={ac}
                onChange={(e) => setAc(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
              </div>
          </div>
          <div className="submit-btn">
            <button type="submit">Add Table</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddTable;
