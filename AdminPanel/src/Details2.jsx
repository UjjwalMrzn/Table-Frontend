// import React ,{useEffect} from 'react';
// import { useParams,Link } from 'wouter'
// import Button from 'react-bootstrap/Button';

// import './Details.css'; // Import CSS file
// import { useDispatch,useSelector } from 'react-redux'
// import { ListTableDetail } from './actions/tableAction'
// import Errormsg from './components/Errormsg'
// import Spinner from './components/Spinner'



// function Details2() {
//   const{id}=useParams()
//   const dispatch = useDispatch()
//   const tabledetaillist =useSelector(state=>state.tabledetaillist)
//   const { error, loading , detail}=tabledetaillist

//   useEffect(()=>{
//     dispatch(ListTableDetail(id))


//   },[dispatch,id])

 

//   return (
//     <div  className='booking-details'>
     
//       {loading ? <Spinner/>
//                :error? <Errormsg>{error}</Errormsg>  
//                :
         
//                  <table>
//                    <tbody>      
//                       {detail.person ?(
//                         <>
//                         <tr>
//                         <td>Table</td>
//                         <td colspan="3">{detail.tableno}</td> 
//                         </tr>
//                         <tr>
//                           <td>Name</td>
//                           <td colspan="3">{detail.person.Name}</td>
//                         </tr>
//                         <tr>
//                           <td>Phone No.</td>
//                           <td colspan="3">{detail.person.Phonenumber}</td>
//                         </tr>
//                         <tr>
//                           <td>Email</td>
//                           <td colspan="3">{detail.person.email}</td>
//                         </tr>
                        
//                         <tr>
//                           <td>Address</td>
//                           <td colspan="3">{detail.person.Address}</td>
//                         </tr>
//                         <tr>
//                           <td>Frame</td>
//                           <td colspan="3">{detail.person.frame}</td>
//                         </tr>
//                         <tr>
//                           <td>Frame Limit</td>
//                           <td colspan="3">{detail.frame_limit}</td>
//                         </tr>
                    
//                         <tr>
//                           <td>Start</td>
//                           <td>{detail.start_time}</td>
                          
//                         </tr>
//                         <tr>
//                           <td>Time</td>
//                           <td>{detail.time}</td>
                          
//                         </tr> 
//                         </>
//                       ):(
//                         <tr>
//                           <td colSpan="2">No person details available</td>
//                         </tr>
//                       )}
//                       {/* <div className='main-cards'>
//                       {detail.map(item=>(
//                         <div key={item.id}>
//                           {item.person.Name}

//                         </div>
//                       ))}
//                     </div> */}
                      
                  
//                   </tbody>
//                 </table>
              
//       }
//        <div className='table-btn'>
//   <Link to={`/video/${id}`}>
//     <Button className='tbl-btn1' variant="outline-success">View Table</Button>
//   </Link>

//   <Link to={`/framebill/${id}`}>
//     <Button className='tbl-btn2' variant="outline-success">Pay Now</Button>
//   </Link>
// </div>

        
//     </div>
       

//   );
// }

// export default Details2;
