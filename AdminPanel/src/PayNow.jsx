import React ,{useEffect} from 'react';
import { useParams,Link } from 'wouter'
import Button from 'react-bootstrap/Button';

import './Details.css'; // Import CSS file
import { useDispatch,useSelector } from 'react-redux'
import { ListTableDetail,DeleteTable } from './actions/tableAction'
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'
import { useNavigate, useLocation } from 'react-router-dom';



function PayNow() {
  const{id}=useParams()
  const dispatch = useDispatch()
  const tabledetaillist =useSelector(state=>state.tabledetaillist)
  const { error, loading , detail}=tabledetaillist
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(ListTableDetail(id))


  },[dispatch,id])  
  const submitHandler=(e)=>{
    dispatch(DeleteTable({
      tableno:id
  }))
    console.log('delete')
    navigate('/dashboard',{ replace: true })
  }
 

  return (
    <div  className='booking-details'>
     
      {loading ? <Spinner/>
               :error? <Errormsg>{error}</Errormsg>  
               : 
                  <form onSubmit={submitHandler}>
                  <table >
                    <tbody>      
                        {detail.person ?(
                          
                          (detail.time_based ?(
                          <>
                          <tr>
                          <td>Table</td>
                          <td colspan="3">{detail.tableno}</td> 
                          </tr>
                          <tr>
                            <td>Name</td>
                            <td colspan="3">{detail.person.Name}</td>
                          </tr>
                          <tr>
                            <td>PhoneNO</td>
                            <td colspan="3">{detail.person.Phonenumber}</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td colspan="3">{detail.person.email}</td>
                          </tr>
                          
                          <tr>
                            <td>Address</td>
                            <td colspan="3">{detail.person.Address}</td>
                          </tr>
                          <tr>
                            <td>Played time</td>
                            <td colspan="3">{detail.played_time}</td>
                          </tr>
                         
                      
                          <tr>
                            <td>Price</td>
                            <td>{detail.price}</td>
                            
                          </tr>
                          
                          </>
                        ):
                        
                        detail.frame_based ?(
                          <>
                          <tr>
                          <td>Table</td>
                          <td colspan="3">{detail.tableno}</td> 
                          </tr>
                          <tr>
                            <td>Name</td>
                            <td colspan="3">{detail.person.Name}</td>
                          </tr>
                          <tr>
                            <td>PhoneNO</td>
                            <td colspan="3">{detail.person.Phonenumber}</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td colspan="3">{detail.person.email}</td>
                          </tr>
                          
                          <tr>
                            <td>Address</td>
                            <td colspan="3">{detail.person.Address}</td>
                          </tr>
                          <tr>
                            <td>Frame</td>
                            <td colspan="3">{detail.person.frame}</td>
                          </tr>
                          <tr>
                            <td>Frame_Limit</td>
                            <td colspan="3">{detail.frame_limit}</td>
                          </tr>
                          <tr>
                            <td>Played time</td>
                            <td colspan="3">{detail.played_time}</td>
                          </tr>
                         
                          <tr>
                            <td>Price</td>
                            <td>{detail.price}</td>
                            
                          </tr>
                          
                          </>
                        ):(
                          <tr>
                          <td colSpan="2">No details available</td>
                          </tr>
                        )
                      
                      )
                      
                      
                      ):(
                          <tr>
                            <td colSpan="2">No person details available</td>
                          </tr>
                        )}
                        {/* <div className='main-cards'>
                        {detail.map(item=>(
                          <div key={item.id}>
                            {item.person.Name}

                          </div>
                        ))}
                      </div> */}
                        
                        <div className='table-btn'>
                        
                          <button variant="outline-success" className='tbl-btn2' type="submit">Done Payment</button>
                          
                      </div>
                    </tbody>
                  </table>
                </form>
               
              
      }
        
    </div>
       

  );
}

export default PayNow;
