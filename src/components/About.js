import React from 'react';


function About() {
    return (
      <section id="about">
        
 <div className="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center bg-fuchsia-900 bg-opacity-40">
 
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2">
            <img
              className="object-cover object-center rounded border-8 border-fuchsia-800"
              alt="client" src="./Client.png"/> 
         </div>
            
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-fuchsia-800">
              <br className="hidden lg:inline-block" />
               Temika Long</h1><br>
              </br><h2 className="title-font sm:text-4xl text-3xl mb-4 font-class italic text-fuchsia-800">Barber Clinician/Stylist
            </h2>
            <p className="mb-8 leading-relaxed">
            </p>
            <div className="flex justify-center">
              </div>
        </div>
        </div>
      </section>
    );
  }

export default About;