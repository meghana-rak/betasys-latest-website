import React from 'react'
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Services from '../components/Services';
import BusinessTransform from '../components/BusinessTransform';
import Insights from '../components/Insights';
import Journey from '../components/Journey';
import Partners from '../components/Partners';

function Homepage() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Services />
      <BusinessTransform />
      <Insights />
      <Journey />
      <Partners />
    </div>
  )
}

export default Homepage
