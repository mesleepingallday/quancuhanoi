"use client";
import React, { createContext, useContext, useState } from "react";

const CategoryStateContext = createContext();

export const CategoryStateProvider = ({ children }) => {
  const [category, setCategory] = useState(0);

  return (
    <CategoryStateContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryStateContext.Provider>
  );
};

export const useCategoryState = () => useContext(CategoryStateContext);
