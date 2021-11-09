
import {useState} from "react";

const Header = ({getSelectParks}) => {
    let [currentState, setCurrentState] = useState('');
    let states = [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA',
        'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC',
        'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT','VA', 'WA', 'WV', 'WI', 'WY' ];

    // const handleStateClick = (state) =>{
    //     setCurrentState(state);
    //     getSelectParks(currentState);
    //     setCurrentState('');
    // }

    return (
        <div className='w-screen flex'>
            <h1 className='text-6xl font-extrabold font-sans text-begin text-gray-800 my-4'>My Website</h1>
            <div className=' content-end'>
                <label htmlFor='selectState'>Select State</label>
                <select className='m-2' name='states' id='selectState'>
                        {
                            states.map((state, i) =>{
                                return(
                                    <option
                                        onClick={(e) => console.log(e)}
                                        key={i}
                                    >
                                        {state}
                                    </option>
                                )
                            })
                        }
                </select>
            </div>
        </div>
    )
}
export default Header;