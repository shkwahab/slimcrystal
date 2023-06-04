import { Lato } from 'next/font/google'
import React from 'react'
const latobold = Lato({
    weight: '700',
    subsets: ['latin'],
});
const Bonus = () => {
  return (
    <>
      <div className=" bg-gray-300   py-3 sm:py-4  md:py-6 lg:py-8">
        <div className="  ">
          <div className={`${latobold.className} bg-blue-500 text-white p-4 sm:px-0 md:py-6 sm:py-4 py-2 lg:py-8 md:text-2xl sm:text-xl text-lg lg:text-3xl  text-center  uppercase md:mx-16 sm:mx-12 mx-4 lg:mx-20 rounded-lg`}>
          Get Aline's Amazing Bonuses FOR FREE When You Buy 2 Bottles Or More!
          </div>
          <div className="flex md:my-6 sm:my-4 my-4 lg:my-8 bg-white">
            <div className='mx-4 lg:w-[550px] md:py-3 sm:py-2 py-2 lg:py-4'>
              <img src="/assets/bonus1.jpg"  alt="Bonus1" />
            </div>
            <div>
              <h2 className={`${latobold.className} text-blue-700 md:text-3xl
               mr-2 sm:mr-0 sm:text-2xl text-base lg:text-4xl font-semibold font-primary capitalize mt-6`}>
              Bonus#1 is her Slim Over 55 Program!
              </h2>
              
              <p className="my-2 text-gray-700 font-secondary md:text-lg sm:text-base hidden sm:block lg:text-xl lg:w-[90%]">
              <b>SLIM OVER 55</b>  is her new program especially created for men and women who are beginners at working out, are at least 15 pounds overweight, and want to get back in shape and get their bodies back into balance!

              </p>
              <p className="my-2 text-gray-700 font-secondary md:text-lg sm:text-base hidden sm:block lg:text-xl lg:w-[90%]">
              Her program already worked great for thousands of people who are in their 30's, 50's and even over 70 years of age, so <b>you will love it!</b>
              </p>
            </div>
          </div>
         
          <div className="flex md:my-6 sm:my-4 my-4 lg:my-8 bg-white">
            <div className='mx-4 lg:w-[550px] md:py-3 sm:py-2 py-2 lg:py-4'>
              <img src="/assets/bonus2.png"  alt="Bonus1" />
            </div>
            <div>
              <h2 className={`${latobold.className} text-blue-700 md:text-3xl mr-2 sm:mr-0 
              sm:text-2xl text-base lg:text-4xl font-semibold font-primary capitalize mt-6`}>
              Bonus#2 is Healthy Fat Loss Desserts Cookbook and Videos!
              </h2>
              
              <p className=" my-2 text-gray-700 font-secondary md:text-lg sm:text-base hidden sm:block lg:text-xl lg:w-[90%]">
              This is a collection of <b>over 35</b>   yummy, easy to prepare, money saving, fat loss 
              <b> dessert recipes </b> and <b>detailed instructional videos.</b> 

              </p>
              <p className=" my-2 text-gray-700 font-secondary md:text-lg sm:text-base hidden sm:block lg:text-xl lg:w-[90%]">
              All recipes contain at <b>least 45% protein</b>, are loaded with vitamins and nutrients that your body needs, have <b>NO sugar</b> or <b>unhealthy fats</b>.

              </p>
            </div>
          </div>
         
          <div className="flex md:my-6 sm:my-4 my-4 lg:my-8 bg-white">
            <div className='mx-4 lg:w-[850px] md:py-3 sm:py-2 py-2 lg:py-4'>
              <img src="/assets/bonus3.jpg"  alt="Bonus1" />
            </div>
            <div>
              <h2 className={`${latobold.className} text-blue-700 md:text-3xl mr-2 sm:mr-0 sm:text-2xl text-base lg:text-4xl font-semibold font-primary capitalize mt-6`}>
              Bonus#3 is her newly released anti-aging eBook "57 Secrets To Reverse Aging"!
              </h2>
              
              <p className="my-2 text-gray-700 font-secondary md:text-lg sm:text-base hidden sm:block lg:text-xl lg:w-[90%]">
              In this ebook you'll learn <b>the secrets</b> that hundreds of her clients are using to increase their energy level and look and feel <span className='text-blue-500'>{` 10 years younger `}</span> in just weeks!
              </p>
              <p className="my-2 text-gray-700 font-secondary md:text-lg sm:text-base hidden sm:block lg:text-xl lg:w-[90%]">
              You'll learn the world's TOP youth-enhancing foods, herbs, teas, spices and other nutrients that <b>FIGHT aging</b> and a few nutrition strategies that can potentially stop, even reverse the effects of aging in your body… and make your hair, skin and joints feel like 10, 15 or 20 years ago…
              </p>
            </div>
          </div>
         
        
        
        </div>
      </div>
    </>
  )
}

export default Bonus