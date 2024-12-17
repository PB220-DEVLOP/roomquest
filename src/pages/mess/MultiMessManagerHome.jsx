import React from 'react'
import Gallery from '../../components/mess/Gallery'
import Services from '../../components/mess/Services'
import About from '../../components/mess/About'
import MessDashboard from '../../components/mess/MessDashboard'

const MultiMessManagerHome = () => {
  return (
    <>
      <MessDashboard />
      <Gallery />
      <Services />
      <About />
    </>
  )
}

export default MultiMessManagerHome
