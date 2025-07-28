import React from 'react'
import HeroSection from '../components/ServicePage/HeroSection'
import OverviewSection from '../components/ServicePage/OverviewSection'
import WhyChoose1 from '../components/ServicePage/WhyChoose1'
import WhyChoose2 from '../components/ServicePage/WhyChoose2'
import Process from '../components/ServicePage/Process'
import Work from '../components/ServicePage/Work'

function ServicePage() {
  return (
    <div>
        <HeroSection/>
        <OverviewSection/>
        <WhyChoose1/>
        <WhyChoose2/>
        <Process/>
        <Work/>
    </div>
  )
}

export default ServicePage