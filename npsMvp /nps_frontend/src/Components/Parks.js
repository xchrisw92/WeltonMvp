import Park from "./Park";

const Parks = ({parks}) => {
    return (
        parks.map((park) => {
            return (
                <div className='flex flex-row bg-white'>
                <Park key={park.id} park={park} />
                </div>
            )
        })
    )
}

export default Parks;