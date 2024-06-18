import React ,{useEffect} from 'react';
import { useParams,Link } from 'wouter'
import './Details.css'; // Import CSS file
import { useDispatch,useSelector } from 'react-redux'
import { ListTableDetail } from './actions/tableAction'
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'



function Details() {
  const{id}=useParams()
  const dispatch = useDispatch()
  const tabledetaillist =useSelector(state=>state.tabledetaillist)
  const { error, loading , detail}=tabledetaillist

  useEffect(()=>{
    dispatch(ListTableDetail(id))


  },[dispatch,id])

 

  return (
    <div  className='booking-details'>
     
      {loading ? <Spinner/>
               :error? <Errormsg>{error}</Errormsg>  
               :
         
                 <table>
                   <tbody>      
                      {detail.persondetail ?(
                        <>
                        <tr>
                        <td>Table</td>
                        <td colspan="3">{detail.table_type}</td> 
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td colspan="3">{detail.persondetail.Name}</td>
                        </tr>
                        <tr>
                          <td>PhoneNO</td>
                          <td colspan="3">{detail.persondetail.Phonenumber}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td colspan="3">{detail.persondetail.email}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td colspan="3">{detail.persondetail.Address}</td>
                        </tr>
                        <tr>
                          <td>Frame_Time_Limit</td>
                          <td colspan="3">{detail.frame_time_limit}</td>
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
                      ):(
                        <tr>
                          <td colSpan="2">No person details available</td>
                        </tr>
                      )}

                      
                  
                  </tbody>
                </table>
              
      }
        <div className='table-btn'>
             <a href='/'><button type='submit'>Table View</button></a> 
        </div>
    </div>
       

  );
}

export default Details;
