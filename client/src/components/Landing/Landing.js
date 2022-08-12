import React from 'react'
import NavBar from '../NavBar/NavBar'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'

function Landing() {
  return (
    <div className='container'>
      <NavBar />
      <Menu />
      <div className='landing'>Landing</div>
      <Footer />
    </div>
  )
}

export default Landing