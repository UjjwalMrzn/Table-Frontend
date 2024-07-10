// Assuming this is a functional component
import React, { useEffect, useState } from 'react';
import { useParams } from 'wouter'
import ReactPlayer from 'react-player';
import { ListTableDetail,timer } from './actions/tableAction'

import { useDispatch,useSelector } from 'react-redux'


const SnookerVideoStream = () => {
    const tabledetaillist =useSelector(state=>state.tabledetaillist)
    const { detail}=tabledetaillist
    const{id}=useParams()
    const dispatch = useDispatch();

    console.log('-----',id)
    console.log('--frame---',detail.frame_based)
    console.log('---time--',detail.time_based)
    useEffect(() => {
    
        dispatch(ListTableDetail(id));
      
    }, [dispatch, id]);
  return (
    <div>
      <h1>Snooker Video Stream</h1>
      {detail.frame_based && detail.is_running? (
      <img  
      id="video" 
      src={`/api/video_feed/${id}/`} 
      width="1000" 
      height="500" 
      alt="Snooker Video Stream" />
      )


      :detail.time_based && detail.is_running? (
      <img  
      id="video" 
      src={`/api/timer_video_feed/${id}/`} 
      width="1000" 
      height="500" 
      alt="Snooker Video Stream" />
      )
      :(
        <h3>no video</h3>
      )
      
    }
    </div>
  );
};

export default SnookerVideoStream;

