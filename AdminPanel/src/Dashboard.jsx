import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'wouter'; // Importing useParams from react-router-dom
import Popup from './Popup.jsx';
import { useDispatch, useSelector ,} from 'react-redux'; // Importing useDispatch and useSelector from react-redux
import { ListTable ,RemoveInfo} from './actions/tableAction'
import { TiTick } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';




const Dashboard = () => {

  const navigate=useNavigate()
  // const { id } = useParams(); // Accessing 'id' from URL params

  const dispatch = useDispatch()
  const tablelist =useSelector(state=>state.tablelist)
  const {error,loading ,table}=tablelist
 
  
  
  useEffect(()=>{
    dispatch(ListTable());
    dispatch(RemoveInfo());
    
      },[dispatch])

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [tableToDelete, setTableToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const tablesPerPage = 6;
  const totalPages = Math.ceil(table.length / tablesPerPage);

 

  const handleDeleteClick = (id) => {
    setTableToDelete(id);
    setIsPopupVisible(true);
  };

  const handleConfirmDelete = () => {
    const updatedTables = tables.filter(table => table.id !== tableToDelete);
    setTables(updatedTables);
    setIsPopupVisible(false);
    setTableToDelete(null);
    setCurrentPage(0); // Reset to first page in case of deletion
  };

  const handleCancelDelete = () => {
    setIsPopupVisible(false);
    setTableToDelete(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentTables = table.slice(
    currentPage * tablesPerPage,
    (currentPage + 1) * tablesPerPage
  );


const gotouser =()=>{
  navigate(`/User/${table.id}`)
}

return (
    <div className="container-db">

      {loading ? <Spinner/>
               :error? <Errormsg>{error}</Errormsg>  
               :<main className='main-container'>
              
               {/* <h1>
                   List of Tables
               </h1> */}
      
      
          
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Table No.</th>
                  <th>Frame Rate</th>
                  <th>Time Rate</th>
                  <th>Status</th>
                  <th>A/C</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentTables.map((table, index) => (
                  <tr key={index}>
                    <td>{table.table_type}</td>
                    <td>{table.rate}</td>
                    <td>{table.price}</td>
                    <td>
                     
                        
                        <span className={`status-dot  ${table.is_running}`} />
                    
                    
                    </td>
                        <td>
                      <span className={`AC ${table.ac}`}>
                        {table.ac?'Available':'Not-Available'}
                      </span>
                    </td>
                    <td>
                      <Link to={`/details/${table.id}`}>
                        <button className="pay-btn">
                          View Details
                        </button>
                      </Link>
                      <Link to={`/user/${table.id}`}>
                      <button 
                        
                        className={`book-btn ${table.is_running === true ? false : ''}`}
                        disabled={table.is_running}
                      >
                        {table.is_running === true ? 'Booked' : 'Book Now'}
                      </button>
                      </Link>
                    </td>
                    <td>
                    <button className="delete-btn" onClick={() => handleDeleteClick(table.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <Link to={`/Video/${table.id}`}> 
                        <button className="view-btn">
                          <FontAwesomeIcon icon={faVideo} />
                        </button> 
                      </Link>

                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
        </main>
      }


        {isPopupVisible && (
          <Popup 
            message="Are you sure you want to delete this table?" 
            onConfirm={handleConfirmDelete} 
            onCancel={handleCancelDelete} 
          />
        )}

        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 0}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
            Next
          </button>

        </div>
       
    </div>
  );
};

export default Dashboard;
