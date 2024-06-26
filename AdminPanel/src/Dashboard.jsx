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

  const dispatch = useDispatch();
  const tablelist = useSelector(state => state.tablelist);
  const { error, loading, table } = tablelist;

  useEffect(() => {
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
              {currentTables.map((item, index) => (
                <tr key={index}>
                 <td>
                    <span className={`tableno ${item.table_type}`}>{item.table_type}</span>
                  </td>
                  <td>{item.rate}</td>
                  <td>{item.price}</td>
                  <td>
                    <span className={`status-dot ${item.is_running}`} />
                  </td>
                  <td>
                    <span className={`AC ${item.ac}`}>
                      {item.ac ? 'Available' : 'Not Available'}
                    </span>
                  </td>
                  <td>
                    <Link to={`/details/${item.id}`}>
                      <button className="pay-btn">View Details</button>
                    </Link>
                    <Link to={`/BookNow`}>
                      <button
                        className={`book-btn ${item.is_running === true ? false : ''}`}
                        disabled={item.is_running}
                      >
                        {item.is_running === true ? 'Booked' : 'Book Now'}
                      </button>
                    </Link>
                    <Link to={`/user/${item.id}`}>
                      <button
                        className={`book-btn ${item.is_running === false ? false : ''}`}
                        disabled={item.is_running}
                      >
                        {item.is_running === false ? 'Pay Now1' : 'Pay Now'}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDeleteClick(item.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <Link to={`/Video/${item.id}`}>
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