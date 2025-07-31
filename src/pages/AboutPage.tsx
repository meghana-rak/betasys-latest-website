import React, { useEffect, useState } from 'react';


import Herosection from '../components/Aboutpage/Herosection';
import OurValues from '../components/Aboutpage/OurValues';
import OurMission from '../components/Aboutpage/OurMission';
import GuidedBy from '../components/Aboutpage/GuidedBy';

function AboutPage() {
    return (
        <div className="min-h-[300vh] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
            <Herosection />
            <OurMission />
            <OurValues />
            <GuidedBy />
        </div>
    )
}

export default AboutPage
