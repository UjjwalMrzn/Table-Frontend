import React from 'react';
import { TiTick } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'wouter';

function Home() {
  const tables = [
    { id: 1, name: 'TABLE 1', price: 'Rs.8/min', occupied: true },
    { id: 2, name: 'TABLE 2', price: 'Rs.8/min', occupied: false },
    { id: 3, name: 'TABLE 3', price: 'Rs.5/min', occupied: false },
    { id: 4, name: 'TABLE 4', price: 'Rs.8/min', occupied: true },
    { id: 5, name: 'TABLE 5', price: 'Rs.11/min', occupied: true },
    { id: 6, name: 'TABLE 6', price: 'Rs.15/min', occupied: false },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      <Link to={'/screens'}>
      <h3>hello</h3>

      </Link>

      <div className='main-cards'>
        {tables.map(table => (
          <Link to={"/User"}>
            <div className={`card ${table.occupied ? 'occupied' : 'not-occupied'}`}>
              <div className='card-inner'>
                <h3>{table.name}</h3>
                {table.occupied ? (
                  <IoCloseSharp className='card_icon' />
                ) : (
                  <TiTick className='card_icon' />
                )}
              </div>
              <h1>{table.price}</h1>
            </div>
          </Link>



        ))}
      </div>
    </main>
  );
}

export default Home;
