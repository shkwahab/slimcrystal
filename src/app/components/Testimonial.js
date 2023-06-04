import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { Lato } from 'next/font/google';
const latobold = Lato({
    weight: '700',
    subsets: ['latin'],
});
const Testimonial = (props) => {
    return (
        <>
            <section className=' sm:mx-12 mx-4 md:mx-16 lg:mx-20'>
                <div className="text-blue-600 uppercase sm:text-2xl text-xl md:text-3xl lg:text-4xl font-primary  font-bold my-8 flex justify-center">
                    Customer Reviews
                </div>
                <div className="  flex  justify-evenly ">
                    <div className="grid lg:grid-cols-2 sm:my-4 my-2 md:my-2 lg:my-8">



                        <div className="  my-6  rounded-md py-2  md:mx-8 sm:mx-6 mx-2 lg:mx-10  w-lg:[360px] md:w-[340px] sm:w-[320px]  bg-gray-100 shadow-md">
                            <div className="flex justify-center">
                                <img className=" rounded-full object-cover w-[100px] h-[100px] " src={props.PIC1} alt="testimonial" />
                            </div>
                            <div className="px-4 my-2 mb-0 md:mb-0  flex justify-center">
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                            </div>
                            <div className='text-blue-800 mb-2 text-center font-primary md:text-lg text-base  lg:text-xl font-bold'>
                                Verified Purchase
                            </div>

                            <div className='md:px-3 sm:px-2 px-3 lg:px-4 font-primary text-gray-600'>
                                <p className="my-2">
                                    I know it doesn't look like it, but I will turn 40 next year!
                                </p>
                                <p className="my-2">
                                    A few years ago, while I was attending a crystal healing seminar, I met Michael and I was introduced to the SlimCrystal bottles.
                                </p>
                                <p className="my-2">
                                    The idea to infuse water with the 9 powerful crystals is truly revolutionary, and I wanted to be between the first few people who tried it.The idea to infuse water with the 9 powerful crystals is truly revolutionary, and I wanted to be between the first few people who tried it.
                                </p>
                                <p className="my-2">
                                    Ever since, this bottle has accompanied me around the world, and I know that drinking water only from it is the reason behind my youthful looks and slim waist!
                                </p>
                                <p className="my-4 mt-8">
                                    Thank you SlimCrystal!
                                </p>
                            </div>
                            <h2 className={`mx-4 sm:text-lg md:text-xl ${latobold.className}`}>
                            Madison S.
                            </h2>
                        </div>
                       
                        <div className="  my-6  rounded-md py-2  md:mx-8 sm:mx-6 mx-2 lg:mx-10  w-lg:[360px] md:w-[340px] sm:w-[320px]  bg-gray-100 shadow-md">
                            <div className="flex justify-center">
                                <img className=" rounded-full object-cover w-[100px] h-[100px] " src={props.PIC2} alt="testimonial" />
                            </div>
                            <div className="px-4 my-2 mb-0 md:mb-0  flex justify-center">
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                            </div>
                            <div className='text-blue-800 mb-2 text-center font-primary md:text-lg text-base  lg:text-xl font-bold'>
                                Verified Purchase
                            </div>

                            <div className='md:px-3 sm:px-2 px-3 lg:px-4 font-primary text-gray-600'>
                                <p className="my-2">
                                    A few months ago I integrated a SlimCrystal bottle into my daily routine because I wanted to get my life back on track after I finally ended an abusive relationship.
                                </p>
                                <p className="my-2">
                                    I knew the crystals inside the bottle could help realign my frequency with its positive vibrations and release all physical, emotional and spiritual blockages I had.
                                </p>

                                <p className="my-2">
                                    I can’t believe how fast the fat that has accumulated around my stomach area during the last few years has disappeared, and how good I feel about myself after just a few months of drinking water from my bottle!
                                </p>

                                <p className="my-4">
                                    Thank you SlimCrystal for helping me build the self confidence I needed!
                                </p>
                            </div>
                            <h2 className={`mx-4 sm:text-lg md:text-xl ${latobold.className}`}>
                                Shirley Vargas
                            </h2>
                        </div>
                        
                        <div className="  my-6  rounded-md py-2  md:mx-8 sm:mx-6 mx-2 lg:mx-10  w-lg:[360px] md:w-[340px] sm:w-[320px]  bg-gray-100 shadow-md">
                            <div className="flex justify-center">
                                <img className=" rounded-full object-cover w-[100px] h-[100px] " src={props.PIC3} alt="testimonial" />
                            </div>
                            <div className="px-4 my-2 mb-0 md:mb-0  flex justify-center">
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                            </div>
                            <div className='text-blue-800 mb-2 text-center font-primary md:text-lg text-base  lg:text-xl font-bold'>
                                Verified Purchase
                            </div>

                            <div className='md:px-3 sm:px-2 px-3 lg:px-4 font-primary text-gray-600'>
                                <p className="my-2">
                                I've been a nurse for over 20 years, but last year was really crazy!
                                </p>
                                <p className="my-2">
                                With the Covid 19 pandemic I had to work more shifts than ever, and many were night shifts!
                                </p>

                                <p className="my-2">
                                And when you have 2 young kids to look after, and you're 49, it's not easy! 
                                </p>
                                <p className="my-2">
                                With all the stress, I gained 36 pounds last year. 
                                </p>
                                <p className="my-2">
                                Thanks God that my husband bought me a SlimCrystal bottle, and ever since I started drinking from it, my life completely changed.
                                </p>
                                <p className="my-2">
                                I soon started to have more energy and vitality than I had when I first started being a nurse, and I already lost 32 pounds!
                                </p>

                                <p className="my-4">
                                Thanks SlimCrystal for giving me the energy and vitality I needed so bad!"
                                </p>
                            </div>
                            <h2 className={`mx-4 sm:text-lg md:text-xl ${latobold.className}`}>
                            Carina B.
                            </h2>
                        </div>

                        <div className="  my-6  rounded-md py-2  md:mx-8 sm:mx-6 mx-2 lg:mx-10  w-lg:[360px] md:w-[340px] sm:w-[320px]  bg-gray-100 shadow-md">
                            <div className="flex justify-center">
                                <img className=" rounded-full object-cover w-[100px] h-[100px] " src={props.PIC4} alt="testimonial" />
                            </div>
                            <div className="px-4 my-2 mb-0 md:mb-0  flex justify-center">
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                                <AiFillStar className=' text-yellow-400 md:text-lg sm:text-base text-sm lg:text-xl  mx-1' />
                            </div>
                            <div className='text-blue-800 mb-2 text-center font-primary md:text-lg text-base  lg:text-xl font-bold'>
                                Verified Purchase
                            </div>

                            <div className='md:px-3 sm:px-2 px-3 lg:px-4 font-primary text-gray-600'>
                                <p className="my-2">
                                I am 69 years old now, and I have been retired for over 5 years, but last year I decided to go back to work in order to help my niece pay off her college.
                                </p>
                                <p className="my-2">
                                I've been a housekeeper for as long as I can remember, and the hotel manager where I last worked, loved me for how impeccable and fast I was doing my job.
                                </p>

                                <p className="my-2">
                                And because I've been drinking water from my SlimCrystal bottle for the last 3 months, I had enough confidence to go back to work because I knew that I could easily keep up with my youngest colleagues and not let my boss down.
                                </p>
                                <p className="my-2">
                                And that's exactly what happened! 
                                </p>
                                <p className="my-2">
                                I work 30 hours a week and I have the same energy and agility I had 20 years ago!
                                </p>

                                <p className="my-4">
                                Thanks SlimCrystal for this!"
                                </p>
                            </div>
                            <h2 className={`mx-4 sm:text-lg md:text-xl ${latobold.className}`}>
                            Susan M.
                            </h2>
                        </div>


                    </div>


                </div>


            </section>
        </>
    )
}

export default Testimonial