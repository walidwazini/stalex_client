import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const BannerTwo = () => {
  return (
    <section
      className={`relative bg-adidas-1 bg-cover bg-center bg-no-repeat w-full h-[800px] `}
    >
      <div className='absolute inset-0 bg-white/30 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-white/30'></div>

      <div
        className={`relative mx-auto px-4 py-32 
      sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8`}
      >
        <div className='max-w-xl text-center sm:text-left text-white'>
          <h1 className='text-3xl font-extrabold sm:text-5xl '>
            Dare to be
            <strong className='block font-extrabold text-slate-800'>
              Creative.
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
              rounded bg-slate-700 hover:bg-slate-600 w-[180px] hover:font-bold  `}
            >
              <p>Explore Now</p>
              <AiOutlineArrowRight className='text-lg' />
            </a>

            <a
              href='#'
              className={`flex justify-around w-[180px] rounded bg-white px-3 py-3 text-sm font-medium
               text-slate-600 shadow hover:text-slate-700 hover:font-bold  `}
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

export default BannerTwo;
