const Park = ({park}) => {
    return (
        <div className='flex flex-row'>
            <h1 className='flex py-2 font-bold text-3xl text-gray-800'>{park.fullName}</h1>
            <div className='flex hide-scroll-bar'>
                <div className='inline-block'>
                    <div className='w-64 h-64'>
                        <img src={park.images[0].url} alt='placeholder'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Park;