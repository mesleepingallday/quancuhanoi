"use client";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import images, { IconMinus } from "../constants/images";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  const imagesArray = [
    "/_next/static/media/AnhBannerWeb-QuanCu-04-PC-2048x896-1.c579e9a8.webp",
    "/_next/static/media/AnhBannerWeb-QuanCu-04-PC-2048x896-1.c579e9a8.webp",
    "/_next/static/media/AnhBannerWeb-QuanCu-04-PC-2048x896-1.c579e9a8.webp",
    "/_next/static/media/AnhBannerWeb-QuanCu-04-PC-2048x896-1.c579e9a8.webp",
  ];

  const imagesArray2 = [
    "/_next/static/media/220812-QuoteBF-QCweb-1-1024x1024-1.b8a460cf.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-2-1024x1024-1.180ad373.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-3-1024x1024-1.05fb6498.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-4-1024x1024-1.7fddcdb7.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-5-1024x1024-1.5ad19bcf.webp",
    "/_next/static/media/220812-QuoteBF-QCweb-6-1024x1024-1.bc4e21f2.webp",
  ];
  return (
    <div className="relative">
      <div className="image-slider-container">
        <ImageSlider
          imageUrls={imagesArray}
          bigStyle={`w-screen overflow-hidden top-0  transition ease-in-out duration-500`}
          dots={false}
        />
      </div>
      <div className="flex bg-[#441b12] bg-[url('../assets/images/Pattern-Khong-Gian-2.webp')] place-content-center overflow-y-hidden">
        <div className="text-[#f0a108] p-20 font-lora">
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
      <div className="relative bg-gradient-to-t from-[#e89a07] to-[#441b12] place-content-center">
        <div className="image-slider-container">
          <ImageSlider
            imageUrls={imagesArray2}
            bigStyle={`w-screen overflow-hidden transition ease-in-out duration-500`}
            dots={false}
            imagePerSlide={3}
          />
        </div>
      </div>
      <div className="flex bg-[#441b12] place-content-center">
        <div className="flex three__image pt-20 pl-80 overflow-hidden">
          <iframe
            className=""
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xpLAYCs36U8?si=97z-ESH9a_ufARZb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-[#f0a108] p-20 font-lora">
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
      <div className=" place-content-center overflow-y-auto">
        <Image
          className="w-full h-full overflow-hidden"
          src={images.AnhNhanVien}
        />
      </div>
    </div>
  );
}
