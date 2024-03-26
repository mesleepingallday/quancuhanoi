"use client";
import { useState, useEffect } from "react";

export default function Icon({ children, text, link }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    console.log("The link was clicked.");
    setIsClicked(!isClicked);
  }
  useEffect(() => {
    if (isClicked === true) window.location.href = link;
  }, [isClicked]);
  return (
    <div className="flex" onClick={handleClick}>
      {children}
      <span className="self-center text-white/80 ms-1">{text}</span>
    </div>
  );
}
