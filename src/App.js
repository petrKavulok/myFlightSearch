import './App.css';
import { useState, useEffect} from 'react';
import './components/FlightQuery.jsx'
import FlightQuery from './components/FlightQuery.jsx';
import FlightList from './components/FlightList';
import LoadMoreButton from './components/LoadMoreButton';
import Filter from './components/Filter';



function App() {

  const [from, setFrom] = useState('PRG');
  const [to, setTo] = useState('JFK');
  const [depart, setDepart] = useState('26/10/2021');
  const [returns, setReturns] = useState('26/11/2021');
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(5);
  const [direct, setDirect]  = useState(0);
  const [type, setType] = useState('oneway');
  const [sort, setSort] = useState('price');
  
//fetches results from api with provided conditions
  async function fetchResults() {

    let url = `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=${depart}&dateTo=${returns}&partner=data4youcbp202106&v=3&direct_flights=${direct}&limit=${limit}&flight_type=${type}&sort=${sort}`
    const results = await fetch(url);
    const data = await results.json();

    setData(data);
  }

//triggers the fetchResults function when any of the variables changes state
  useEffect(() => {
    console.log(direct)
    fetchResults()
  }, [from, to, depart, returns, direct, limit, sort])

  return (
    <div className="App">


      <FlightQuery 
        setFrom={setFrom} 
        setTo={setTo} 
        setDepart={setDepart}
        setReturns={setReturns}
        setDirect={setDirect} />

      <Filter setSort={setSort} />

      {data ? 
        data.status !=='Bad Request' ?
          <>
            <FlightList data={data} /> 
            <LoadMoreButton limit={limit} setLimit={setLimit}/>
          </>
          : 'tady'
        : 'tady'
      }

    </div>
  );
}

export default App;
