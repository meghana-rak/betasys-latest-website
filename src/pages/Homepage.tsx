import React from "react";
import Hero from "../components/Homepage/Hero";
import WhyChooseUs from "../components/Homepage/WhyChooseUs";
import WhoWeAre from "../components/Homepage/WhoWeAre";
import Services from "../components/Homepage/Services";
import FAQComponent from "../components/Homepage/Faq";
import BusinessTransform from "../components/Homepage/BusinessTransform";
import Insights from "../components/Homepage/Insights";
import Journey from "../components/Homepage/Journey";
import Partners from "../components/Homepage/Partners";
import Product from "../components/Homepage/Products";
import SuccessStories from "../components/Homepage/Stories";

function Homepage() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Product />
      <Services />
      <WhyChooseUs />
      <BusinessTransform />
      <Insights />
      <SuccessStories />
      <FAQComponent />
      {/* <Journey /> */}
      <Partners />
    </div>
  );
}

export default Homepage;
