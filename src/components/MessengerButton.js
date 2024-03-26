import React from "react";
import { images } from "../constants";
import Image from "next/image";

export default function MessengerButton() {
  return (
    <>
      <Image
        src={images.IconBrandMessenger}
        alt="messenger"
        width={50}
        height={50}
      />
    </>
  );
}
