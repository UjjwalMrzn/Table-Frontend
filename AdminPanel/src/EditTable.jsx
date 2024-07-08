import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Errormsg from './components/Errormsg';
import Spinner from './components/Spinner';
import { TableRegister, RemoveInfo } from './actions/tableAction';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './AddTable.css';
import { useParams } from 'wouter';
import { ListTableDetail, ListUpadateTable, UserRegister } from './actions/tableAction';

function EditTable() {
const { id } = useParams();
  const dispatch = useDispatch();
  const tableRegisterstore = useSelector((state) => state.tableRegisterstore);
  const { error, loading, Info } = tableRegisterstore;

  // const [name,setName]=useState('')ListTableDetail 
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

  const navigate = useNavigate();

  const { detail } = useSelector(state => state.tabledetaillist);

  useEffect(() => {
   
      dispatch(ListTableDetail(id));
    
  }, [dispatch, id ]);
  useEffect(() => {
    if (Info) {
      navigate('/dashboard');
    }
  }, [navigate, Info]);

  useEffect(() => {
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
    <div className="form-box">
      <div className="form-container">
        <h2>Edit Table</h2>
        {error && <Errormsg variant="danger">{error}</Errormsg>}
        {loading && <Spinner />}
        <Form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Table Number :</label>
            <div className='input-with-unitt'>
            <input
              placeholder='Enter a number'
              type="number"
              name="tableno"
              value={detail.tableno}
              onChange={(e) => setTable_type(e.target.value)}
            />
            </div>
          </div>
          <div className="form-group">
            <label>Per Minutes:</label>
            <div className="table-input-with-unit">
            {/* <span className="unit">Rs.</span> */}

              <input
                placeholder='Enter a price'
                type="number"
                name="Rate"
                value={detail.rate}
                onChange={(e) => setRate(e.target.value)}
              />
              <span className="unit">/ min.</span>
            </div>
          </div>
          <div className='form-group'>
            <label>Per Frame :</label>
            <div className='table-input-with-unit'>
            <input type='number' placeholder='Enter a price' name='per_frame' value={detail.per_frame} onChange={(e)=>setper_frame(e.target.value)}  />
            <span className="unit">/ frame</span>

          </div>
          </div>

          <div className='form-group'>
            <label>Frame Time - Limit :</label>
            <div className='table-input-with-unit'>
            <input type='timer' name='Frame_limit' value={detail.frame_limit} onChange={(e)=>setFrame_limit(e.target.value)}  />
          </div>
          </div>
          <div className="form-group">
            <label>A/C :</label>
              <div className='table-input-with-unit'>
              <label className='switch'>
              <input
                type="checkbox"
                name="Ac"
                checked={detail.ac}
                onChange={(e) => setAc(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
              </div>
          </div>
          <div className="submit-btn">
            <button type="submit">Edit Table</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditTable;
