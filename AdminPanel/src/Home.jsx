import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'

function home() {
  return (
       
    <main className='main-container'>
    <div className='main-title'>
        <h3>DASHBOARD</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>TABLE 1</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>1</h1>
        </div>

        <div className='card'>
            <div className='card-inner'>
                <h3>TABLE 2</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>2</h1>
        </div>

        <div className='card'>
            <div className='card-inner'>
                <h3>TABLE 3</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>3</h1>
        </div>

        <div className='card'>
            <div className='card-inner'>
                <h3>TABLE 4</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>4</h1>
        </div>

        <div className='card'>
            <div className='card-inner'>
                <h3>TABLE 5</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>5</h1>
        </div>

        <div className='card'>
            <div className='card-inner'>
                <h3>TABLE 6</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>6</h1>
        </div>

    </div>

    </main>

  )
}

export default home
