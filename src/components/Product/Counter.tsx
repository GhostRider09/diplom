import { TCounterProps } from "./types"

export const Counter = ({amount, changeAmount, maxCount = 10}: TCounterProps) => {
  const decrementHandler = () => {
    if ( amount > 1 ) {
      changeAmount(--amount);
    }
  }

  const incrementHandler = () => {
    if ( amount < maxCount ) {
      changeAmount(++amount);
    }
  }

  return (
    <p>Количество: <span className="btn-group btn-group-sm pl-2">
        <button 
          className="btn btn-secondary"
          onClick={decrementHandler}>-</button>
        <span className="btn btn-outline-primary">{amount}</span>
        <button 
          className="btn btn-secondary"
          onClick={incrementHandler}>+</button>
      </span>
    </p>  
  )
}