import React from 'react';

function Home() {
    return (
      <section id="home">

       <div className="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 ">
            <h1 className="title-font sm:text-6xl text-5xl mb-4 font-extrabold text-fuchsia-600">
            Styles by Slim </h1>
            <h2 className="title-font sm:text-5xl text-3xl mb-4 font-class italic text-fuchsia-600">
             Slim Did it</h2>
              
                      
            <p className="mb-8 leading-relaxed text-1xl mb-2 font-class italic text-blue-600" >"Styles by Slim" is the best of the classic barbershop:
            <p>the customer relationship, the atmosphere, the environment.</p>
            <p>My goal is to give you a great experience.</p></p>



            <div className="flex justify-center">
              <a href="#services"
                className="inline-flex text-gray-300 bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
                Buy theme
              </a>
              <a href="#contact"
                className="ml-4 inline-flex text-gray-300 bg-fuchsia-800 border-0 py-2 px-6 focus:outline-none hover:bg-fuchsia-600 hover:text-white rounded text-lg">
                Book a visit
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded border-8 border-fuchsia-800"
              alt="client"
              src="./Two.png"
            />
          </div>
        </div>
      </section>
    );
  }

export default Home;
