import React from "react";

import Announcement from "../components/Announcement";
import BannerOne from "../components/Homepage/BannerOne";
import BannerTwo from "../components/Homepage/BannerTwo";

const HomePage = () => {
  return (
    <>
      <Announcement />
      <div className='h-screen bg-slate-700 '>
        <BannerOne />
        <BannerTwo />
      </div>
    </>
  );
};

export default HomePage;
