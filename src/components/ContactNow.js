import Image from "next/image";
import Icon from "./Icon";
import images from "../constants/images";
import Link from "next/link";
export default function ContactNow() {
  return (
    <>
      <div className="fixed top-20 right-0 scale-[1.5] bg-[url('../assets/images/callActionBackground.svg')] z-50 flex flex-col items-end justify-end">
        {" "}
        <Icon>
          <Link href="thuc-don" />
          <Image className="mt-0.5" src={images.MenuButton} />
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
    </>
  );
}
