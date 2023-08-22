

export const Counter = ({counter, onDecrementCounter, onIncrementCounter, isValidCounter}) => {

    


    return (

        <div className="counterContainer">
            <button type="button" className='counterButton' onClick={onDecrementCounter} disabled={!isValidCounter}>-</button>
            <p>{counter}</p>
            <button type="button" className='counterButton' onClick={onIncrementCounter}>+</button>
        </div>

    )
}
