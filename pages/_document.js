import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body data-theme='corporate' className='min-h-screen bg-white flex flex-col justify-between'>
        {/* <Navbar /> */}
        <div className='grow bg-white'>
          <Main />
          <NextScript />
        </div>
        <Footer />
      </body>
    </Html>
  )
}
