const Park = ({park}) => {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg cursor-pointer'>
                <img className=' object-contain  rounded-lg shadow-xl hover:shadow-2xl' src={park.images[0].url} alt='placeholder'/>
                <div className='absolute top-0 left-0 px-6 py-4'>
                        <h3 className=' text-xl font-semibold tracking-tight text-white'>{park.fullName}</h3>
                        <h3 className='mb-3 text-l font-semibold tracking-tight text-white'>
                            {park.addresses[0].city}, {park.addresses[0].stateCode}
                        </h3>
                </div>
        </div>
    )
}
export default Park;