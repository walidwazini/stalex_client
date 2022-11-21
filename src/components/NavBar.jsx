import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

import { menus } from "../dummyData";

const NavBar = () => {
  return (
    <nav className='w-full h-32 bg-black text-white flex flex-col '>
      <div
        id='announcement'
        className={`bg-[#131313] flex items-center px-10 text-xs h-1/3  `}
      >
        <div className='w-1/2 '>
          <Link to={"/"}>Logo</Link>
        </div>
        <div className='w-1/2 flex justify-end gap-4  '>
          <div>Find a Store</div>
          <div>
            <Link className='hover:text-slate-300' to={"/"}>
              Help Us
            </Link>
          </div>
          <div>Join Us</div>
          <div>
            <Link className='hover:text-slate-300' to={"/login"}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div id='menu' className='flex px-10 py-2 w-full h-2/3 '>
        <div className={`basis-[30%]`}>Logo</div>
        <div className={`basis-[40%] px-1 flex justify-evenly items-center  `}>
          {menus.map((menu) => (
            <div
              className={`dropdown dropdown-hover hover:cursor-pointer`}
              key={menu.id}
            >
              <div tabIndex={0}>{menu.title}</div>
              <ul
                tabIndex={0}
                className={`dropdown-content menu p-2 shadow-md rounded-md w-44 bg-slate-900`}
              >
                {menu.submenus.map((submenu) => (
                  <li key={submenu.id} className={`p-2 hover:bg-slate-700`}>
                    {submenu.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`basis-[30%] flex justify-between `}>
          <div className='basis-2/3 flex items-center justify-center '>
            <input
              placeholder='Search'
              className={`bg-slate-300 selection:bg-red-300 text-slate-400 p-2 rounded-lg`}
            />
          </div>
          <div className='basis-1/3  text-2xl flex justify-evenly items-center'>
            <MdFavoriteBorder />
            <BsBag />
          </div>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
