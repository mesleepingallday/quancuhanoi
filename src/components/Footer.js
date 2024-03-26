import Button from "./Button";
import Icon from "./Icon";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconMail,
  IconBrandFacebookFilled,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex place-content-center justify-between">
        <div className="flex items-center flex-grow flex-col footer__layout-left bg-[#f0a108] text-[#441b12] p-20">
          <p className="font-bold text-3xl">Nhà hàng Quán Cũ 106 Yết Kiêu</p>
          <p className="">Đặt bàn, đặt tiệc, khách đoàn: 089 828 66 99</p>
          <p className="">quancuhn@gmail.com</p>
          <Button
            className="bg-[#441b12] text-[#f0a108] p-3 font-sans font-semibold rounded-full mt-5"
            text="Đặt bàn ngay!"
          />
        </div>
        <div className="ps-60 flex bg-[#441b12] bg-[url('../assets/images/Pattern-Khong-Gian-2.webp')] py-3">
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
        </div>
      </div>
      <div className="flex flex-row justify-between  bg-[#441b12] py-2">
        <div className="flex space-x-12 ms-10 my-3 ">
          <Icon
            text="Quán Cũ"
            link="https://www.facebook.com/quancu.106yetkieu"
          >
            <IconBrandFacebook color="white" size={30} stroke={0.5} />
          </Icon>
          <Icon
            text="Nhà hàng Quán Cũ - 106 Yết Kiêu"
            link="https://www.youtube.com/channel/UCQXJ6EQ2wHd3iuM1VXxeu0Q"
          >
            <IconBrandYoutube color="white" size={30} stroke={0.5} />
          </Icon>
          <Icon text="quancu.hn" link="https://www.instagram.com/quancu.hn/">
            <IconBrandInstagram color="white" size={30} stroke={0.5} />
          </Icon>
          <Icon text="quancuhn@gmail.com" link="mailto:quancuhn@gmail.com">
            <IconMail size={30} color="white" stroke={0.5} />
          </Icon>
        </div>

        <span className="text-[#f0a108] me-5 my-3">
          Copyright © 2024 Quan Cu Yet Kieu. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
