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
            <label for='time'>
                <input type='checkbox'/>
                <FontAwesomeIcon icon={faTrash} />
                <h4>Time Based</h4>
                </label>
               

                   
</div>

<div className='tile'>
<label for='frame'>
                <input type='checkbox'/>
                <FontAwesomeIcon icon={faTrash} />
                <h4>Frame Based</h4>
                </label>

</div></div>
           
                    
            
        {/* </div>
        </div> */}
        
    
    </>
  )
}

export default Booknow