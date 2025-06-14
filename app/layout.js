// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StoreProvider from "./store/storeProvider";
import { Suspense } from 'react'
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: 'Cambay Tiger',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' }, // optional fallback
    ],
  },
};


export default function RootLayout({ children }) {
  console.log("inside layout")
  return (
    <html lang="en">
    <head>
       <script src="https://checkout.razorpay.com/v1/checkout.js"/>
    </head>
      <body
      >
      <StoreProvider>
    <Navbar/>
              <Suspense>
        {children}
     </Suspense>
        <Footer/>
   </StoreProvider>
        
      </body>
      
    </html>
  );
}
