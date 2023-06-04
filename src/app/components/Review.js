import React from 'react'
import { Lato } from 'next/font/google';

  const latobold = Lato({
    weight: '700',
    subsets: ['latin'],
  });
  
const Review = (props) => {
    return (
        <>
            <section className='  
            md:my-8 sm:my-6 my-4 md:py-6  sm:py-4 py-3   lg:py-8 '>
                <div className={` md:text-3xl text-2xl py-3 mx-3 md:py-3 sm:text-2xl md:mx-6 sm:mx-4  lg:text-4xl  bg-blue-400  text-white  lg:mx-8 lg:py-4 rounded-xl  text-center ${latobold.className}`}>
                   {props.WHYCHOOSEUS}
                </div>
                <div className=" ">
                <div className=" flex lg:flex-row flex-col justify-items-center justify-center">
                    <div className=' my-1 lg:my-0 sm:my-2 mx-1 sm:mx-2'>
                        <div className=' '>
                            <img className='w-[250px]' src="/assets/madeinusa.png" alt="Usa" />
                        </div>
                     
                    </div>
                
                    <div className='  my-1 lg:my-0 sm:my-2 mx-1 sm:mx-2'>
                        <div className=' '>
                            <img className='w-[250px]' src="/assets/bestquality.png" alt="Usa" />
                        </div>
                      
                    </div>
                
                    <div className=' mx-1 my-1 sm:my-2 lg:my-0 sm:mx-2'>
                        <div className=''>
                            <img className='w-[250px]' src="/assets/freeshipping.png" alt="Usa" />
                        </div>
                        
                    </div>
                
                    <div className=' mx-1 my-1 sm:my-2 lg:my-0 sm:mx-2'>
                        <div className=''>
                            <img className='w-[250px]' src="/assets/crystal.png" alt="Usa" />
                        </div>
                      
                    </div>
                
                </div>
                </div>
            </section>
        </>
    )
}

export default Review