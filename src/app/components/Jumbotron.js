import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
const Jumbotron = (props) => {
    return (
        <>
            <section className=' '>
                <div className=" p-5">
                    <div className=' mb-10  '>
                        <p className=' md:text-4xl sm:text-3xl text-2xl lg:text-5xl text-center text-blue-400 font-primary lg:leading-[55px] font-semibold '>
                            Don't Wait Any Longer! Order Your
                            <br />
                            Discounted Bottle Now!
                        </p>
                        <div className='md:my-3 my-2 lg:my-4 flex justify-center'>
                            <img src="/assets/twobottle.jpg" alt="Best Package" />
                        </div>
                        <div>
                            <p className='uppercase md:text-3xl sm:text-2xl text-xl lg:text-4xl  text-center text-black font-secondary '>
                                Regular Price:
                                <span className=" line-through">
                                    {` $197/bottle`}
                                </span>
                            </p>
                            <div className='uppercase flex justify-center md:my-3 my-2 lg:my-4 text-black md:text-5xl sm:text-4xl text-xl lg:text-6xl font-primary font-bold'>
                                <p>
                                    Only for Today: $97/bottle
                                </p>
                            </div>
                            <div className=" animate-pulse flex justify-center">
                                <Link href={props.CBLINK}>
                                    <button className=' flex  md:px-4 px-2 sm:px-3 lg:px-6 md:py-3 py-2 lg:py-4   md:text-3xl sm:text-2xl text-lg lg:text-4xl font-optional font-semibold  bg-gradient-to-b from-[#F6BA06] to-yellow-400 uppercase rounded-md  text-black'>
                                        Get Your 50% Discount Now
                                        <IoIosArrowForward className=' mt-1 mx-1' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jumbotron