import { useState } from 'react';
import './App.css';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'


function App() {
  const [num, setNum] = useState(4);
  const [num2, setNum2] = useState(3);
  const [add, setAdd] = useState(null);
  const [subtract, setSubtract] = useState(null);
  const [modulus, setModulus] = useState(null);
  const [multiply, setMultiply] = useState(null);
  const [darkMood, setDarkMood] = useState(false); 
  const [ImageIndex, setImageIndex] = useState(0);

  const images = [
    img1, 
    img2,
    img3,
    img4
  ];

  const handleImageClick = () => {
    let nextIndex = ImageIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0; 
    }
    setImageIndex(nextIndex);
  };

const DarkMoodfun =()=>{
  setDarkMood(!darkMood);
}

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
    <>
   
    <div className={`flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md  mx-auto  ${darkMood ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
    <button
    className={`mt-4 px-4 py-2 mb-10 rounded-lg transition duration-300 ${darkMood ? 'bg-[red] text-black' : 'bg-gray-800 text-white'}`}
    onClick={DarkMoodfun}
  >
    {darkMood ? 'Switch to Light ' : 'Switch to Dark '}
  </button>
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
      <h1 className='text-2xl font-bold text-[green] mb-4'>First Number: <span className={`${darkMood ? ' text-white' : 'bg-gray-100 text-gray-800'}`}>{num}</span></h1>
      <h1 className='text-2xl font-bold text-[green] mb-4'>Second Number: <span className={`${darkMood ? ' text-white' : 'bg-gray-100 text-gray-800'}`}>{num2}</span></h1>

      <div className="flex flex-wrap justify-center mb-4 md:gap-0 gap-4 md:space-y-0 md:space-x-4">
      <button className="bg-green-500 text-white text-2xl w-32 py-2 rounded-lg hover:bg-green-600 transition duration-300" onClick={ClickAdd}>Add</button>
      <button className="bg-green-500 text-white text-2xl w-32 py-2 rounded-lg hover:bg-green-600 transition duration-300" onClick={ClickSub}>Subtract</button>
      <button className="bg-green-500 text-white text-2xl w-32 py-2 rounded-lg hover:bg-green-600 transition duration-300" onClick={ClickMul}>Multiply</button>
      <button className="bg-green-500 text-white text-2xl w-32 py-2 rounded-lg hover:bg-green-600 transition duration-300" onClick={ClickMod}>Modulus</button>
    </div>

      <h2 className='text-lg md:text-2xl font-bold text-[green] mb-2'>Addition Result: <span className={`${darkMood ? ' text-white' : 'bg-gray-100 text-gray-800'}`}>{add}</span></h2>
      <h2 className='text-lg md:text-2xl font-bold text-[green] mb-2'>Subtraction Result: <span className={`${darkMood ? ' text-white' : 'bg-gray-100 text-gray-800'}`}>{subtract}</span></h2>
      <h2 className='text-lg md:text-2xl font-bold text-[green] mb-2'>Multiplication Result: <span className={`${darkMood ? ' text-white' : 'bg-gray-100 text-gray-800'}`}>{multiply}</span></h2>
      <h2 className='text-lg md:text-2xl font-bold text-[green] mb-2'>Modulus Result: <span className={`${darkMood ? ' text-white' : 'bg-gray-100 text-gray-800'}`}>{modulus}</span></h2>

      <div className="mt-4">
          <img 
            src={images[ImageIndex]} 
            alt={'image'} 
            className="w-64 h-64 object-cover cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
    </div>
    </>
  );
}

export default App;
