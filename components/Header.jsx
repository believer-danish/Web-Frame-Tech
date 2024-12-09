"use client";
import MyContext from "@/utils/MyContext";
import Image from "next/image";
import { useContext, useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const data = useContext(MyContext);
  const handleSidebar = () => setSidebar((prev) => !prev);
  return (
    <header className="my-container flex flex-col pt-8 pl-7 pr-5  ">
      <div className="flex items-center justify-between max-md:items-start">
        <div className="flex gap-[11px] items-center max-md:flex-col max-md:items-start  flex-1">
          {/* Logo */}
          <div className="flex-shrink-0 motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier">
            <Image src="/logo.png" alt="logo" width={"133"} height={"66"} />
          </div>

          {/* SearchBar */}
          <div className="flex max-w-3xl w-full  rounded-md  pl-4 gap-2  bg-[#F9FAFB] ">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Rechercher un produit"
              className="border-none outline-none flex-1 w-full bg-inherit placeholder:text-[#667482] text-[14px] 
            placeholder:font-geist m-0"
            />

            <Image
              src="/search.png"
              alt="search icon"
              width={"49"}
              height={"50"}
              objectFit="cover"
            />
          </div>
        </div>

        {/*Navigation Links*/}
        <nav
          className={`motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur${
            sidebar ? "max-lg:translate-x-[0%]" : "max-lg:translate-x-[-100%]"
          } z-10 max-lg:fixed  max-lg:flex-col max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-3/4 max-lg:justify-start max-lg:items-start max-lg:p-8
          flex gap-3 w-max max-lg:bg-slate-100 justify-end items-center transition-all font-poppins font-medium text-[14px] [line-height:21px] text-[#3B4347]`}
        >
          <div
            className="flex  items-center gap-2 p-[10px] rounded-md cursor-pointer
          before:[transition:height_400ms_ease] overflow-hidden
           relative   before:absolute before:left-0 before:top-0 before:w-full before:h-0  before:hover:h-full   before:bg-yellow-300"
          >
            <div className="flex  items-center gap-2 relative z-10">
              <Image
                src="/bulb.png"
                alt="bulb icon"
                width={"20"}
                height={"20"}
              />
              <span>Inspirations</span>
            </div>
          </div>

          <div
            className=" p-[10px] rounded-md cursor-pointer
                   before:[transition:height_400ms_ease] overflow-hidden
           relative   before:absolute before:left-0 before:top-0 before:w-full before:h-0  before:hover:h-full   before:bg-yellow-300 "
          >
            <div className="relative z-10 flex  items-center gap-2">
              <Image
                src="/heart.png"
                alt="heart icon"
                width={"18"}
                height={"18"}
              />
              <h1 className="whitespace-pre cursor-pointer">Mes favoris</h1>
              <span className="text-[10px] bg-[rgba(202_,210_,213_,0.4)] px-2 rounded-[30px]">
                {data.likes}
              </span>
            </div>
          </div>

          <div
            className=" px-4 py-[10px] bg-[#0093D0] text-white rounded-md cursor-pointer
          before:[transition:width_400ms_ease] overflow-hidden 
           relative   before:absolute before:left-0 before:top-0 before:w-0 before:hover:w-full before:h-full   before:bg-red-400"
          >
            <div className="flex   items-center gap-2 relative z-10">
              <Image
                src="/shopping.png"
                alt="shopping icon"
                width={"18"}
                height={"18"}
              />
              <span>Panier</span>
            </div>
          </div>
          <div className="flex   items-center gap-[18px] p-[10px] cursor-pointer">
            <span
              className="w-11 h-11 rounded-full bg-[#EAEDEE] px-[19px]
            n"
            ></span>
            <select
              name="language"
              id="language"
              className="bg-transparent cursor-pointer"
            >
              <option value="Fr">Fr</option>
              <option value="En">En</option>
              <option value="Hi">Hi</option>
            </select>
          </div>
        </nav>
        {/* Menu */}
        <div onClick={handleSidebar} className="ml-8 lg:hidden cursor-pointer">
          <Image src="/menus.png" alt="menu icon" width={"60"} height={"60"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
