"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import { IconMinus } from "../constants/images";
import images from "../constants/images";
import { Carousel } from "@/components/Carousel";

export default function Home() {
  console.log("images", images);

  const imagesBanner = {
    Banner1: images.Banner1,
    Banner2: images.Banner2,
    Banner3: images.Banner3,
  };

  const imagesQuote = {
    Quote1: images.Quote1,
    Quote2: images.Quote2,
    Quote3: images.Quote3,
    Quote4: images.Quote4,
    Quote5: images.Quote5,
    Quote6: images.Quote6,
  };
  console.log("imagesBanner", imagesBanner);
  console.log("imagesQuote", imagesQuote);

  return (
    <>
      <Carousel images={imagesBanner} dots={false} />
      <div className="flex bg-[#441b12] bg-[url('../assets/images/Pattern-Khong-Gian-2.webp')] place-content-center">
        <div className="text-[#f0a108] p-20 font-sans">
          <p className="font-semibold text-5xl">Không gian Nhà hàng</p>
          <div className="mt-5">
            Với không gian thoáng đãng 3 tầng,
            <p>Quán Cũ luôn sẵn sàng phục vụ từ khách lẻ</p>đến bữa tiệc đông
            người.
            <IconMinus
              className="-ms-5"
              color="#f0a108"
              stroke={1}
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="flex three__image m-20 overflow-hidden">
          <Image
            className=" mr-6 rounded-lg hover:scale-[1.1] transition duration-500"
            src={images.KGNH1}
            alt="khong-gian-quan"
          />
          <Image
            className="mx-5 rounded-sm hover:scale-[1.1] transition duration-500"
            src={images.KGNH2}
            alt="khong-gian-quan"
          />
          <Image
            className="ml-5 rounded-lg hover:scale-[1.1] transition duration-500"
            src={images.KGNH3}
            alt="khong-gian-quan"
          />
        </div>
      </div>
      <div className="fixed top-20 right-0 scale-[1.5] bg-[url('../assets/images/callActionBackground.svg')] z-50 flex flex-col items-end justify-end">
        {" "}
        <Icon>
          <Image className="mt-0.5  " src={images.MenuButton} />
        </Icon>
        <Icon link="https://zalo.me/0898286699">
          <Image
            className="mt-1 mr-1.5 animate-wiggle"
            src={images.ZaloButton}
            height={31.3}
            width={31.3}
          />
        </Icon>
        <Icon link="tel:0898286699">
          <Image
            className="my-2 mr-1.5 animate-wiggle"
            src={images.CallButton}
            height={31.3}
            width={31.3}
          />
        </Icon>
      </div>
      <Icon link="https://m.me/quancuhn">
        <Image
          src={images.MessengerButton}
          height={100}
          width={100}
          className="fixed right-10 bottom-20 animate-bounce z-50"
        />
      </Icon>
      <div className="relative  bg-gradient-to-t from-[#e89a07] to-[#441b12] place-content-center">
        <Carousel
          style="z-49 object-none "
          images={imagesQuote}
          perView={4}
          dots={true}
        />
      </div>
      <div className="flex bg-[#441b12] place-content-center">
        <div className="flex three__image pt-20 pl-80 overflow-hidden">
          <iframe
            className=""
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ft1Z3pXwlPM?si=AoxabSyk7pdJNSIm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-[#f0a108] p-20 font-sans">
          <p className="font-semibold text-5xl text-balance whitespace-normal">
            Ghé Quán Cũ thưởng thức Pa Pỉnh (Cá nướng dân tộc)
          </p>
          <div className="mt-5 w-100">
            <p className="w-96 whitespace-normal">
              Trong tiếng Thái, “Pa” có nghĩa là cá suối, Pa Pỉnh nghĩa là cá
              gập nướng. Cá nướng xong sẽ thơm lừng, đủ hương vị chua, cay,
              ngọt, mặn, đắng của các loại gia vị (kết hợp giữa rau thơm, thìa
              là, riềng sả và đặc biệt: mắc khén).
            </p>
            <IconMinus
              className="-ms-5"
              color="#f0a108"
              stroke={1}
              width="100"
              height="100"
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-full place-content-center bg-black ">
        <Image
          className="object-cover w-full h-full"
          src={images.AnhNhanVien}
        />
      </div>
    </>
  );
}
