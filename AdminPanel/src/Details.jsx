import React from 'react';
import { useRoute } from 'wouter';
import './Details.css'; // Import CSS file

function Details() {
  const [match, params] = useRoute('/details/:id');

  const bookingDetails = {
    id: params.id,
    bookingNumber: '323168839',
    name: 'Ujjwal',
    email: 'ujjwal.mrzn@gmail.com',
    phone: '9840209417',
    noOfAdults: 4,
    noOfChildren: 0,
    bookingDate: '2024-06-10 14:10:00',
    postingDate: '2024-05-27 10:05:04',
    bookingStatus: 'Accepted',
    updationDate: '2024-06-04 22:38:10',
    remark: 'Table booked.'
  };

  return (
    <div className='booking-details'>
      <h2>Booking Details</h2>
      <table>
        <tbody>
          <tr>
            <td>Booking Number</td>
            <td>{bookingDetails.bookingNumber}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{bookingDetails.name}</td>
            <td>Email Id</td>
            <td>{bookingDetails.email}</td>
          </tr>
          <tr>
            <td>Mobile No</td>
            <td>{bookingDetails.phone}</td>
            <td>No of Adults</td>
            <td>{bookingDetails.noOfAdults}</td>
          </tr>
          <tr>
            <td>No of Children</td>
            <td>{bookingDetails.noOfChildren}</td>
            <td>Booking Date / Time</td>
            <td>{bookingDetails.bookingDate}</td>
          </tr>
          <tr>
            <td>Posting Date</td>
            <td>{bookingDetails.postingDate}</td>
            <td>Booking Status</td>
            <td>{bookingDetails.bookingStatus}</td>
          </tr>
          <tr>
            <td>Updation Date</td>
            <td>{bookingDetails.updationDate}</td>
          </tr>
          <tr>
            <td>Remark</td>
            <td>{bookingDetails.remark}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
