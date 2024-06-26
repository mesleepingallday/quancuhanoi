"use client";
import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import { useRef } from "react";
import images, { IconMinus } from "../constants/images";
export default function Home() {
  const imagesArray = useRef([
    "/_next/static/media/AnhBannerWeb-QuanCu-04-PC-2048x896-1.c579e9a8.webp",
    "/_next/static/media/AnhBannerWeb-QuanCu-05-PC-2048x896-1.e2cc8a0e.webp",
    "/_next/static/media/AnhBannerWeb-QuanCu-01-1-2048x1347-1-1024x674.fe6add2c.webp",
  ]);
  const imagesArray2 = useRef([
    "/_next/static/media/220812-QuoteBF-QCweb-1-1024x1024-1.b8a460cf.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-2-1024x1024-1.180ad373.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-3-1024x1024-1.05fb6498.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-4-1024x1024-1.7fddcdb7.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-5-1024x1024-1.5ad19bcf.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-6-1024x1024-1.bc4e21f2.webp",
  ]);
  return (
    <>
      <section className="relative top-0 flex flex-1">
        <ImageSlider
          componentStyle="xl:padding-1 wide:padding-r padding-b"
          imageUrls={imagesArray.current}
          bigStyle={`w-full overflow-hidden transition ease-in-out duration-500`}
          slideStyle={`w-full`}
          dots={false}
        />
      </section>
      <div className="grid grid-cols-3 bg-[#441b12] bg-[url('../assets/images/Pattern-Khong-Gian-2.webp')] max-lg:grid-rows-2 max-lg:text-center max-lg:grid-cols-1 max-lg:place-items-center">
        <div className="text-[#f0a108] font-lora mt-20 ms-20 max-lg:ms-0 ">
          <p className="font-semibold text-5xl max-lg:text-[30px]">
            Không gian Nhà hàng
          </p>
          <div className="mt-5">
            Với không gian thoáng đãng 3 tầng,
            <p>Quán Cũ luôn sẵn sàng phục vụ từ khách lẻ</p>đến bữa tiệc đông
            người.
            <IconMinus
              className="-ms-5 max-lg:m-0 max-lg:w-[50px]"
              color="#f0a108"
              stroke={1}
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 my-20 mr-5 gap-5 lg:my-10 col-span-2 lg:mr-5 max-lg:row-start-2 max-lg:m-0 max-lg:items-center max-lg:col-span-3 max-lg:gap-3 place-items-center max-md:place-items-start">
          <Image
            className="rounded-lg hover:scale-[1.1] hover:rounded-lg transition duration-500 max-md:object-contain xl:ms-20 h-3/4 "
            e
            src={images.KGNH1}
            alt="khong-gian-quan"
          />
          <Image
            className="rounded-sm hover:scale-[1.1] hover:rounded-sm transition duration-500 max-md:object-contain h-3/4 max-md:-ms-2"
            src={images.KGNH2}
            alt="khong-gian-quan"
          />
          <Image
            className="rounded-lg hover:scale-[1.1] transition duration-500 max-md:object-contain h-3/4"
            src={images.KGNH3}
            alt="khong-gian-quan"
          />
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-[#e89a07] to-[#441b12] place-content-center">
        <div className="image-slider-container">
          <ImageSlider
            imageUrls={imagesArray2.current}
            bigStyle={`w-full overflow-hidden transition ease-in-out duration-500`}
            dots={false}
            imagePerSlide={3}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 bg-[#441b12] place-content-center max-md:grid-rows-2 max-md:text-center max-md:place-items-center">
        <iframe
          className="lg:my-10 lg:ms-20 md:w-11/12 md:h-4/5 max-sm:w-3/4 max-sm:h-2/3"
          src="https://www.youtube.com/embed/xpLAYCs36U8?si=97z-ESH9a_ufARZb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="text-[#f0a108] md:p-20 max-sm:p-10 font-lora max-md:grid max-md:col-start-1 ">
          <p className="font-semibold text-5xl">
            Ghé Quán Cũ thưởng thức Pa Pỉnh (Cá nướng dân tộc)
          </p>
          <div className="mt-5 w-100">
            <p className="whitespace-normal">
              Trong tiếng Thái, “Pa” có nghĩa là cá suối, Pa Pỉnh nghĩa là cá
              gập nướng. Cá nướng xong sẽ thơm lừng, đủ hương vị chua, cay,
              ngọt, mặn, đắng của các loại gia vị (kết hợp giữa rau thơm, thìa
              là, riềng sả và đặc biệt: mắc khén).
            </p>
            <IconMinus
              className="md:-ms-5 max-sm:hidden"
              color="#f0a108"
              stroke={1}
              width="100"
              height="100"
            />
          </div>
        </div>
      </div>
      <div className=" place-content-center overflow-y-auto">
        <Image
          className="w-full h-full overflow-hidden"
          src={images.AnhNhanVien}
          alt="AnhNhanVien"
        />
      </div>
    </>
  );
}
