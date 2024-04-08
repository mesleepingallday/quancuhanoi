/* eslint-disable react/jsx-key */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { images, navLinks, sideNavLinks } from "../constants";
import BookingNow from "./BookingNow";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerFontStyle =
    "font-lora  hover:underline hover:underline-offset-8 text-2xl font-medium leading-normal";
  const handleOpenNav = () => {
    console.log("Open nav");
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative z-20 w-full">
      <nav className=" flex justify-around items-center max-container p-5 text-[#f0a108] bg-[#441b12]">
        <Link href="/">
          <Image
            src={images.logoQC}
            alt="logo"
            className="m-0 left-0 w-[150px] h-[150px] lg:absolute lg:left-1/2 lg:transform lg:translate-x-[-50%] max-lg:w-[50px] max-lg:h-[50px] max-lg:relative max-lg:-left-10"
          />
        </Link>
        {isOpen && (
          <div className="fixed h-full w-full lg:hidden backdrop-blur-sm top-0 right-0 z-40 ">
            <section className="absolute bg-[#441b12] right-0 top-0 h-screen p-8 gap-8 w-1/2">
              <IoCloseOutline
                onClick={handleOpenNav}
                className="absolute right-10 mt-0 mb-8 text-3xl cursor-pointer"
              />
              <section className="grid grid-rows-3 gap-8 mt-10 place-items-center">
                {sideNavLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`${headerFontStyle}`}
                    onClick={handleOpenNav}
                  >
                    {label}
                  </Link>
                ))}
                <section className="row-start-8 bg-orange-900 rounded-lg py-4 px-8 shadow-lg">
                  <BookingNow
                    text="Đặt bàn ngay"
                    style={`font-lora whitespace-nowrap text-sm font-medium`}
                  ></BookingNow>
                </section>
              </section>
            </section>
          </div>
        )}
        <div className="flex-1 flex gap-20 max-lg:hidden lg:justify-around lg:ml-10">
          {navLinks.map((item) => (
            <div className="flex gap-20">
              {item.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`${headerFontStyle} text-xl`}
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="hidden max-lg:block">
          <GiHamburgerMenu onClick={handleOpenNav} />
        </div>
        <BookingNow
          text="Đặt bàn ngay"
          style={`${headerFontStyle} text-xl max-lg:hidden wide:mr-24`}
        >
          Đặt bàn ngay
        </BookingNow>
      </nav>
    </header>
  );
}
