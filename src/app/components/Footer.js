import Link from 'next/link'
import React from 'react'

const Footer = (props) => {
    return (
        <>
            <div className=' text-white  bg-gray-800 sm:px-12 sm:py-4 px-4 py-2 md:px-16 md:py-6 lg:px-20 lg:py-8'>
                <div className="my-8">
                    <h2 className=' uppercase sm:text-2xl text-lg md:text-3xl my-2 font-semibold font-primary text-center'>
                        FDA Compilance
                    </h2>
                    <p className=' text-sm sm:text-left  sm:text-lg font-light font-optional'>
                        The information on this website has not been evaluated by th Food & Drug Adminsitration or any other medical body. We don't aim to dignose,treat,cure or prevent any illness or disease. Information is shared for educational purpose only. You should contact your doctor before acting on act of this website, especially if your are pregnant,nursing,taking medication or having medical condition.
                    </p>
                </div>
                <div className="   flex  sm:flex-row flex-col items-center sm:items-baseline  sm:justify-center">
                    <p className='sm:text-lg  after:hidden sm:after:inline  sm:after:mx-2 sm:after:text-lg after:text-base md:after:text-xl  after:content-["|"]'>
                        <Link href={props.PRIVACY} target={"_blank"}>
                            PRIVACY POLICY
                        </Link>
                    </p>
                    <p className='sm:text-lg  a after:hidden sm:after:inline sm:after:mx-2 sm:after:text-lg after:text-base md:after:text-xl  after:content-["|"]'>
                        <Link href={props.TERMS} target={"_blank"}>
                            TERMS AND CONDITION
                        </Link>
                    </p>
                    <p className='sm:text-lg af after:hidden sm:after:inline sm:after:mx-2 sm:after:text-lg after:text-base md:after:text-xl  after:content-["|"] after:invisible '>
                        <Link href={props.SHIPPINGTERMS}>
                            SHIPPING TERMS
                        </Link>

                    </p>
                </div>
            </div>
            <div className=' text-white px-2 py-2 sm:p-4 text-center text-sm sm:text-lg font-secondary  uppercase bg-black'>

                <p className='my-2'>
                    CopyRight&copy;{`${new Date().getFullYear()} SLIMCRYSTAL by Cerified Reviews.US All Rights Reserved.`}
                </p>
            </div>
        </>
    )
}

export default Footer