"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Card from "./Card";

const Slider = () => {
  const div = useRef();
  const handleClick = (e) => {
    if (e.currentTarget.id === "left") {
      div.current.scrollBy(-600, 0);
    } else {
      div.current.scrollBy(600, 0);
    }
  };
  return (
    <section className="my-container p-[30px] relative ">
      {/*Heading  */}
      <div className="flex items-center justify-between pb-[30px] ">
        <h1 className="whitespace-pre font-cabinet font-medium text-gray3939 text-4xl">
          Articles similaires
        </h1>
        <h2 className="whitespace-pre font-cabinet font-medium text-gray3939 underline">
          Voir toute la collection
        </h2>
      </div>

      {/* Buttons  positon absolute*/}
      <div>
        <button
          id="left"
          onClick={(e) => handleClick(e)}
          className="absolute cursor-pointer bg-[#5CD2DD] p-2  z-10 left-0 top-1/2 -translate-y-full"
        >
          <Image
            src="/left_arrow.png"
            alt="left arrow"
            width={"24"}
            height={"24"}
          />
        </button>
        <button
          id="right"
          onClick={(e) => handleClick(e)}
          className="absolute cursor-pointer bg-[#5CD2DD] p-2 right-0 z-10 rotate-180 top-1/2 -translate-y-full"
        >
          <Image
            src="/left_arrow.png"
            alt="left arrow"
            width={"24"}
            height={"24"}
          />
        </button>
      </div>

      {/* Cards Container */}
      <div
        ref={div}
        className="flex gap-5 overflow-hidden relative [scroll-behaviour:smooth] transition-all"
      >
        {/* Cards  */}
        {Array.from({ length: 15 }).map((e, i) => (
          <Card key={i} />
        ))}
      </div>
    </section>
  );
};

export default Slider;
