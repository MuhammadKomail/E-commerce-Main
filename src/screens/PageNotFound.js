import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer1'
import MainCart from '../screens/CartScreen'


function PageNotFound() {
  return (
    <>
      <Header />
      <div className='pageNotFOund'>
        Page Not Found 404
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound
