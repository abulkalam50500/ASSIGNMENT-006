
import './App.css'
import Nabvar from './components/common/Nabvar'
import { Suspense } from 'react';
import Slider from './components/slider/Slider';

const MenuFetch = async()=>{
  const MenuRes =await fetch("/data/menu.json");
  return MenuRes.json();
}


function App() {
  
  const MenuResData = MenuFetch();

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
           <Slider />
         </Suspense>
      </div>
    </>
  )
}

export default App
