import React from "react";

import Announcement from "../components/Announcement";
import BannerOne from "../components/Homepage/BannerOne";

const HomePage = () => {
  return (
    <>
      <Announcement />
      <div className='h-screen bg-slate-700 '>
        <BannerOne />
      </div>
    </>
  );
};

export default HomePage;
