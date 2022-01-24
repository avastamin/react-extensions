import React from 'react';
import HomeLogo from './img/HomeLogo.svg';
function App() {
  return (
    <div className="container max-w-md">
      <header className='bg-gray-700 p-4 border-b-2 border-gray-50'>
        <img className='w-105 mr-auto ml-auto' src={HomeLogo} alt="Logo" />
      </header>
      <div className='p-6'>
        <div className='font-Manrope flex flex-row justify-center items-center'>
          <button className='w-66 py-1.5 px-3 border border-gray-500 bg-gray-800 rounded-xl mr-4'>Email</button>
          <button className='w-66 py-1.5 px-3 border border-gray-500 bg-gray-800 rounded-xl'>Phone</button>
        </div>
        <div className='p-6 text-center'>
          <form>
            <input type="text" 
              className='w-full py-1.5 px-3 border border-gray-500 bg-gray-800 rounded-md mr-4' 
              placeholder="Ex (337) 378 8383" 
            />
            <button className='h-22 py-2 pr-4 pl-7 mt-5 mr-auto ml-auto text-white bg-gray-500 border border-gray-500 rounded-lg mr-4'>Continue</button>
          </form>
        </div>
        <div className='text-center mt-4'>
          <p className='text-gray-200 text-sm'>by clicking continue you must agree to near labs 
            <a href='#' className='text-blue-100'> Terms & Conditions ans Privacy Policy</a></p>
        </div>
        <div className='w-full h-px my-8 bg-gray-500'></div>
        <div className='text-center mt-4'>
          <p>Already have NEAR account?</p>
          <button className='h-22 py-2 pr-4 pl-7 mt-2 mr-auto ml-auto text-white bg-gray-200 border border-gray-500 rounded-lg mr-4'>Login in with NEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
