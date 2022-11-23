import React from "react";

import Announcement from "../components/Announcement";

const HomePage = () => {
  return (
    <>
      <Announcement />
      <div className='h-screen bg-slate-700 '>
        <h1 className='text-3xl font-bold underline text-blue-600 '>
          HomePage
        </h1>
      </div>
    </>
  );
};

export default HomePage;
