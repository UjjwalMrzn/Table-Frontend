import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'wouter'; // Importing useParams from react-router-dom
import Popup from './Popup.jsx';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector from react-redux
import { ListTable, RemoveInfo } from './actions/tableAction';
import { TiTick } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';
import Errormsg from './components/Errormsg';
import Spinner from './components/Spinner';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const tablelist =useSelector(state=>state.tablelist)
  const {error,loading ,table}=tablelist
 
  
  
  useEffect(()=>{
    dispatch(ListTable());
    dispatch(RemoveInfo());
  }, [dispatch]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // const [tableToDelete, setTableToDelete] = useState(null);

  // const handleDeleteClick = (id) => {
  //   setTableToDelete(id);
  //   setIsPopupVisible(true);
  // };

  // const handleConfirmDelete = () => {
    // Implement your delete logic here
    // setIsPopupVisible(false);
    // setTableToDelete(null);
    // Example logic:
    // const updatedTables = tables.filter(table => table.id !== tableToDelete);
    // setTables(updatedTables);
    // setCurrentPage(0); // Reset to first page in case of deletion
  // };

  // const handleCancelDelete = () => {
  //   setIsPopupVisible(false);
  //   setTableToDelete(null);
  // };

  // Pagination related variables and functions are commented out for now
  // const [currentPage, setCurrentPage] = useState(0);
  // const tablesPerPage = 6;
  // const totalPages = Math.ceil(table.length / tablesPerPage);

  // const handleNextPage = () => {
  //   if (currentPage < totalPages - 1) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePreviousPage = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const currentTables = table.slice(
  //   currentPage * tablesPerPage,
  //   (currentPage + 1) * tablesPerPage
  // );

  const currentTables = table; // Displaying all tables without pagination

  const gotouser = () => {
    // navigate(`/User/${table.id}`); // Ensure table.id exists or handle it
  };

  return (
    <div className="container-db">
      {loading ? (
        <Spinner />
      ) : error ? (
        <Errormsg>{error}</Errormsg>
      ) : (
        <main className='main-container'>
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
                 <td>
                    <span className={`tableno ${table.tableno}`}>{table.tableno}</span>
                  </td>
                  <td>{table.rate}</td>
                  <td>{table.per_frame}</td>
                  <td>
                    <span className={`status-dot ${table.is_running}`} />
                  </td>
                  <td>
                    <span className={`AC ${table.ac}`}>
                      {table.ac ? 'Available' : 'Not Available'}
                    </span>
                  </td>
                  <td>

                    {/* <Link to={`/details/${table.id}`}>
                      <button className="detail-btn">View Details</button> */}

                    <Link to={`/details/${table.tableno}`}>
                      <button className="pay-btn">View Details</button>
                    </Link>
                    <Link to={`/BookNow/${table.tableno}`}>
                      <button
                        className={`book-btn ${table.is_running  ? false : ''}`}
                        disabled={table.is_running}
                      >
                        {table.is_running  ? 'Booked' : 'Book Now'}
                      </button>
                    </Link>
                    {/* <Link to={`/PayNow/${table.id}`}>
                      <button
                        className={`pay-btn ${!table.is_running ? 'false' : ''}`}
                        disabled={!table.is_running}>
                        {table.is_running ? 'Pay Now' : 'Pay Now'}

                    <Link to={`/user/${table.tableno}`}>
                      <button
                        className={`book-btn ${table.is_running  ? false : ''}`}
                        disabled={table.is_running}
                      >
                        {table.is_running  ? 'Pay Now1' : 'Pay Now'}
                      </button>
                    </Link> */}

                  </td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDeleteClick(table.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <Link to={`/Video/${table.tableno}`}>
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
      )}

      {/* {isPopupVisible && (
        <Popup
          message="Are you sure you want to delete this table?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )} */}
    </div>
  );
};

export default Dashboard;



{/* <div className="pagination">
<button onClick={handlePreviousPage} disabled={currentPage === 0}>
  Previous
</button>
<button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
  Next
</button>

</div> */}