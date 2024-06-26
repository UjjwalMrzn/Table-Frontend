import React from 'react';
import { Link } from 'react-router-dom';
import './BookNow.css';
import { useDispatch, useSelector ,} from 'react-redux'; // Importing useDispatch and useSelector from react-redux

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock as faClockSolid } from '@fortawesome/free-solid-svg-icons';
// import { faClock as faClockRegular } from '@fortawesome/free-regular-svg-icons';
import { FaRegClock } from "react-icons/fa6";
import { FiTriangle } from "react-icons/fi";



const Booknow = () => {

  const tablelist =useSelector(state=>state.tablelist)
  const {error,loading ,table}=tablelist
  return (
    <>
    <div className='checkbox-box'>
    <div className='chechkbox-container'>
      <h6>Choose an option.</h6>
    <div className="section">
        <div className="tile">
          <Link to={`/user/${table.id}`}>
          <input type="checkbox" id="time"/>
          <label htmlFor="time">
          <FaRegClock  className="fas"/>
            {/* <FontAwesomeIcon icon={faClockRegular} className="fas" /> */}
            <h4>Time Based</h4>
          </label>
          </Link>
        </div>
        
        

        <div className="tile">
        <Link to={`/user/${table.id}`}>
          <input type="checkbox" id="frame" />
          <label htmlFor="frame">
          <FiTriangle  className="fas"/>
            {/* <FontAwesomeIcon icon={faClockRegular} className="fas" /> */}
            <h4>Frame Based</h4>
          </label>
          </Link>
        </div>
      </div>


    </div>
    </div>
      
    </>
  );
}

export default Booknow;