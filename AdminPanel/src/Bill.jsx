import React, { useState, useEffect } from 'react';
import { useParams } from 'wouter';
import { useDispatch, useSelector } from 'react-redux';
import { ListTableDetail, DeleteTable } from './actions/tableAction';
import Errormsg from './components/Errormsg';
import Spinner from './components/Spinner';
import './FrameBill.css';
import { useNavigate } from 'react-router-dom';
import { convertNumberToWords } from './numberToWords';

const FrameBill = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const tableDetail = useSelector(state => state.tabledetaillist);
  const { error, loading, detail } = tableDetail;
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    console.log('Dispatching action for id:', id);
    dispatch(ListTableDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = new Date();
      updatedTime.setSeconds(0); // Reset seconds to 0
      setCurrentTime(updatedTime);
    }, 60000); // Update every minute (60 seconds)

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const submitHandler = (e) => {
    dispatch(DeleteTable({ tableno: id }));
    console.log('delete');
    navigate('/dashboard', { replace: true });
  };

  const amountInWords = detail?.price ? convertNumberToWords(detail.price) : '';

  console.log('Detail:', detail);
  console.log('Error:', error);
  console.log('Loading:', loading);

  return (
    <>
      <div className='container-bill1'>  
        <h1>SNOOKER Pvt. Ltd.</h1>
        <h2>Kathmandu, Nepal</h2>
        <h3>TAX INVOICE</h3>

        <div className='bill-details'>
          <b>Bill No.: #1234</b><br/>
          <b>{currentTime.toLocaleString()}</b><br/>
          <b>Bill To : {detail?.person?.Name}</b><br/>
          <b>Cashier : Mr.Kritish</b><br/>
        </div>

        <main className='main-container'>
          {loading ? (
            <Spinner />
          ) : error ? (
            <Errormsg>{error}</Errormsg>
          ) : detail ? (
            <table className='bill-table'>
              <thead>
                {detail.person && detail.time_based && (
                  <tr>
                    <th>Description</th>
                    <th>Table No.</th>
                    <th>Time Played</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                )}
                {detail.person && detail.frame_based && (
                  <tr>
                    <th>Description</th>
                    <th>Table No.</th>
                    <th>Frame</th>
                    <th>Time(Limit)</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {detail.person ? (
                  <>
                    {detail.time_based ? (
                      <tr>
                        <td>Snooker</td>
                        <td>{detail.tableno}</td>
                        <td>{detail.played_time}</td>
                        <td>{detail.rate}</td>
                        <td>{detail.price}</td>
                      </tr>
                    ) : detail.frame_based ? (
                      <tr>
                        <td>Snooker</td>
                        <td>{detail.tableno}</td>
                        <td>{detail.person.frame}</td>
                        <td>{detail.played_time} ({detail.frame_limit})</td>
                        <td>{detail.rate}</td>
                        <td>{detail.price}</td>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan='6'>No details available</td>
                      </tr>
                    )}
                  </>
                ) : (
                  <tr>
                    <td colSpan='6'>No details available</td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : (
            <p>No details available</p>
          )}
        </main>

        <div className='subtotal'>
          <p>Sub Total : Rs. {detail?.price}</p>
          <p>Discount : Rs. 0</p>
          <p>Net Amount : Rs. {detail?.price}</p>
        </div>

        <div className='inwords'>
          <p>
            In Words: {amountInWords ? `${amountInWords} rupees only` : null}
          </p>
        </div>
      </div>

      <div className='bill-btn'>
        <button type='submit' onClick={submitHandler}>
          Done Payment
        </button>
      </div>
    </>
  );
};

export default FrameBill;
