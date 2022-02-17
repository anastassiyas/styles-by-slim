import React from "react";
import { ScissorsIcon } from "@heroicons/react/solid";
import { services } from "./PriceCard";

function Services() {
  return (
    <section id="services" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ScissorsIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-blue-800">
            Services
          </h1>
          
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((services) => (

<div className="sm:w-1/2 w-100 p-4">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                              {/* <p className="leading-relaxed mb-6">{services.id}</p> */}


             
                  <h2 className="tracking-widest text-lg title-font font-medium text-fuchsia-800 mb-1">
                    {services.name}
                  </h2>
                  <h2 className="title-font text-md font-medium text-fuchsia-800 mb-3">
                    {services.duration}
                  </h2>
                  <p className="leading-relaxedtext-lg title-font font-medium text-blue-800 mb-1 ">{services.price}</p>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;