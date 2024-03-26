"use client";
import Button from "@/components/Button";
import React from "react";
const categories = [
  "Khai vị",
  "Món Cũ",
  "Hải sản & Rừng",
  "Lẩu",
  "Đồ uống",
  "Menu Set",
];

export default function MenuCategories() {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  const buttonClasses =
    "text-sm p-2 rounded-lg border-2 border-solid border-[#f0a108] w-32 h-9";

  return (
    <div className="flex flex-row flex-wrap justify-center mt-40 gap-5">
      {categories.map((category, index) => (
        <Button
          key={index}
          text={category}
          onClick={() => setSelectedCategory(category)}
          className={`${buttonClasses} ${
            selectedCategory === category
              ? "bg-[#f0a108] text-white"
              : "bg-[#441b12] text-[#f0a108]"
          } hover:bg-[#f0a108] hover:text-white`}
        />
      ))}
    </div>
  );
}
