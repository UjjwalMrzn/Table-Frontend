// Assuming this is a functional component
import React, { useEffect, useState } from 'react';
import { useParams } from 'wouter'

const SnookerVideoStream = () => {
    const{id}=useParams()
    console.log('-----',id)

  return (
    <div>
      <h1>Snooker Video Stream</h1>
      <img id="video" 
      src={`http://127.0.0.1:8000/api/video_stream/${id}/`} 
      width="500" 
      height="500" 
      alt="Snooker Video Stream" />
    </div>
  );
};

export default SnookerVideoStream;
