"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { Lato } from 'next/font/google'
const latobold = Lato({
    weight: '700',
    subsets: ['latin'],
});
const Qna = (props) => {
    const [toggleIcn1, SetIcn1] = useState(true);
    const [toggleIcn2, SetIcn2] = useState(true);
    const [toggleIcn3, SetIcn3] = useState(true);
    const [toggleIcn4, SetIcn4] = useState(true);
    const [toggleIcn5, SetIcn5] = useState(true);
    const [qna1, SetQna1] = useState(true);
    const [qna2, SetQna2] = useState(true);
    const [qna3, SetQna3] = useState(true);
    const [qna4, SetQna4] = useState(true);
    const [qna5, SetQna5] = useState(true);
    const changeIcnQna1 = () => {
        SetIcn1(!toggleIcn1);
    }
    const changeIcnQna2 = () => {
        SetIcn2(!toggleIcn2);
    }
    const changeIcnQna3 = () => {
        SetIcn3(!toggleIcn3);
    }
    const changeIcnQna4 = () => {
        SetIcn4(!toggleIcn4);
    }
    const changeIcnQna5 = () => {
        SetIcn5(!toggleIcn5);
    }
    const Q1 = () => {
        SetQna1(!qna1);
    }
    const Q2 = () => {
        SetQna2(!qna2);

    }
    const Q3 = () => {
        SetQna3(!qna3);

    }
    const Q4 = () => {
        SetQna4(!qna4);

    }
    const Q5 = () => {
        SetQna5(!qna5);
    }
    return (
        <>
            <section className=' my-8  bg-white md:p-6 sm:p-4 p-3 lg:p-8 '>
                <div className={` text-white md:text-3xl sm:text-2xl text-xl lg:text-4xl font-primary font-semibold text-center bg-blue-500 ${latobold.className} rounded-md p-3 mt-4 md:py-4 sm:py-3 py-2  lg:py-6 sm:mx-4 mx-3 md:mx-6 lg:mx-8`}>
                    {props.FAQ}
                </div>
                <div className="md:m-6 sm:m-4 m-3 lg:m-8">
              
                    <div className=' md:my-3 my-2 lg:my-4 text-black shadow-lg border-2 border-gray-200  rounded-lg 
                    lg:py-4 md:py-3 py-2  md:text-xl sm:text-lg  lg:text-2xl font-semibold font-primary'>
                        <div onClick={() => {
                            Q1();
                            changeIcnQna1();
                        }} className=" md:px-6 sm:px-4 px-2 lg:px-8 cursor-pointer flex justify-between">
                            <h2 className="cursor-pointer">
                                {props.Q1} 
                            </h2>

                            <div className={`${toggleIcn1 ? "" : "hidden"}`}>
                                <IoIosArrowDown />
                            </div>
                            <div className={`${toggleIcn1 ? "hidden" : ""}`}>
                                <IoIosArrowUp />
                            </div>

                        </div>
                        <hr className={`${qna1 ? "hidden" : ""} h-[2px] mt-2  bg-opacity-30 bg-black`} />
                        <div className={` md:px-6 sm:px-4 px-2 lg:px-8 ${qna1 ? "hidden" : ""} font-normal text-gray-700 md:text-lg sm:text-base text-sm lg:text-xl
                        font-secondary my-2`}>
                            <p className=' my-3'>
                               {props.A1}
                            </p>
                            
                        </div>
                    </div>

                    <div className=' md:my-3 my-2 lg:my-4 text-black shadow-lg border-2 border-gray-200  rounded-lg 
                    lg:py-4 md:py-3 py-2  md:text-xl sm:text-lg  lg:text-2xl font-semibold font-primary'>
                        <div onClick={() => {
                            Q2();
                            changeIcnQna2();
                        }} className="md:px-6 sm:px-4 px-2 lg:px-8 cursor-pointer flex justify-between">
                            <h2 className="cursor-pointer">
                                {props.Q2}
                            </h2>

                            <div className={`${toggleIcn2 ? "" : "hidden"}`}>
                                <IoIosArrowDown />
                            </div>
                            <div className={`${toggleIcn2 ? "hidden" : ""}`}>
                                <IoIosArrowUp />
                            </div>

                        </div>
                        <hr className={`${qna2 ? "hidden" : ""} h-[2px] mt-2  bg-opacity-30 bg-black`} />
                        <div className={`md:px-6 sm:px-4 px-2 lg:px-8 ${qna2 ? "hidden" : ""} font-normal text-gray-700 md:text-lg sm:text-base text-sm lg:text-xl
                        font-secondary my-2`}>
                            <p className=' my-3'>
                                {props.A2}

                            </p>
                           
                        </div>
                    </div>

                    <div className='md:my-3 my-2 lg:my-4 text-black shadow-lg border-2 border-gray-200  rounded-lg lg:py-4 md:py-3 py-2  md:text-xl sm:text-lg  lg:text-2xl font-semibold font-primary'>
                        <div onClick={() => {
                            Q3();
                            changeIcnQna3();
                        }} className="md:px-6 sm:px-4 px-2 lg:px-8 cursor-pointer flex justify-between">
                            <h2 className="cursor-pointer">
                               {props.Q3}
                            </h2>

                            <div className={`${toggleIcn3 ? "" : "hidden"}`}>
                                <IoIosArrowDown />
                            </div>
                            <div className={`${toggleIcn3 ? "hidden" : ""}`}>
                                <IoIosArrowUp />
                            </div>

                        </div>
                        <hr className={`${qna3 ? "hidden" : ""} h-[2px] mt-2  bg-opacity-30 bg-black`} />
                        <div className={`md:px-6 sm:px-4 px-2 lg:px-8 ${qna3 ? "hidden" : ""} font-normal text-gray-700 md:text-lg sm:text-base text-sm lg:text-xl font-secondary my-2`}>
                           
                            <p className=' my-3'>
                               {props.A3}
                            </p>
                        </div>
                    </div>
                    
                    <div className='md:my-3 my-2 lg:my-4 text-black shadow-lg border-2 border-gray-200  rounded-lg lg:py-4 md:py-3 py-2  md:text-xl sm:text-lg  lg:text-2xl font-semibold font-primary'>
                        <div onClick={() => {
                            Q4();
                            changeIcnQna4();
                        }} className="md:px-6 sm:px-4 px-2 lg:px-8 cursor-pointer flex justify-between">
                            <h2 className="cursor-pointer">
                               {props.Q4}
                            </h2>

                            <div className={`${toggleIcn3 ? "" : "hidden"}`}>
                                <IoIosArrowDown />
                            </div>
                            <div className={`${toggleIcn3 ? "hidden" : ""}`}>
                                <IoIosArrowUp />
                            </div>

                        </div>
                        <hr className={`${qna4 ? "hidden" : ""} h-[2px] mt-2  bg-opacity-30 bg-black`} />
                        <div className={`md:px-6 sm:px-4 px-2 lg:px-8 ${qna4 ? "hidden" : ""} font-normal text-gray-700 md:text-lg sm:text-base text-sm lg:text-xl font-secondary my-2`}>
                           
                            <p className=' my-3'>
                               {props.A4}
                            </p>
                        </div>
                    </div>

                

                    <div className='md:my-3 my-2 lg:my-4 text-black shadow-lg border-2 border-gray-200  rounded-lg lg:py-4 md:py-3 py-2  md:text-xl sm:text-lg  lg:text-2xl font-semibold font-primary'>
                        <div onClick={() => {
                            Q5();
                            changeIcnQna5();
                        }} className=" md:px-6 sm:px-4 px-2 lg:px-8 cursor-pointer flex justify-between">
                            <h2 className="cursor-pointer">
                                {props.Q5}
                            </h2>

                            <div className={`${toggleIcn5 ? "" : "hidden"}`}>
                                <IoIosArrowDown />
                            </div>
                            <div className={`${toggleIcn5 ? "hidden" : ""}`}>
                                <IoIosArrowUp />
                            </div>

                        </div>
                        <hr className={`${qna5 ? "hidden" : ""} h-[2px] mt-2  bg-opacity-30 bg-black`} />
                        <div className={`md:px-6 sm:px-4 px-2 lg:px-8 ${qna5 ? "hidden" : ""} font-normal text-gray-700 md:text-lg sm:text-base text-sm lg:text-xl font-secondary my-2`}>
                            <p className=' my-3'>
                                SLIMCRYSTAL is available through
                                <span className=" text-red-600  ">
                                    <Link href={props.CBLINK} target={"_self"}>
                                       {` Official Website. `}
                                    </Link>
                                </span>
                                For a limited time, they offer 2 discounted packages: Basic Bottle - $117 Per Bottle.
                            </p>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Qna