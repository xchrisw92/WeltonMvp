import Park from "../Park/Park";

const Parks = ({parks}) => {
    return (
        <div className='p-10 grid grid-cols-3 gap-5'>
                <div className='rounded overflow-hidden col-span-2 space-y-4'>
                    {
                        parks.map((park) => {
                            return (

                                <Park key={park.id} park={park}/>
                            )
                        })

                    }
                </div>
        </div>
    )
}

export default Parks;