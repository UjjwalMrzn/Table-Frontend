import React, { useEffect } from 'react';
import { useParams, Link,  } from 'wouter';
import Button from 'react-bootstrap/Button';

import '../styles/pages/Details.css'; // Import CSS file
import { useDispatch, useSelector } from 'react-redux';
import { ListTableDetail } from '../state/actions/tableAction';
import Errormsg from '../components/common/Errormsg';
import Spinner from '../components/common/Spinner';
import { useNavigate, useLocation } from 'react-router-dom';


function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const tabledetaillist = useSelector(state => state.tabledetaillist);
  const { error, loading, detail } = tabledetaillist;

  useEffect(() => {
    dispatch(ListTableDetail(id));
  }, [dispatch, id]);

  return (
    <div className='booking-details'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Errormsg>{error}</Errormsg>
      ) : (
        <table>
          <tbody>
            {detail.person ? (
              detail.time_based ? (
                <>
                  <tr>
                    <td>Table</td>
                    <td colSpan="3">{detail.tableno}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td colSpan="3">{detail.person.Name}</td>
                  </tr>
                  <tr>
                    <td>Phone No.</td>
                    <td colSpan="3">{detail.person.Phonenumber}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td colSpan="3">{detail.person.email}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td colSpan="3">{detail.person.Address}</td>
                  </tr>
                  <tr>
                    <td>Start</td>
                    <td>{detail.start_time}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{detail.time}</td>
                  </tr>
                </>
              ) : detail.frame_based ? (
                <>
                  <tr>
                    <td>Table</td>
                    <td colSpan="3">{detail.tableno}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td colSpan="3">{detail.person.Name}</td>
                  </tr>
                  <tr>
                    <td>Phone No.</td>
                    <td colSpan="3">{detail.person.Phonenumber}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td colSpan="3">{detail.person.email}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td colSpan="3">{detail.person.Address}</td>
                  </tr>
                  <tr>
                          <td>Frame</td>
                          <td colspan="3">{detail.person.frame}</td>
                        </tr>
                        <tr>
                         <td>Frame Limit</td>
                          <td colspan="3">{detail.frame_limit}</td>
                         </tr>
                  <tr>
                    <td>Time</td>
                    <td>{detail.time}</td>
                  </tr>
                </>
              ) : (
                <tr>
                  <td colSpan="2">No person details available</td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="2">No person details available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <div className='table-btn'>
        <Link to={`/video/${id}`}>
          <Button className='tbl-btn1' variant="outline-success">View Table</Button>
        </Link>
        <Link to={`/bill/${id}`}>
          <Button className='tbl-btn2' variant="outline-success">Pay Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
