import {useState} from "react";
import {gray} from "tailwindcss/colors";
import {Hint} from "react-autocomplete-hint";

const Header = ({getSelectParks, handleSignUp}) => {
    let [currentState, setCurrentState] = useState('');
    let [login, setLogin] = useState(false);
    let [explore, setExplore] = useState(false);

    const states = ["Alabama", "Alaska",  "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia",
        "Delaware", "Florida", "Georgia", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas",
        "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi",
        "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada",
        "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin",
        "West Virginia", "Wyoming"];

    const stateCodes = {
        "Alabama": "AL", "Alaska": "AK", "American Samoa": "AS", "Arizona": "AZ", "Arkansas": "AR", "California": "CA",
        "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE", "District Of Columbia": "DC", "Florida": "FL",
        "Georgia": "GA", "Guam": "GU", "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA",
        "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD", "Massachusetts": "MA",
        "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO", "Montana": "MT", "Nebraska": "NE",
        "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
        "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK", "Oregon": "OR",
        "Pennsylvania": "PA", "Puerto Rico": "PR", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD",
        "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT", "Virgin Islands": "VI", "Virginia": "VA",
        "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let stateAbbreviation;
        if(stateCodes.hasOwnProperty(currentState)){
            stateAbbreviation = stateCodes[currentState];
        }
        getSelectParks(e, stateAbbreviation);
        setCurrentState('');
        setExplore(false);
    }

    const handleInput = (value) =>{
        setCurrentState(value);
    }

    const handleLogin = () =>{
        setLogin(!login);
    }

    const handleExplore =() =>{
        setExplore(!explore);
    }

    return (
        <nav className='flex items-center justify-between flex-wrap bg-gray-800 bg-opacity-75 p-2 border-b-2 border-black '>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 fill-current text-red-500" viewBox="0 0 20 20" >
                    <path fillRule="evenodd"
                          d="m12 1.586-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 0 0 2 4v10a1 1 0 0 0 .293.707L6 18.414V5.586L3.707 3.293zm14 2L14 1.586v12.828l2.293 2.293A1 1 0 0 0 18 16V6a1 1 0 0 0-.293-.707z"
                          clipRule="evenodd"/>
                </svg>
                <span className='font-semibold text-4xl tracking-wide'>My Website</span>
            </div>
            {
                explore ?
                    <div className='float-right my-4 text-lg font-sans'>
                        <label className='font-semibold py-1 mx-2 rounded text-gray-900' htmlFor='searchBox'>Explore
                            Parks By State</label>
                        <form onSubmit={handleSubmit}
                              className='flex float-right bg-white rounded border-2 overflow-hidden'>
                            <Hint options={states} allowTabFill>
                                <input
                                    className='block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-gray-800 flex-grow p-.5'
                                    id='searchBox'
                                    type='text'
                                    placeholder='State'
                                    value={currentState}
                                    onChange={(e) => handleInput(e.target.value)}
                                />
                            </Hint>
                            <button onSubmit={handleSubmit}>
                                <svg className='h-6 w-6 my-auto m-2' xmlns='http://w3.org/2000/svg'
                                     style={{color: gray}}
                                     fill='none'
                                     viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/>
                                </svg>
                            </button>
                        </form>
                    </div> :
                    <div className='flex space-x-2'>
                        <button
                            className='flex items-center px-2 py-1 border rounded text-white border-gray-900 hover:text-blue-500 hover:border-white'
                            onClick={handleExplore}>Explore Parks
                        </button>
                        <button
                            className='flex items-center px-2 py-1 border rounded text-white border-gray-900 hover:text-blue-500 hover:border-white'
                            onClick={handleLogin}>Login
                        </button>
                        <button
                            className='flex items-center px-2 py-1 border rounded text-white border-black hover:text-red-800 hover:border-white'
                            onClick={handleSignUp}>Sign Up
                        </button>
                    </div>

            }



        </nav>
    )
}
export default Header;