import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, addByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [amountToAdd, setAmountToAdd] = useState(0);
    const addValue = Number(amountToAdd) || 0;

    const resetAll = () => {
        setAmountToAdd(0);
        dispatch(reset());
    }

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input onChange={(e) => setAmountToAdd(e.target.value)} value={amountToAdd} />
        <button onClick={resetAll}>Reset</button>
        <button onClick={() => dispatch(addByAmount(addValue))}>Add</button>
    </section>
  )
}

export default Counter