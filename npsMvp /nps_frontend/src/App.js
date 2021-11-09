
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Parks from "./Components/Parks";
import Header from "./Components/Header";

function App() {
  let [parks, setParks] = useState([]);

  const api_key= 'iniKRKvvMTdJxnoq7Akeftrbwxqpwx0LwhtPuFOF';

  const parksIndexStart = () =>{
      return Math.floor(Math.random() * (460 + 1));
  }

  const getSelectParks =  (stateSelect) =>{
       axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateSelect}&api_key=${api_key}`)
          .then(result =>{
              setParks(result.data.data);
          })
  }

  useEffect(() => {
      let indexStart = parksIndexStart();
      axios.get(`https://developer.nps.gov/api/v1/parks?limit=5&start=${indexStart}&api_key=${api_key}`)
          .then(result => {
              setParks(result.data.data);
          })
  }, [])

  return (
    <div>
        <div className='flex'>
            <Header getSelectParks={getSelectParks} />
        </div>
    <Parks parks={parks} />
    </div>
  );
}

export default App;
