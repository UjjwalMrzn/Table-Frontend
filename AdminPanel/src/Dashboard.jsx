import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom'; // Importing useParams from react-router-dom
import Popup from './Popup.jsx';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector from react-redux
import { ListTableDetail } from './actions/tableAction'; // Assuming ListTableDetail is an action creator in your Redux setup

const Dashboard = () => {
  const { id } = useParams(); // Accessing 'id' from URL params

  const dispatch = useDispatch();
  const tabledetaillist = useSelector(state => state.tabledetaillist); // Assuming 'tabledetaillist' is part of your Redux state
  const { error, loading, detail } = tabledetaillist;

  const [tables, setTables] = useState([
    { id: 1, tableno: 'TABLE 1', framerate: 'Rs.500', timerate: 'Rs.8/min', status: 'Open', AC: 'Not-Available' },
    { id: 2, tableno: 'TABLE 2', framerate: 'Rs.600', timerate: 'Rs.8/min', status: 'Close', AC: 'Available' },
    { id: 3, tableno: 'TABLE 3', framerate: 'RS.300', timerate: 'Rs.8/min', status: 'Close', AC: 'Available' },
    { id: 4, tableno: 'TABLE 4', framerate: 'Rs.200', timerate: 'Rs.8/min', status: 'Open', AC: 'Not-Available'},
    { id: 5, tableno: 'TABLE 5', framerate: 'Rs.500', timerate: 'Rs.11/min', status: 'Open', AC: 'Available' },
    { id: 6, tableno: 'TABLE 6', framerate: 'Rs.300', timerate: 'Rs.15/min', status: 'Open', AC: 'Not-Available' },
    { id: 7, tableno: 'TABLE 7', framerate: 'Rs.200', timerate: 'Rs.11/min', status: 'Close' , AC: 'Available' },
  ]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [tableToDelete, setTableToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const tablesPerPage = 6;
  const totalPages = Math.ceil(tables.length / tablesPerPage);

  useEffect(() => {
    dispatch(ListTableDetail(id)); // Assuming ListTableDetail is an action creator that fetches table details based on 'id'
  }, [dispatch, id]);

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

  const currentTables = tables.slice(
    currentPage * tablesPerPage,
    (currentPage + 1) * tablesPerPage
  );

  return (
    <div className="container-db">
      <main className="main-content">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Table Number</th>
              <th>Frame Rate</th>
              <th>Time Rate</th>
              <th>Status</th>
              <th>A/C</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentTables.map((table, index) => (
              <tr key={index}>
                <td>{table.tableno}</td>
                <td>{table.framerate}</td>
                <td>{table.timerate}</td>
                <td>
  <span className={`status-dot ${table.status === 'Open' ? 'open' : 'close'}`} />
</td>

                    <td>
                  <span className={`AC ${table.AC}`}>
                    {table.AC}
                  </span>
                </td>
                <td>
                  <Link to={`/Details/${table.id}`}>
                    <button className="pay-btn">
                      View Details
                    </button>
                  </Link>
                  <Link to={`/user/${table.id}`}>
                    <button
                      className={`book-btn ${table.status === 'Close' ? 'disabled' : ''}`}
                      disabled={table.status === 'Close'}
                    >
                      {table.status === 'Close' ? 'Booked' : 'Book Now'}
                    </button>
                  </Link>
                  <button className="delete-btn" onClick={() => handleDeleteClick(table.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <Link to={`/Video/${id}`}> 
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
