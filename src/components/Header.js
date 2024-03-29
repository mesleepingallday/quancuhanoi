import Image from "next/image";
import Link from "next/link";
import { images } from "../constants";
import BookingNow from "./BookingNow";

export default function Header() {
  const headerFontStyle =
    "font-lora font-light text-2xl hover:underline hover:underline-offset-8";
  return (
    <header className="relative">
      <nav className="nav__links flex items-center justify-center space-x-80 text-[#f0a108] bg-[#441b12] py-8">
        <div className="header__left-links text-xl space-x-20">
          <Link href="/gioi-thieu" className={headerFontStyle}>
            Giới thiệu
          </Link>
          <Link href="/thuc-don" className={headerFontStyle}>
            Thực đơn
          </Link>
          <Link
            href="https://www.facebook.com/quancuhn"
            className={headerFontStyle}
          >
            Điểm tin
          </Link>
        </div>
        <div className="header__right-links text-xl space-x-20">
          <Link href="mon-ngon" className={headerFontStyle}>
            Món ngon quán cũ
          </Link>
          <BookingNow text="Đặt bàn ngay" style={headerFontStyle}>
            Đặt bàn ngay
          </BookingNow>
        </div>
      </nav>
      <div className="header__logo absolute mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Link href="/">
          <Image src={images.logoQC} alt="logo" width={200} height={200} />
        </Link>
      </div>
    </header>
  );
}
