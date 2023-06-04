"use client"
import React from "react"
import Header from './components/Header'
import ScrollToTop from "react-scroll-to-top"
export default function Home() {
  return (
    <>
    <ScrollToTop smooth={true} top={100} className={" px-1"}  />
     <Header
      CBLINK="https://17a54lh4ox603kdhmaty5t7nf8.hop.clickbank.net/?tid=googleads"
       HEADLINE="Slim Crytal Only $97/Bottle - Limited Time Offer"
       SUBHEADLINE="Slim Crystal Special Offer"
       SUBHEADLINECTA="50% OFF - SAVE $200 + FREE Bonuses"
       SHORTDETAILS="Transform Your Weight Loss Journey and Prevent Dizziness with Crystal-Infused Water!"
       PRODUCTURL="/assets/product.jpg"
       CLICKTOBUY="Click The Button To Buy The SLIM CRYSTAL"
       CTATITLE="Click Here To Buy It From The Offical Site"
       TWOBOTTLE="/assets/twobottle.jpg"
       CTAHEADLINE2="Order SLIMCRYSTAL TODAY And Save Up To "
       CTAOFFER2="$200! Save Over 50% + FREE Shipping"
       QUESTION="What is SlimCrystal?"
       ANSWER="SlimCrystal is a water bottle infused with natural crystals, promoting healthy weight loss and overall well-being. By drinking from this bottle, you can benefit from the revitalizing properties of the crystals, experiencing natural weight loss, increased energy, and improved health. Use SlimCrystal daily for positive effects on your well-being."
       PRODUCTNAME="Slim Crytal"
       REGULARPRICE="Regular Price: $194/Bottle"
       NEWPRICE="Only For Today: $97/Bottle "
      />
    </>
  )
}
