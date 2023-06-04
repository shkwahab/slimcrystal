"use client"

import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { GiLobArrow } from "react-icons/gi"
import { BsCartPlus } from "react-icons/bs"
import { TbArrowCurveRight } from "react-icons/tb"
import Qna from "./Qna.js"
import Link from "next/link";
import Ingredients from "./Ingredients";
import Review from "./Review";
import Testimonial from "./Testimonial";
import Bonus from "./Bonus";
import LimitedOffer from "./LimitedOffer";
import Jumbotron from "./Jumbotron";
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});
const latobold = Lato({
  weight: '700',
  subsets: ['latin'],
});

const Header = (props) => {

  return (
    <>
      <section id="header">

        <div className={`text-white uppercase  bg-gradient-to-tl from-blue-800 to-blue-400  font-primary lg:px-40 md:px-28 py-4 px-4 sm:leading-8 sm:px-28 sm:py-8 sm:text-2xl md:text-3xl text-xl lg:text-4xl md:leading-10 lg:leading-[50px] text-center ${latobold.className}`}>
          <h1 className=" md:mx-16 sm:mx-8 mx-4 lg:mx-20">
            {props.HEADLINE}
          </h1>
        </div>
      </section>
      <section className=" p-4 bg-gray-300" id="hero">
        <div className="m-4 lg:mx-16 sm:m-8 sm:py-4 my-4  md:mx-12 md:py-4 bg-gray-100 text-[#212529] shadow-2xl py-2  md:my-16 lg:my-20 rounded-md ">

          <div className={`${latobold.className} ]  text-center px-4 uppercase  text-xl md:px-16 sm:px-8  lg:px-20  lg:leading-[50px] font-primary md:leading-[42px] sm:text-2xl  md:text-3xl lg:text-4xl `}>
            {props.SUBHEADLINE}
            <div className={`${latobold.className} bg-clip-text text-transparent bg-gradient-radial from-blue-800 to-blue-400 font-secondary font-medium uppercase`}>
              {props.SUBHEADLINECTA}
            </div>
          </div>
          <hr className=" bg-gray-700 h-1 mt-4 md:mt-4 md:mb-6 lg:mb-8" />
          <div className=" text-center font-secondary px-4 sm:px-8 my-4 md:px-16  text-base sm:text-xl lg:px-20 md:text-2xl lg:text-3xl">
            <hr className=' h-[3px] bg-black' />
            <div className={`${lato.className} text-black capitalize py-2  md:leading-9 px-3 sm:px-8 lg:leading-[42px] md:px-16 lg:px-20 rounded-md   shadow-md `}>
              {props.SHORTDETAILS}
            </div>
          </div>
          <div className="flex justify-center sm:my-2 md:my-6  lg:my-8 md:mt-8 lg:mt-12">
            <div className=" lg:block hidden">
              <Image src={props.PRODUCTURL} alt="product" width={600} height={500} />
            </div>
            <div className=" md:block lg:hidden hidden">
              <Image src={props.PRODUCTURL} alt="product" width={500} height={400} />
            </div>
            <div className=" sm:block md:hidden hidden">
              <Image src={props.PRODUCTURL} alt="product" width={400} height={300} />
            </div>
            <div className=" block sm:hidden">
              <Image src={props.PRODUCTURL} alt="product" width={300} height={200} />
            </div>
          </div>


          <div className={`${lato.className} font-secondary text-base my-2 sm:text-xl md:text-2xl lg:text-3xl md:my-4 text-[#212529] font-semibold  capitalize flex justify-center`}>
            {props.CLICKTOBUY}
            <GiLobArrow className='mx-[2px] sm:mx-1 md:mx-2' />
          </div>

          <div className="flex justify-center my-2">
            <Link target={"_self"} href={props.CBLINK}>
              <button className={`${latobold.className} px-4 sm:px-8 sm:text-lg md:px-16  lg:px-20 sm:py-2  md:py-4 text-sm py-1 hover:bg-blue-900 duration-700 transition-all  bg-[#1f5986] md:text-2xl lg:text-3xl  capitalize font-primary text-gray-100 rounded-full`}>
                {props.CTATITLE}
              </button>
            </Link>
          </div>
          <div className=" my-20 mt-20 grid sm:grid-cols-2">
            <div className=' sm:mx-2 md:mx-4'>
              <div className=" lg:block md:hidden hidden">
                <img src={props.TWOBOTTLE} alt="2BOTTLE" />
              </div>
              <div className=" md:block hidden mt-2 lg:hidden">
                <img src={props.TWOBOTTLE} className=' h-[400px]' alt="2BOTTLE" />
              </div>
              <div className=" sm:block hidden mt-2 md:hidden">
                <img src={props.TWOBOTTLE} alt="2BOTTLE" />
              </div>
              <div className=" block sm:hidden">
                <img src={props.TWOBOTTLE} className=' w-8/12 mx-auto' alt="2BOTTLE" />
              </div>
              <div className='lg:block hidden'>
                <Image src={"/assets/whychooseus.png"}  alt="benefits" width={700} height={700} />
              </div>
              <div className='lg:hidden md:block hidden my-4'>
                <Image src={"/assets/whychooseus.png"}  alt="benefits" width={800} height={700} />
              </div>
              <div className='md:hidden sm:block hidden my-2'>
                <Image src={"/assets/whychooseus.png"}  alt="benefits" width={700} height={600} />
              </div>
              <div className=' sm:hidden my-2'>
                <Image src={"/assets/whychooseus.png"}  alt="benefits" width={500} height={400} />
              </div>
              <div className=' hidden lg:flex justify-center '>
                <Image src={"/assets/stars.png"} alt="stars"  width={400} height={400} />
              </div>
              <div className=' hidden lg:hidden md:my-4 md:flex justify-center '>
                <Image src={"/assets/stars.png"} alt="stars"  width={300} height={300} />
              </div>
              <div className=' md:hidden  my-2 flex justify-center '>
                <Image src={"/assets/stars.png"} alt="stars"  width={200} height={200} />
              </div>
              <div className={`  text-lg sm:text-2xl sm:m-1 md:text-3xl lg:text-4xl lg:leading-[45px] md:leading-10  lg:mx-4 lg:my-4 md:m-3 text-center ${latobold.className} uppercase`}>
                <h2>
                  {props.CTAHEADLINE2}
                  <span className={`${latobold.className} uppercase text-blue-700 font-medium`}>
                    {props.CTAOFFER2}
                  </span>
                </h2>
              </div>
            </div>

            <div>
              <h2 className="text-blue-700 sm:text-3xl md:text-4xl lg:text-5xl font-primary text-center sm:text-left    lg:mb-4  md:mb-3 text-2xl my-1 sm:m-0 font-bold ">
                {props.QUESTION}
              </h2>
              <p className="text-sm mx-4 sm:ml-0 md:text-xl sm:text-base sm:mr-4  lg:text-2xl font-secondary  md:mr-6 lg:mr-8 text-gray-600">
                {props.ANSWER}
              </p>
              <p className=' text-sm mx-4 sm:ml-0 my-1 md:text-xl sm:text-base sm:mr-4 lg:text-2xl font-secondary md:mr-6 lg:mr-8 text-gray-600 md:my-3 lg:my-4'>
                The Formula is Easy to Take Each Day, and it Only Uses.

                <span className=" font-semibold font-primary text-blue-500">
                  {` Natural INGRIDENTs `}
                </span>
                to Get the Desired Effect.
              </p>
              <p className=' mx-4 my-2 text-xl  sm:leading-normal  font-primary sm:text-2xl md:text-3xl sm:my-4 sm:mx-2  lg:text-4xl md:mx-4 lg:mx-6 md:my-6 lg:my-8 border-2 border-dashed border-blue-500 rounded-lg lg:py-2   lg:leading-[50px] md:px-[2px] lg:px-1 text-center font-bold '>
                Try
                <span className=" text-blue-500">

                  {` ${props.PRODUCTNAME} `}

                </span>
                For Over
                <span className="text-blue-500">

                  {` 50% OFF Today! `}

                </span>
              </p>
              <p className={`${lato.className} uppercase text-xl leading-4 sm:leading-normal mx-2 sm:text-xl md:text-2xl lg:text-3xl text-center font-primary line-through md:mx-3  lg:mx-4`}>
                {props.REGULARPRICE}
              </p>
              <p className={`${latobold.className} uppercase text-xl sm:leading-normal leading-5 text-blue-500 font-semibold text-center sm:text-2xl  md:text-4xl lg:text-[40px] md:mx-3 my-2 lg:mx-4  font-primary`}>
                {props.NEWPRICE}
              </p>

              <div className=" flex justify-center my-4">
                <Link href={props.CBLINK}>
                  <button className='py-2 text-xl px-4 flex rounded-full sm:text-2xl  md:py-3 lg:py-4 md:px-6 lg:px-8 bg-yellow-300 hover:bg-yellow-400 duration-500 text-gray-700  transition-all hover:text-gray-900 font-bold md:text-3xl lg:text-4xl font-primary capitalize'>
                    Get a discount
                    <BsCartPlus className=' ml-2 lg:ml-4 md:ml-3 mt-2 md:text-2xl lg:text-3xl' />
                  </button>
                </Link>
              </div>
              <div className='sm:mx-8 mx-4 mt-2 sm:mt-3 flex justify-center md:mx-12 lg:mx-16 lg:my-4 md:my-3'>
                <TbArrowCurveRight className=' text-3xl sm:text-4xl sm:mx-1 animate-bounce md:mx-2 text-blue-500 md:text-5xl lg:text-6xl' />
                <TbArrowCurveRight className=' text-3xl mx-1   sm:text-4xl sm:mx-1 animate-bounce md:mx-2 text-blue-500 md:text-5xl lg:text-6xl' />
                <TbArrowCurveRight className='   text-3xl mx-1  sm:text-4xl sm:mx-1 animate-bounce md:mx-2 text-blue-500 md:text-5xl lg:text-6xl' />
              </div>

            </div>


          </div>
        <Ingredients
         INGRIDENTS="INGRIDENTs of SLIMCRYSTAL"
         INGRIDENT1="Amethyst stone: Relieves stress, balances moods, aids in weight loss, and supports overcoming addictions."
         INGRIDENT2="Clear Quartz: Boosts immunity, restores balance, enhances mental clarity for better diet choices."
         INGRIDENT3="Moonstone: Ignites growth, fosters strength, inspires motivation, propels goals, symbolizes new beginnings."
         INGRIDENT4="Citrine: Energizes, treats depression, boosts confidence, attracts success, aids detox, improves digestion."
         INGRIDENT5="Carnelian stone: Restores vitality, enhances motivation, boosts metabolism, may reduce cellulite."
         INGRIDENT6="Sodalite: Boosts metabolism, raises consciousness, curbs cravings, supports blood pressure."
         INGRIDENT7="Red Agate: Ignites vitality, fosters emotional stability, enhances self-confidence, amplifies willpower."
         INGRIDENT8="Red Jasper: Enhances circulation, detoxifies blood, strengthens heart, aids anemia, supports recovery."
         INGRIDENT9="Green Aventurine: Physical healing, wealth, prosperity, compassionate behavior."
         />
         <Review
         WHYCHOOSEUS=" Why Choose SLIMCRYSTAL?"
         />
         <Testimonial
        
         PIC1="/assets/testimonial1.jpg"
         PIC2="/assets/testimonial2.jpg"
         PIC3="/assets/testimonial3.jpg"
         PIC4="/assets/testimonial4.jpg"
         />
         <Bonus
         />
         <LimitedOffer
        CBLINK="https://17a54lh4ox603kdhmaty5t7nf8.hop.clickbank.net/?tid=googleads"
         />
         <Qna
         FAQ="SLIMCRYSTAL Frequently Asked Questions"
         Q1="What is SlimCrystal, and how does it work?"
         A1="SlimCrystal is a product that aims to support weight loss and overall health. It utilizes crystal-infused water bottles to provide potential benefits. The crystals are believed to enhance the properties of water, promoting hydration and overall well-being. "
         Q2="What are the potential benefits of using SlimCrystal?"
         A2="The potential benefits of using SlimCrystal include natural weight loss support, improved hydration, detoxification, and increased energy levels. Additionally, it may help with motivation, making healthy choices, and supporting overall health."
         Q3="Is SlimCrystal suitable for everyone?"
         A3="SlimCrystal is generally considered safe for most individuals. However, it's advisable to consult with a healthcare professional before using any new product, especially if you have underlying medical conditions, are pregnant or nursing, or are taking any medications."
         Q4="What is the return policy for SlimCrystal?"
         A4="SlimCrystal offers a 60-day money-back guarantee. If you are not satisfied with the product, you can return it within 60 days of your purchase for a full refund. Simply contact their customer support via email, and they will guide you through the return process."
         Q5="How can I purchase SlimCrystal and what are the available options? "
        CBLINK="https://17a54lh4ox603kdhmaty5t7nf8.hop.clickbank.net/?tid=googleads"
         />
         <Jumbotron
        CBLINK="https://17a54lh4ox603kdhmaty5t7nf8.hop.clickbank.net/?tid=googleads"
         />
        </div>
      </section>
    </>
  );
};
export default Header