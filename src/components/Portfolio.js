import React from 'react';
import { CameraIcon } from "@heroicons/react/solid";
import { portfolio } from "../data";


function Portfolio() {
  return (
    <section id="portfolio">
    <div className="text-gray-400  body-font  bg-fuchsia-900 bg-opacity-40">
      <div className="container px-5 py-10 mx-auto text-center lg:px-45">
        <div className="flex flex-col w-full mb-20">
          <CameraIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-fuchsia-800">
            Portfolio
          </h1>
       
        </div>
        <div className="flex flex-wrap m-16">
          {portfolio.map((portfolio) => (
            <a href={portfolio.price}
              key={portfolio.image}
              
              className="sm:w-1/2 w-120 p-2 ">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={portfolio.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-gray-500 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-800 mb-1">
                    {portfolio.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-bold text-fuchsia-800 mb-3">
                    {portfolio.title}
                  </h1>
                  <p className="leading-relaxed">{portfolio.description}</p>
                </div>
              </div>
              
            </a>
          ))}
        </div>
      </div>
      </div>  
    </section>
  );
}


export default Portfolio;