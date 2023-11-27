import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from "react-icons/ai";
const TopNav = () => {
  return (
    <div className="max-w-[1520] mx-auto flex justify-beetwen item-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
            <AiOutlineMenu size={25}/>
        </div>
        <h1 className="text-2xl smtext-3xl lg:text-4xl px-2">
            Yum
            <span>Eats</span>
        </h1>
        <div className="hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-orange-700 text-white rounded-full p-2 text-bold">Free</p>
            <p>Delivery</p>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
