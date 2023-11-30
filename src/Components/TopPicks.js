import React from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w[1520px] m-auto py-2px px-=2">
        {TopPicks.map((item) => {
          return (
          <div className="rounded-3xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-3xl">
                <p className="px-2">{item.title}</p>
            </div>
            
          </div>
        )})}
      </div>
    </>
  );
};
export default TopPicks;
