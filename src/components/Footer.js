import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import BookingNow from "./BookingNow";

export default function Footer() {
  return (
    <footer>
      <div className="flex place-content-center justify-between ">
        <div className="flex items-center flex-col flex-grow bg-[#f0a108] text-[#441b12] p-20">
          <p className="font-bold text-3xl">Nhà hàng Quán Cũ 106 Yết Kiêu</p>
          <p className="">Đặt bàn, đặt tiệc, khách đoàn: 089 828 66 99</p>
          <p className="">quancuhn@gmail.com</p>
          <BookingNow
            style="bg-[#441b12] text-[#f0a108] p-3 font-lora font-semibold rounded-full mt-5"
            text="Đặt bàn ngay!"
          />
        </div>
        {/* <div className="ps-60 flex bg-[#441b12] bg-[url('../assets/images/Pattern-Khong-Gian-2.webp')] py-3">
          <ul className="flex flex-col items-center mx-20 my-10 text-white/80">
            <li className="self-center">Giờ mở cửa</li>
            <li>Mon: 10:00 am – 11:00 pm</li>
            <li>Mon: 10:00 am – 11:00 pm</li>
            <li>Mon: 10:00 am – 11:00 pm</li>
            <li>Mon: 10:00 am – 11:00 pm</li>
            <p className="mt-10 self-center">Hân hạnh được phục vụ quý khách</p>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.329329205165!2d105.83963077632622!3d21.01950478062753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab786309da47%3A0x556753df17a97250!2zTmhhzIAgSGHMgG5nIFF1YcyBbiBDdcyD!5e0!3m2!1sen!2s!4v1706068385202!5m2!1sen!2s"
            className="m-10"
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
      <div className="grid wide:grid-cols-5 max-lg:grid-rows-2 bg-[#441b12] py-2 ">
        <div className="flex flex-row ms-10 my-3 gap-10 wide:col-span-3 lg:justify-center max-sm:justify-center">
          <div className="flex flex-row gap-2">
            <Link
              href="https://www.facebook.com/quancu.106yetkieu"
              target="_blank"
              className="flex flex-row gap-2 text-white/80"
            >
              <IconBrandFacebook color="white" size={30} stroke={0.5} />
              <span className="max-sm:hidden">Quán Cũ</span>
            </Link>
          </div>
          <Link
            href="https://www.youtube.com/channel/UCQXJ6EQ2wHd3iuM1VXxeu0Q"
            target="_blank"
            className="flex flex-row gap-2 text-white/80 my-1"
          >
            <IconBrandYoutube color="white" size={30} stroke={0.5} />
            <span className="max-sm:hidden">Nhà hàng Quán Cũ</span>
          </Link>
          <Link
            href="https://www.instagram.com/quancu.hn/"
            target="_blank"
            className="flex flex-row gap-2 text-white/80"
          >
            <IconBrandInstagram color="white" size={30} stroke={0.5} />
            <span className="max-sm:hidden">quancu.hn</span>
          </Link>
          <Link
            href="mailto:quancuhn@gmail.com"
            target="_blank"
            className="flex flex-row gap-2 text-white/80"
          >
            <IconMail size={30} color="white" stroke={0.5} />
            <span className="max-sm:hidden">quancuhn@gmail.com</span>
          </Link>
        </div>
        <p className="text-[#f0a108] wide:col-start-4 wide:col-span-2 wide:text-end wide:content-center max-sm:text-center md:text-center">
          Copyright © 2024 Quan Cu Yet Kieu.
          <span className="max-sm:hidden">All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}
