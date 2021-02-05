import React from 'react';

import Announcement from './Announcement/Announcement';
import LifeStyleShowBar from './LifeStyleShowBar/LifeStyleShowBar';
import ProductsShowbar from './ProductsShowbar/ProductsShowbar';
import SocialMediaShowBar from './SocialMediaShowBar/SocialMediaShowBar';

const Home = () => {
  return (
    <div>
      <Announcement />
      <ProductsShowbar />
      <LifeStyleShowBar />
      <SocialMediaShowBar />
    </div>
  );
}

export default Home;