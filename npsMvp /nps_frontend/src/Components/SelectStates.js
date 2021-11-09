const SelectStates = ({states}) => {
    return (
        states.map((state) => {
                return (
                    <p key={state.index}>{state}</p>
                )
            })
        )
}
export default SelectStates;