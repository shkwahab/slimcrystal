import Link from 'next/link'
import React from 'react'
import { MdLocalShipping } from "react-icons/md"
import { Lato } from 'next/font/google'
const latobold = Lato({
    weight: '700',
    subsets: ['latin'],
});
const LimitedOffer = (props) => {
    return (
        <>
            <section className=' py-2'>
                <div className=" bg-blue-500 text-center md:p-4 sm:p-3 p-2 m-2 lg:p-6 rounded-lg md:mx-6 sm:mx-4 mx-2 lg:mx-8">
                    <div className=' text-white sm:text-2xl text-xl md:text-3xl lg:text-[44px] lg:leading-[55px] font-semibold font-primary'>
                        Limited Time Special Pricing - Act Now!
                    </div>
                    <div className=" text-white md:text-2xl sm:text-xl text-lg lg:text-3xl font-secondary font-bold">
                        Secure Your Reserved GlucoTrust While Stocks Last
                    </div>
                </div>
                <div className=' md:mt-6 sm:mt-4 mt-2 lg:mt-8 flex justify-evenly'>
                    <div className="  grid md:grid-cols-2  md:mx-3 lg:mx-4">
                        <div className='lg:w-[500px] my-4 lg:my-0 mx-2'>
                            <div className=' border-2 border-gray-200 rounded-lg bg-white md:p-8 sm:p-6 p-4 lg:p-12
                             py-4'>
                                <h2 className={`${latobold.className} font-primary md:text-3xl sm:text-2xl text-xl lg:text-4xl font-semibold text-center text-gray-900`}>
                                    1 BOTTLE
                                </h2>
                              
                                <div className=" flex my-2 justify-center">
                                    <img className=' h-64' src="/assets/bottle1.jpg" alt="Product1" />
                                </div>
                                <div className=' text-center'>
                                    <h2 className=' before:content-["$"] md:before:text-2xl sm:before:text-xl before:text-lg lg:before:text-3xl before:inline before:align-super font-bold before:font-bold before:font-primary font-primary md:text-5xl sm:text-4xl text-3xl lg:text-6xl'>{`117`}
                                        <span className=" font-semibold md:text-xl sm:text-lg lg:text-2xl">
                                            {` Per `}
                                        </span>
                                        <div className=" text-center font-semibold md:text-xl sm:text-lg lg:text-2xl">
                                            Bottle
                                        </div>
                                    </h2>
                                </div>
                                <div className="  my-2 text-center">
                                    <div className=' mx-4  my-1 md:block hidden'>
                                        <Link href={props.CBLINK}>
                                            <img src="/assets/cart.png" alt="Checkout" />
                                        </Link>
                                    </div>
                                    <div className='  my-1 md:hidden w-10/12 mx-auto'>
                                        <Link href={props.CBLINK}>
                                            <img src="/assets/cart.png" alt="Checkout" />
                                        </Link>
                                    </div>
                                    <div className=' md:text-xl sm:text-lg  lg:text-2xl font-primary font-bold '>
                                        Total: $117
                                    </div>
                                    <div className="flex justify-center">
                                        <div className=' font-secondary text-gray-600 text-sm '>
                                            {`+ $9.95 Shipping Fee`}
                                        </div>
                                        <MdLocalShipping className=' mx-1 text-lg mt-1' />
                                    </div>
                                    <div className=" font-primary md:text-lg sm:text-base text-sm lg:text-xl font-semibold">
                                        180 Days Guarantee
                                    </div>
                                </div>
                                <div className=' md:flex justify-center hidden'>
                                    <img src="/assets/payment-icons.png" alt="Payment Gateways" />
                                </div>
                                <div className='md:hidden w-10/12 mx-auto'>
                                    <img src="/assets/payment-icons.png" alt="Payment Gateways" />
                                </div>
                            </div>
                        </div>

                        <div className='lg:w-[500px]my-4 lg:my-0 mx-2'>
                            <div className='  border-2 border-gray-200 
                            rounded-lg bg-white md:p-8 sm:p-6 p-4 lg:p-12
                             py-4'>
                                <h2 className=" font-primary md:text-3xl sm:text-2xl text-xl lg:text-4xl font-semibold text-center text-gray-900">
                                    2 BOTTLE
                                </h2>
                              
                                <div className=" flex my-2 justify-center">
                                    <img className='   h-64' src="/assets/twobottle.jpg" alt="Product2" />
                                   
                                </div>
                                <div className=' text-center'>
                                    <h2 className='  before:content-["$"] md:before:text-2xl sm:before:text-xl before:text-lg lg:before:text-3xl before:inline before:align-super font-bold before:font-bold before:font-primary font-primary md:text-5xl sm:text-4xl text-3xl lg:text-6xl'>{`97`}
                                        <span className=" font-semibold md:text-xl sm:text-lg lg:text-2xl">
                                            {` Per `}
                                        </span>
                                        <div className="text-center font-semibold md:text-xl sm:text-lg lg:text-2xl">
                                            Bottle
                                        </div>
                                    </h2>
                                </div>
                                <div className=" mx-4 my-2 text-center">

                                    <div className=' animate-pulse  my-1 md:block hidden'>
                                        <Link href={props.CBLINK}>
                                            <img src="/assets/cart.png" alt="Checkout" />
                                        </Link>
                                    </div>
                                    <div className='  animate-pulse my-1 md:hidden w-10/12 mx-auto'>
                                        <Link href={props.CBLINK}>
                                            <img src="/assets/cart.png" alt="Checkout" />
                                        </Link>
                                    </div>
                                    <div className=' md:text-xl sm:text-lg  lg:text-2xl font-primary font-bold '>
                                        Total: $197
                                    </div>
                                    <div className="flex justify-center">
                                        <div className=' font-secondary text-gray-600 text-sm '>
                                            {`+ Free Shipping`}
                                        </div>
                                        <MdLocalShipping className=' mx-1 text-lg mt-1' />
                                    </div>
                                    <div className="font-primary md:text-lg sm:text-base text-sm lg:text-xl font-semibold">
                                        180 Days Guarantee
                                    </div>
                                </div>
                                <div className='md:flex justify-center hidden'>
                                    <img src="/assets/payment-icons.png" alt="Payment Gateways" />
                                </div>
                                <div className='md:hidden w-10/12 mx-auto'>
                                    <img src="/assets/payment-icons.png" alt="Payment Gateways" />
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default LimitedOffer