// import React, { useEffect } from 'react';
// import { useParams } from 'wouter';
// import { useDispatch, useSelector } from 'react-redux';
// import { ListTableDetail } from './actions/tableAction';
// import Errormsg from './components/Errormsg';
// import Spinner from './components/Spinner';
// import './FrameBill.css';

// const TimeBill = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const tableDetail = useSelector(state => state.tabledetaillist);
//   const { error, loading, detail } = tableDetail;

//   useEffect(() => {
//     console.log('Dispatching action for id:', id);
//     dispatch(ListTableDetail(id));
//   }, [dispatch, id]);

//   console.log('Detail:', detail);
//   console.log('Error:', error);
//   console.log('Loading:', loading);

//   return (
//     <div className='container-bill1'>
//       <h1>SNOOKER Pvt. Ltd.</h1>
//       <h2>Kathmandu, Nepal</h2>
//       <h3>TAX INVOICE</h3>
      
//       <div className='bill-details'>
//         <p>Bill No.: #1234</p>
//         <p>Sunday, December 21, 2004, 5:37:17 AM </p>
//         <p>Employee: Mr.Kritish</p>
//       </div>

//       <main className='main-container'>
//         {loading ? <Spinner /> :
//          error ? <Errormsg>{error}</Errormsg> :
//           (
//             detail.person ? (
//               <table className="appointments-table">
//                 <thead>
//                   <tr>
//                     <th>Description</th>
//                     <th>Table No.</th>
//                     <th>Frame</th>
//                     <th>Time(Limit)</th>
//                     <th>Rate</th>
//                     <th>Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Snooker</td>
//                     <td>{detail.tableno}</td>
//                     <td>{detail.person.frame}</td>
//                     <td>{detail.played_time} ({detail.frame_limit})</td>
//                     <td>{detail.rate}</td>
//                     <td>{detail.price}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             ) : (
//               <tr>
//               <td colSpan="2">No details available</td>
//               </tr>
//             )
//           )
//         }
//       </main>
//     </div>
//   );
// }

// export default TimeBill;
