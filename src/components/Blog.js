import React from 'react';
import { blog } from "../data";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";


function Blog() {
  return (
    <section id="blog">

<div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
        <QuestionMarkCircleIcon className="w-10 inline-block mb-4 text-gray-500" />
        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-blue-900 mb-4">
          FAQ
        </h1>
        <p class="sm:text-2xl text-1xl font-medium  text-blue-800 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Consider This Your Guidebook for Black Hair
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-400 opacity-100 text-blue-900 rounded-md py-2 px-4">
                For those who aren't familiar with Texture Management, can you explain 
                a little about the company and how you fit into that?
                </summary>
                <span class="text-blue-700">
                Texture Management was formed to fill the need for elite hair and makeup 
                services tailored to performers' unique needs of color. I am one of their 
                hair artists, specializing in hair color (certified through Redken). 
                This allows me to provide whatever hairstyle (such as braids, cut, wigs, 
                or smoothing) the client needs to complete the look from head to toe. 
                Through Texture Management, I have styled hair for spec shoots, beauty shoots, 
                red carpets, award shows, and more.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-400 opacity-100 text-blue-900 rounded-md py-2 px-4">
                Most people outside of the Black community have little to no education 
                about Black hair. What do you think is one of the biggest misconceptions 
                and implicit biases held by wider society?
                </summary>

                <span class="text-blue-700">
                Honestly, I think most people have little to no education about hair 
                outside of their own community. The bigger issue is that people do not 
                understand curly hair and just how fragile some textures are within the 
                curl community, regardless of race. Generally speaking, curly hair is the 
                driest of any hair texture and needs constant love and nourishment. 
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-400 opacity-100 text-blue-900 rounded-md py-2 px-4">
                What do you think are the biggest misconceptions that Black people themselves 
                have about their own hair?
                </summary>

                <span class="text-blue-700">
                People of all races need to evaluate their hair and learn what 
                products work best. For example, a volumizing shampoo is something 
                that is not commonly used in the Black community. However, if you have 
                oily hair that needs to be shampooed twice a week because your hair loses style and falls flat, 
                a volumizing shampoo could do the trick.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-400 opacity-100 text-blue-900 rounded-md py-2 px-4">
                How would you say the industry has evolved in the past 10 years when it comes to natural hair? 
                Do you think the fashion industry have become more accepting of it?  
                </summary>

                <span class="px-4 py-2 text-blue-700">
                Over the past 10 years, relaxers have been deprioritized in the Black community. Other presumed 
                less-harmful chemicals began to take their place, such as the keratin treatments. It was not until 
                we learned about formaldehyde that clients and stylists began to back off from the keratin treatments. 
                That signaled the start of the chemical-free craze. Everybody wanted to be natural but still get their 
                hair straightened. The problem was that most people’s hair would not last through humidity or exercising. 
                When they had to shampoo it naturally, they did not know what to do in terms of styling. 
                Their hair had uneven textures and was just difficult to manage. From there began the big chop phase, 
                removing all compromised ends that were not natural in texture. 
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-400 opacity-100 text-blue-900 rounded-md py-2 px-4">
                Can you explain the difference between the various porosities when it comes to haircare?  
                </summary>

                <span class="px-4 py-2 text-blue-700">
                Porosity, as it relates to hair, refers to how well your hair is able to absorb and hold moisture. 
                There are three categories: low, normal, and high. 
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-400 opacity-100 text-blue-900 rounded-md py-2 px-4">
                Although perms seem to be a thing of the past, there are still Black women who prefer this to natural hair. 
                Can you let us in how to maintain your hair's 
                health after the treatment?
                </summary>

                <span class="px-4 py-2 text-blue-700">
                Getting a chemical relaxer in 2020 is just like eating at a fast-food chain that has been around for years. 
                Most people choose not to do it, and if they go back to it, their body does not respond well. 
                They do not make relaxers like they used to. Companies have chosen cheaper ingredients that are often more harmful.
                </span>
              </details>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap m-4"></div>
  <ul className="blog-group">
      {blog.map(item => (
          <li className='blog-group-item' key={item.id}>
      {item.question}
      <br></br>
   
      <li className="blog-answer" key={item.id}>
       {item.answer}
       </li>
       </li>   
      ))}
  </ul> */}
  {/* </div> */}
  
  
  </section>
  
  );
}

export default Blog;




