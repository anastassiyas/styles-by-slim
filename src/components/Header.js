import React from 'react';
import { ClockIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="bg-blue-900 h-10 flex items-center justify-center text-sm font-medium text-gray-300 px-4 sm:px-6 lg:px-8">
    <div className="top-bar transparent">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-0 md:border-gray-700	flex flex-wrap items-center text-grey justify-center">       
        
        <ClockIcon className="w-4 h-4 ml-1"/><a href="#clock" className="mr-5 ">
            Mon - Sat: 8:00 - 17:00</a>
        <PhoneIcon className="w-4 h-4 ml-1"/><a href="#phone" className="mr-5 ">
        + 720 123 4567</a>
        <MailIcon className="w-4 h-4 ml-1"/>
        <a href="#email" className="mr-5 ">      
        info@slimstyle.com</a>      
        </nav>   
        </div>
        </div>
    
            

    </header>
)
}



export default Header;