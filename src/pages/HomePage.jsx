import React from "react";

import Announcement from "../components/Announcement";
import BannerOne from "../components/Homepage/BannerOne";
import BannerTwo from "../components/Homepage/BannerTwo";
import Footer from "../components/Homepage/Footer";
// import { ReactComponent as StalexWhiteIcon } from "../images/stalexWhite.svg";

const HomePage = () => {
  return (
    <>
      <Announcement />
      <div className='h-screen bg-slate-700 '>
        <BannerOne />
        <BannerTwo />
        <div
          className={`bg-yellow-400 text-black p-4 
          flex justify-center items-center gap-8 `}
        >
          <h1 className={` text-3xl font-semibold uppercase`}>
            Become a member and get 15% 0ff
          </h1>
          <button
            onClick={() => {}}
            className={`py-3 px-4  uppercase font-semibold 
            bg-black text-white hover:text-slate-500`}
          >
            Sign up for free
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
