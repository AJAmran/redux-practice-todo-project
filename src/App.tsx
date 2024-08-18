import React from "react";
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="font-serif flex border border-blue-800 p-16 gap-5">
        <button
          className="bg-gray-700 px-3 py-2 font-semibold rounded-md text-2xl text-white"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5+
        </button>
        <button
          className="bg-green-700 px-3 py-2 font-semibold rounded-md text-2xl text-white"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h2 className="text-3xl font-semibold">{count}</h2>
        <button
          className="bg-red-700 px-3 py-2 font-semibold rounded-md text-2xl text-white font-serif"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
