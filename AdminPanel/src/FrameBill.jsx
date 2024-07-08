import React from 'react'
import './FrameBill.css';


const FrameBill = () => {
  return (
    <div className='container-bill1'>

    <h1>SNOOKER Pvt. Ltd.</h1>
    <h2>Kathmandu, Nepal</h2>
    <h3>TAX INVOICE</h3>
    
<div className='bill-details'>
    <p>Bill No.: #1234</p>
    <p>Sunday, December 21, 2004, 5:37:17 AM </p>
    <p>Employee: Mr.Kritish</p>
</div>

   

<main className='main-container'>
<table className="appointments-table">
  <thead>
    <tr>
      <th>Description</th>
      <th>Table No.</th>
      <th>Frame</th>
      <th>Time(Limit)</th>
      <th>Rate</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
</tbody>
</table>
</main>
</div>
       
    
    
  )
}

export default FrameBill