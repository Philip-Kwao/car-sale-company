import React from 'react'
import Hero from '../components/about/Hero'
import OurStory from '../components/about/OurStory'
import ChooseUs from '../components/about/ChooseUs'
import VisitUs from '../components/about/VisitUs'

const page = () => {
  return (
    <div className='min-h-screen'>
      <Hero />
      <OurStory />
      <ChooseUs />
      <VisitUs />
    </div>
  )
}

export default page