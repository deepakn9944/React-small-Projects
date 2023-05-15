import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  function decreaseHandler() {
    setCounter(counter - 1);
  }

  function increaseHandler() {
    setCounter(counter + 1);
  }

  function resetHandler() {
    setCounter(0);
  }


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151] gap-10">
      <div className="text-[#0398d4] text-2xl">Increment & Decrement</div>
      <div className="flex bg-[white] gap-12 justify-center text-[25px] py-3 rounded-sm text-[#344151]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center border-[#bfbfbf] w-20 text-5xl"
        >
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>{counter}</div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center border-[#bfbfbf] w-20 text-5xl"
        >
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 text-lg rounded-sm">Reset</button>
    </div>
  );
}

export default App;
