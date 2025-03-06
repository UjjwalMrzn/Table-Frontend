import React from 'react';
import '../../styles/components/Popup.css';

const Popup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onConfirm} className="popup-btn confirm-btn">Confirm</button>
        <button onClick={onCancel} className="popup-btn cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default Popup;
