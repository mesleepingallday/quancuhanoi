"use client";
import MenuCategories from "./MenuCategories";
import DetailMenu from "./DetailMenu";
import Carousel from "./Carousel";
import { createContext, useState } from "react";
import { CategoryStateProvider } from "./CategoryState";

const CategoryState = createContext();

export default function MenuPage() {
  const [category, setCategory] = useState(0);
  return (
    <CategoryStateProvider>
      <div className="flex flex-col items-center bg-[#441b12] bg-auto bg-repeat bg-[url('../assets/images/Pattern-Khong-Gian-2.webp')] ">
        <MenuCategories />
        <Carousel />
      </div>
    </CategoryStateProvider>
  );
}
