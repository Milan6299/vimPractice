import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

	return <div className="bg-black flex items-center gap-6 flex-col p-8 ">
		<div className='text-white text-2xl'>A simple Counter!!</div>
    <div className="text-9xl text-white">{count}</div>
    <div className="text-2xl flex gap-3 text-white">
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="p-3 bg-blue-800 text-white"
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
        className="p-3 bg-blue-800 text-white"
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="p-3 bg-blue-800 text-white"
      >
        Increase
      </button>
    </div>
  </div>;
}

export default Counter;
