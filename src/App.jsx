import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(4);
  const [num2, setNum2] = useState(3);
  const [add, setAdd] = useState(null);
  const [subtract, setSubtract] = useState(null);
  const [modulus, setModulus] = useState(null);
  const [multiply, setMultiply] = useState(null);

  const ClickAdd = () => {
    setAdd(num + num2);
  };

  const ClickSub = () => {
    setSubtract(num - num2);
  };

  const ClickMul = () => {
    setMultiply(num * num2);
  };

  const ClickMod = () => {
    setModulus( num % num2 );
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
     
     <div className="flex items-center mb-4">
        <button className="bg-[green] text-white px-4 py-2 rounded-lg hover:bg-[lightgray] transition duration-300" onClick={() => setNum(num - 1)}>-</button>
        <h1 className='text-2xl mx-2'>{num}</h1>
        <button className="bg-[green] text-white px-4 py-2 rounded-lg hover:bg-[lightgray] transition duration-300" onClick={() => setNum(num + 1)}>+</button>
      </div>

      <div className="flex items-center mb-4">
        <button className="bg-[green] text-white px-4 py-2 rounded-lg hover:bg-[lightgray] transition duration-300" onClick={() => setNum2(num2 - 1)}>-</button>
        <h1 className='text-2xl mx-2'>{num2}</h1>
        <button className="bg-[green] text-white px-4 py-2 rounded-lg hover:bg-[lightgray] transition duration-300" onClick={() => setNum2(num2 + 1)}>+</button>
      </div>
      <h1 className='text-2xl font-bold text-[green] mb-4'>First Number: <span className='text-gray-800'>{num}</span></h1>
      <h1 className='text-2xl font-bold text-[green] mb-4'>Second Number: <span className='text-gray-800'>{num2}</span></h1>

      <div className="flex flex-wrap justify-center space-x-4 mb-4">
        <button className="bg-[green] text-white px-4 py-2 rounded-lg hover:bg-[lightgray] transition duration-300" onClick={ClickAdd}>Add</button>
        <button className="bg-[green] text-white px-4 py-2 rounded-lg hover:bg-[lightgray] transition duration-300" onClick={ClickSub}>Subtract</button>
        <button className="bg-[green] text-white px-4 py-2 rounded-lg hover:bg-[lightgray] transition duration-300" onClick={ClickMul}>Multiply</button>
        <button className="bg-[green] text-white px-4 py-2 rounded-lg hover:bg-[lightgray] transition duration-300" onClick={ClickMod}>Modulus</button>
      </div>

      <h2 className='text-lg md:text-2xl font-bold text-[green] mb-2'>Addition Result: <span className='text-gray-800'>{add}</span></h2>
      <h2 className='text-lg md:text-2xl font-bold text-[green] mb-2'>Subtraction Result: <span className='text-gray-800'>{subtract}</span></h2>
      <h2 className='text-lg md:text-2xl font-bold text-[green] mb-2'>Multiplication Result: <span className='text-gray-800'>{multiply}</span></h2>
      <h2 className='text-lg md:text-2xl font-bold text-[green] mb-2'>Modulus Result: <span className='text-gray-800'>{modulus}</span></h2>

    </div>
  );
}

export default App;
