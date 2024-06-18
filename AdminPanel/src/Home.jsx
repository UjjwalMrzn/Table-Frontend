import React,{useEffect} from 'react';
import { TiTick } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'wouter';
import { useDispatch,useSelector } from 'react-redux'
import { ListTable } from './actions/tableAction'
import Errormsg from './components/Errormsg'
import Spinner from './components/Spinner'
function Home() {
  // const tables = [
  //   { id: 1, name: 'TABLE 1', framePrice: 'Rs.500', timePrice: 'Rs.8/min', occupied: true, ac: false },
  //   { id: 2, name: 'TABLE 2', framePrice: 'Rs.500', timePrice: 'Rs.8/min', occupied: false, ac: true },
  //   { id: 3, name: 'TABLE 3', framePrice: 'Rs.300', timePrice: 'Rs.5/min', occupied: false, ac: true },
  //   { id: 4, name: 'TABLE 4', framePrice: 'Rs.500', timePrice: 'Rs.8/min', occupied: true, ac: false },
  //   { id: 5, name: 'TABLE 5', framePrice: 'Rs.700', timePrice: 'Rs.11/min', occupied: true, ac: true },
  //   { id: 6, name: 'TABLE 6', framePrice: 'Rs.900', timePrice: 'Rs.15/min', occupied: false, ac: false },
  // ];
  const dispatch = useDispatch()
  const tablelist =useSelector(state=>state.tablelist)
  const {error,loading ,table}=tablelist

  useEffect(()=>{
    dispatch(ListTable())
  },[dispatch])

  return (

    <div>
      
      {loading ? <Spinner/>
               :error? <Errormsg>{error}</Errormsg>  
               :<main className='main-container'>
                <h1>
        List of Tables
      </h1>
            <div className='main-cards'>
              {table.map(table => (
                console.log('boolean',table.is_running),
                <Link to={table.is_running ? `/Details/${table.id}` : `/User/${table.id}`} style={{ textDecoration: 'none', color: 'white' }} key={table.id}>
                  <div className={`card ${table.is_running ? 'occupied' : 'not-occupied'}`}>
                    <div className='card-inner'>
                      <h3>{`Table${table.table_type}`}</h3>
                      {table.is_running ? (
                        <IoCloseSharp className='card_icon' />
                      ) : (
                        <TiTick className='card_icon' />
                      )}
                    </div>
                    <div className='price-container'>
                      {table.ac && (
                        <div className='ac'>
                          <h1>A/C</h1>
                        </div>
                      )}
                      <div className='price'>
                        <h1 className='frame-price'>Frame Price: {table.price}</h1>
                        <h1 className='time-price'>Time Price: {table.rate}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
                    
          }



    </div>
   
   
  );
}

export default Home;
