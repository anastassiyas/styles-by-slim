import React from 'react';
import { ArrowRightIcon, SearchIcon, HomeIcon } from "@heroicons/react/solid";


function Navbar() {
  return (
    <header className="bg-fuchsia-800 md:sticky top-0 z-10 text-gray-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-gray-300 mb-4 md:mb-0"></a>
          
        <HomeIcon className="w-4 h-4 ml-1" /><a href="#home" className="ml-4">
          Home</a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-0 md:border-gray-700
        	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-gray-400">
            About</a>      
          <a href="#portfolio" className="mr-5 hover:text-gray-400">
            Portfolio</a>
          <a href="#services" className="mr-5 hover:text-gray-400">
            Services</a>
          <a href="#blog" className="mr-5 hover:text-gray-400">
            Blog</a>
            <a href="#testimonials" className="mr-5 hover:text-gray-400">
            Testimonials</a>

        </nav>
        
                  <a href="search" className="p-2 text-gray-300 hover:bg-gray-500 rounded text-base">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" />
                  </a>
         
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">
        Contact<ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        </div>
    </header>
    
  );
}

export default Navbar;