import React from 'react'
import Banner from '../components/Layout/Banner'
import AboutSection from '../components/Partners/AboutSection'
import Benefits from '../components/Partners/Benefits'
import WhyDatabricks from '../components/Partners/WhyDatabricks'
import Stories from '../components/Partners/Stories'

function PartnersPage() {
    const label = 'Your Trusted Databricks Consulting Partner'
  return (
    <div>
      <Banner label = {label}/>
      <AboutSection/>
      <Benefits/>
      <WhyDatabricks/>
      <Stories/>
    </div>
  )
}

export default PartnersPage
