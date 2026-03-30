
import './App.css'
import Nabvar from './components/common/Nabvar'
import { Suspense } from 'react';
import Slider from './components/slider/Slider';
import Counter from './components/counter/Counter';

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


function App() {

  const MenuResData = MenuFetch();
  const SliderResData = SliderFetch();

  const loading_tag = (<p className='text-center mx-auto'><span className=' loading loading-bars loading-lg'></span></p>);


  return (
    <>
      <header className='w-400 max-w-full mx-auto shadow'>
        <Suspense fallback={loading_tag}>
          <Nabvar MenuResData={MenuResData} />
        </Suspense>
      </header>

      <div id="hero" className='w-400 max-w-full mx-auto'>
        <Suspense fallback={loading_tag}>
          <Slider SliderResData={SliderResData} />
        </Suspense>
      </div>

      <div id="counter-section" className='w-400 max-w-full max-auto bg-linear-to-r from-[#4F39F6] to-[#7424fd]'>
        <Suspense fallback={loading_tag}>
          <Counter SliderResData={SliderResData} />
        </Suspense>
      </div>


    </>
  )
}

export default App
