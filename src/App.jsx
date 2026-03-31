
import './App.css'
import Nabvar from './components/common/Nabvar'
import { Suspense, use, useState } from 'react';
import { ToastContainer, Bounce } from 'react-toastify';
import Slider from './components/slider/Slider';
import Counter from './components/counter/Counter';
import DigitalTools from './components/ditigal_tools/DigitalTools';
import { X } from 'lucide-react';

// Menu data fetch
const MenuFetch = async () => {
  const MenuRes = await fetch("/data/menu.json");
  return MenuRes.json();
}

// Slider Data fetch
const SliderFetch = async () => {
  const SliderRes = await fetch("/data/slider.json");
  return SliderRes.json();
}

// counter data
const CounterFetch = async () => {

  const CounterRes = await fetch("/data/counter.json")
  return CounterRes.json();

}

// digitoos card data

const DigiToolsFetch = async () => {

  const DigiToolsRes = await fetch("/data/digitools.json");
  return DigiToolsRes.json();

}

const MenuResData = MenuFetch();
const SliderResData = SliderFetch();
const CounterResData = CounterFetch();
const DigiToolsResData = DigiToolsFetch();



function App() {


  const loading_tag = (<div className='h-screen text-center mx-auto flex items-center justify-center'><span className=' loading loading-bars loading-lg'></span> <span className=' loading loading-bars loading-sm'></span></div>);

  // card stock manage

  const [cartItem, setCartItem] = useState([]);

  const TotalAmount = cartItem.reduce((accumulator, currentValue) => {
      return accumulator + currentValue?.price?.amount;
    }, 0);



  return (
    <>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} />
      <Suspense fallback={loading_tag}>
        <header className='w-400 max-w-full mx-auto shadow '>
          {/* <Suspense fallback={loading_tag}> */}
          <Nabvar cartItem={cartItem} setCartItem={setCartItem} MenuResData={MenuResData} />
          {/* </Suspense> */}
        </header>

        <div id="hero" className='w-400 max-w-full mx-auto '>
          {/* <Suspense fallback={loading_tag}> */}
          <Slider SliderResData={SliderResData} />
          {/* </Suspense> */}
        </div>

        <div id="counter-section" className='w-400 max-w-full   max-auto bg-linear-to-r from-[#4F39F6] to-[#7424fd]'>
          {/* <Suspense fallback={loading_tag}></Suspense> */}
          <Counter CounterResData={CounterResData} />
          {/* </Suspense> */}
        </div >



        <div id="digital_tools" className='w-400 max-w-full mx-auto '>
          {/* <Suspense fallback={loading_tag}> */}
          <DigitalTools TotalAmount={TotalAmount} cartItem={cartItem} setCartItem={setCartItem} DigiToolsResData={DigiToolsResData} />

        </div>
      </Suspense>


    </>
  )
}

export default App
