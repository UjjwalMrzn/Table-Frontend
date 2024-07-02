// Assuming this is a functional component
import React, { useEffect, useState } from 'react';
import { useParams } from 'wouter'
import ReactPlayer from 'react-player';

const SnookerVideoStream = () => {
    const{id}=useParams()
    console.log('-----',id)

  return (
    <div>
      <h1>Snooker Video Stream</h1>
      <img  
      id="video" 
      src={`/api/video_feed/${id}/`} 
      width="1000" 
      height="500" 
      alt="Snooker Video Stream" />
    </div>
  );
};

export default SnookerVideoStream;
