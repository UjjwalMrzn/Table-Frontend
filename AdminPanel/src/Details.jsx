import React from 'react';
import { useRoute } from 'wouter';
import './Details.css'; // Import CSS file

function Details() {
  const [match, params] = useRoute('/details/:id');

  const bookingDetails = {
    id: params.id,
    bookingNumber: '323168839',
    name: 'Ujjwal Maharjan',
    email: 'ujjwal.mrzn@gmail.com',
    phone: '9840209417',
    noOfAdults: 4,
    bookingDate: '2024-06-10 14:10:00',
    postingDate: '2024-05-27 10:05:04',
    bookingStatus: 'Accepted',
    updationDate: '2024-06-04 22:38:10',
    remark: 'Table booked'
  };

  return (
    <div className='booking-details'>
      <h1>Booking Details</h1>
      <table>
        <tbody>
          <tr>
            <td>Booking Number</td>
            <td colspan="3">{bookingDetails.bookingNumber}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td colspan="3">{bookingDetails.name}</td>
          </tr>

          <tr>
            <td>Mobile No</td>
            <td colspan="3">{bookingDetails.phone}</td>
          </tr>

          <tr>
          <td>Email Id</td>
          <td colspan="3">{bookingDetails.email}</td> 
          </tr>

          <tr>
          <td>No of Adults</td>
          <td colspan="3">{bookingDetails.noOfAdults}</td>
           
          </tr>
         
          <tr>
          <td>Booking Status</td>
          <td  colspan="3">{bookingDetails.bookingStatus}</td>
          
          </tr>
          <tr>
            <td>Posting Date</td>
            <td>{bookingDetails.postingDate}</td>
            <td>Updation Date</td>
            <td>{bookingDetails.updationDate}</td>
          </tr>
          <tr>
            <td>Remark</td>
            <td  colspan="3">{bookingDetails.remark}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
