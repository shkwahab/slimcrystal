import React from 'react'

import { Lato } from 'next/font/google'

const latobold = Lato({
    weight: '700',
    subsets: ['latin'],
});
const Ingredients = (props) => {
    return (
        <>
            <div className="md:py-6  sm:py-4 ">
                <h2 className={`${latobold.className} text-center uppercase   text-blue-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl `}>
                    {props.INGRIDENTS}
                </h2>
                <div className='flex my-4 justify-center'>
                    <img src={`/assets/ingridents.jpg`} alt="INGREDIENTS" />
                </div>
            </div>
           <div className={`ml-4 sm:mx-8 md:ml-10`}>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT1}
                    </h2>
                </div>
            </div>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT2}
                    </h2>
                </div>
            </div>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT3}
                    </h2>
                </div>
            </div>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT4}
                    </h2>
                </div>
            </div>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT5}
                    </h2>
                </div>
            </div>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT6}
                    </h2>
                </div>
            </div>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT7}
                    </h2>
                </div>
            </div>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT8}
                    </h2>
                </div>
            </div>
            <div className=" flex my-4">
                <div>
                    <img className='w-10' src="/assets/tick.png" alt="tickIcon" />
                </div>
                <div>
                    <h2 className={`sm:text-lg md:text-xl INGRIDENT ${latobold.className}`}>
                    {props.INGRIDENT9}
                    </h2>
                </div>
            </div>

            </div>
           




        </>
    )
}

export default Ingredients