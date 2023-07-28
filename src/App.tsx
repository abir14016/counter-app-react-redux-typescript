import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-emerald-300 p-16 rounded-xl shadow-xl">
        <div className="flex justify-center pb-5">
          <span className="text-3xl bg-white p-3 rounded-full font-bold">
            {count}
          </span>
        </div>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 text-white bg-indigo-500 rounded-md mr-2"
        >
          increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 text-white bg-indigo-500 rounded-md mr-2"
        >
          increment By Value
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 text-white bg-indigo-500 rounded-md ml-2"
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
