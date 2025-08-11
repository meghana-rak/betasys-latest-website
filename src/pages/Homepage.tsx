import React from 'react';
import { Helmet } from "react-helmet";
import Hero from '../components/Homepage/Hero';
import WhoWeAre from '../components/Homepage/WhoWeAre';
import Services from '../components/Homepage/Services';
import BusinessTransform from '../components/Homepage/BusinessTransform';
import Insights from '../components/Homepage/Insights';
import Journey from '../components/Homepage/Journey';
import Partners from '../components/Homepage/Partners';

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
