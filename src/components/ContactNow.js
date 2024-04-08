import Image from "next/image";
import Icon from "./Icon";
import images from "../constants/images";
import Link from "next/link";

export default function ContactNow() {
  return (
    <>
      <div className="fixed top-20 scale-150 right-0 bg-[url('../assets/images/callActionBackground.svg')] z-30 max-lg:hidden">
        <>
          <Link href="thuc-don">
            <Image src={images.MenuButton} />
          </Link>
        </>
        <a href="https://zalo.me/0898286699">
          <Image
            className="mt-2 ml-2 animate-wiggle"
            src={images.ZaloButton}
            height={31.3}
            width={31.3}
          />
        </a>
        <a href="tel:0898286699">
          <Image
            className="my-2 ml-2 animate-wiggle"
            src={images.CallButton}
            height={31.3}
            width={31.3}
          />
        </a>
      </div>
      <Icon>
        <a href="https://m.me/quancuhn">
          <Image
            src={images.MessengerButton}
            height={100}
            width={100}
            className="fixed right-10 bottom-20 animate-bounce z-30 max-lg:left-10"
          />
        </a>
      </Icon>
    </>
  );
}
