import React, { useState } from 'react';
 

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-50 backdrop-blur-[7px]">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
            <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe21cae0f5fb75bf8c95532abf8e72a4ba90a28ff19a67b8c3fef872410f6170?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe21cae0f5fb75bf8c95532abf8e72a4ba90a28ff19a67b8c3fef872410f6170?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe21cae0f5fb75bf8c95532abf8e72a4ba90a28ff19a67b8c3fef872410f6170?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe21cae0f5fb75bf8c95532abf8e72a4ba90a28ff19a67b8c3fef872410f6170?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe21cae0f5fb75bf8c95532abf8e72a4ba90a28ff19a67b8c3fef872410f6170?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe21cae0f5fb75bf8c95532abf8e72a4ba90a28ff19a67b8c3fef872410f6170?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe21cae0f5fb75bf8c95532abf8e72a4ba90a28ff19a67b8c3fef872410f6170?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe21cae0f5fb75bf8c95532abf8e72a4ba90a28ff19a67b8c3fef872410f6170?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
          className="shrink-0 self-stretch w-10 aspect-[0.98]"
        />
        
            </div>
            <div className="hidden md:block">
              <div className="ml-16 flex items-baseline space-x-8">
                
              <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium">made by</a>

              <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a61c79a5ff10f2dcff1596e9465ca7f233412c60502b209a5678d98fdc3c2d0?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
          className="shrink-0 self-stretch my-auto aspect-[3.13] w-[68px] "
        />
      
                <a href="#" className="text-black text-opacity-60  px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-black text-opacity-60  px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#" className="text-black text-opacity-60  px-3 py-2 rounded-md text-sm font-medium">Customers</a>
                <a href="#" className="text-black text-opacity-60  px-3 py-2 rounded-md text-sm font-medium">Updates</a>
                <a href="#" className="text-black text-opacity-60  px-3 py-2 rounded-md text-sm font-medium">Help</a>
                <div className="justify-center self-stretch px-4 py-2.5 font-medium tracking-tight text-white bg-black rounded-xl">
          Get for free
        </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:bg-black focus:text-white transition duration-150 ease-in-out">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Features</a>
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Customer</a>
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Updates</a>
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Help</a>
          <div className="justify-center text-center  w-40 px-4 py-2.5 font-medium tracking-tight text-white bg-black rounded-xl">
          Get for free
        </div>
        </div>
      </div>
    </nav>
  );
};

export default MyComponent;
