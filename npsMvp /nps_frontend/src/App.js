import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Parks from "./Components/Parks/Parks";
import Header from "./Components/Header/Header";

function App() {
    let [parks, setParks] = useState([]);

    const api_key = 'iniKRKvvMTdJxnoq7Akeftrbwxqpwx0LwhtPuFOF';

    const parksIndexStart = () => {
        return Math.floor(Math.random() * (460 + 1));
    }

    const getSelectParks = (e, stateSelect) => {
        e.preventDefault();
        axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateSelect}&api_key=${api_key}`)
            .then(result => {
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

    const handleSignUp = () => {

    }


    return (
        <div className='bg-wallpaperOne bg-contain'>
            <div className='w-screen'>
                <Header
                    getSelectParks={getSelectParks}
                    handleSignUp={handleSignUp}
                />
            </div>
            <div className='h-auto'>
                <Parks parks={parks}/>

            </div>
        </div>
    );
}

export default App;
