import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import nikeBg1 from "../../images/background/nikebg-1.jpg";

const bgUrl =
  "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const BannerOne = () => {
  return (
    <section
      className={`relative bg-nike-1 bg-cover bg-center bg-no-repeat w-full h-[800px] `}
    >
      <div className='absolute inset-0 bg-white/30 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-white/30'></div>

      <div
        className={`relative mx-auto px-4 py-32 
      sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8`}
      >
        <div className='max-w-xl text-center sm:text-left text-black'>
          <h1 className='text-3xl font-extrabold sm:text-5xl text-black'>
            Let us make it your
            <strong className='block font-extrabold text-rose-700'>
              Forever Home.
            </strong>
          </h1>

          <p className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <a
              href='#'
              className={`flex justify-around px-3 py-3 text-sm font-medium text-white shadow 
              rounded bg-rose-700 hover:bg-rose-500 w-[180px] hover:font-bold  `}
            >
              <p>Explore Now</p>
              <AiOutlineArrowRight className='text-lg' />
            </a>

            <a
              href='#'
              className={`flex justify-around w-[180px] rounded bg-white px-3 py-3 text-sm font-medium
               text-rose-500 shadow hover:text-rose-700 hover:font-bold  `}
            >
              <p>Shop Now</p>
              <AiOutlineArrowRight className='text-lg' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
