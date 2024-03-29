import React, { useContext } from "react";
import ImageSlider from "@/components/ImageSlider";
import { useCategoryState } from "./CategoryState";

const imageUrls = {
  0: [
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-04-724x1024.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-05-724x1024.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-06-724x1024.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-15-724x1024.jpg",
  ],
  1: [
    "https://quancuhanoi.vn/wp-content/uploads/2023/11/230928-MenuQC-Full1-PhoiIn-CreateOutline-PhanSua-Print_Artboard-3-scaled.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2023/11/230928-MenuQC-Full1-PhoiIn-CreateOutline-PhanSua-Print_Artboard-4-scaled.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2023/11/230928-MenuQC-Full1-PhoiIn-CreateOutline-PhanSua-Print_Artboard-5-scaled.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2023/11/230928-MenuQC-Full1-PhoiIn-CreateOutline-PhanSua-Print_Artboard-6-scaled.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-11.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-12.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-13.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-14.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-15-1.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-16-724x1024.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-16-724x1024.jpg",
  ],
  2: [
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-01.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-02.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-03.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-04.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-05.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-06.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-07.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-09.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-10.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-11.jpg",
  ],
  3: [
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-17.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-18.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen1-FileIn-19-725x1024.jpg",
  ],
  4: [
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-17.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/10/221013-MenuQC-GopQuyen2-FileIn-18.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2023/11/231104-MenuQC-GopQuyen2-Page19-01-1448x2048.jpg",
  ],
  5: [
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-1.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-2.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-3.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-4.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-5.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-6.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-7.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-8.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-9.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-10.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-11.jpg",
    "https://quancuhanoi.vn/wp-content/uploads/2022/08/Set-Menu-12.jpg",
  ],
};

export default function Carousel() {
  const { category } = useCategoryState();
  return (
    <div>
      <ImageSlider
        imageUrls={imageUrls[category]}
        bigStyle={`w-2/6 mt-10  border-2 border-[#f0a108] overflow-hidden transition duration-500  ease-in-out `}
        smallStyle={`w-25 h-40`}
        slideStyle="justify-center items-center"
      />
    </div>
  );
}
