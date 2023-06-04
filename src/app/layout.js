import Footer from './components/Footer';
import './globals.css'
import { Lato } from "next/font/google";

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'SLIM CRYSTAL REVIEW',
  description: 'SLIM CRYSTAL WATER BOTTLE REVIEW',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>   
        {children}
        <Footer
        PRIVACY="https://slimcrystal.com/privacy-policy"
        TERMS="https://slimcrystal.com/wpautoterms/terms-and-conditions/"
        SHIPPINGTERMS="https://slimcrystal.com/shipping-policy/"
        />
        </body>
    </html>
  )
}
