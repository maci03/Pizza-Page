import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">
            Burger Lord
          </h1>
          <p>
            A hamburger, or simply burger, is a food consisting of
            fillings—usually a patty of ground meat, typically beef—placed
            inside a sliced bun or bread roll.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Tbilisi</li>
              <li className="py-2 text-sm">Zugdidi</li>
              <li className="py-2 text-sm">Telavi</li>
              <li className="py-2 text-sm">Soxumi</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Gori</li>
              <li className="py-2 text-sm">Rustavi</li>
              <li className="py-2 text-sm">Gali</li>
              <li className="py-2 text-sm">Terjola</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Oni</li>
              <li className="py-2 text-sm">Vani</li>
              <li className="py-2 text-sm">Wyaltubo</li>
              <li className="py-2 text-sm">Otobaia</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Batumi</li>
              <li className="py-2 text-sm">Khoni</li>
              <li className="py-2 text-sm">Borjomi</li>
              <li className="py-2 text-sm">Mestia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
