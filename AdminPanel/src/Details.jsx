import React ,{useEffect} from 'react';
import { useParams,Link } from 'wouter'
import './Details.css'; // Import CSS file
import { useDispatch,useSelector } from 'react-redux'
import { ListTableDetail } from './actions/tableAction'
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'
function Details() {
  const{id}=useParams()
  const dispatch=useDispatch()
  const tabledetaillist =useSelector(state=>state.tabledetaillist)
  const {error, loading , table}=tabledetaillist

  useEffect(()=>{
    dispatch(ListTableDetail(id))


  },[dispatch,id])






  // const bookingDetails = {
  //   id: params.id,
  //   bookingNumber: '323168839',
  //   name: 'Ujjwal Maharjan',
  //   email: 'ujjwal.mrzn@gmail.com',
  //   phone: '9840209417',
  //   noOfPeople: 4,
  //   bookingDate: '2024-06-10 14:10:00',
  //   postingDate: '2024-05-27 10:05:04',
  //   bookingStatus: 'Accepted',
  //   updationDate: '2024-06-04 22:38:10',
  //   remark: 'Table booked'
  // };

  return (
    <div className='booking-details'>
      <h1>Booking Details</h1>

      {loading ? <Spinner/>
               :error? <Errormsg>{error}</Errormsg>  
               :
                <table>
                  <tbody>
                    <tr>
                      <td>Booking Number</td>
                      <td colspan="3">{table.table_type}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td colspan="3">{table.persondetail.Name}</td>
                    </tr>

                    <tr>
                      <td>Mobile No.</td>
                      <td colspan="3">{table.persondetail.Phonenumber}</td>
                    </tr>

                    <tr>
                    <td>Email Id</td>
                    <td colspan="3">{table.persondetail.email}</td> 
                    </tr>
                    <tr>
                      <td>Frame</td>
                      <td colspan="3">{table.frame}</td>
                    </tr>
                    <tr>
                      <td>Frame_Time_Limit</td>
                      <td colspan="3">{table.frame_time_limit}</td>
                    </tr>
                 
                    <tr>
                      <td>Start</td>
                      <td>{table.start_time}</td>
                      
                    </tr>
                    <tr>
                      <td>Time</td>
                      <td>{table.time}</td>
                      
                    </tr>
                   
                  </tbody>
                </table>
      }
    </div>
      
  );
}

export default Details;
