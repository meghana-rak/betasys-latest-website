import React from 'react';
import EbookHeading from '../components/EbookListing/EbookHeading';
import EbookGrid from '../components/EbookListing/EbookGrid';
import Banner from '../components/Layout/Banner';

const Ebook = () => {
const label = ' Ebook Listing';
  
  return (
    <div>
      {/* <EbookHeading /> */}
      <Banner label = {label}/>
      <EbookGrid />
    </div>
  );
};

export default Ebook;
