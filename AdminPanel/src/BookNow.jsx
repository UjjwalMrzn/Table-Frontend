import React from 'react'
import './BookNow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faVideo } from '@fortawesome/free-solid-svg-icons';

const Booknow = () => {
  return (
    <>
        {/* <div className='BookNow_box'>
        <div className='BookNow_container'> */}

            <div className='section'> 
                {/* <h5>Choose Game Type</h5> */}
            <div className='tile'>
                <input type='checkbox'/>
                <label for='time'>
                <FontAwesomeIcon icon={faTrash} />
                <h4>Time Based</h4>
                </label>
               

                   
</div>

<div className='tile'>
                <input type='checkbox'/>
                <label for='frame'>
                <FontAwesomeIcon icon={faTrash} />
                <h4>Frame Based</h4>
                </label>

</div>

</div>
           
                    
            
     
        
    
    </>
  )
}

export default Booknow