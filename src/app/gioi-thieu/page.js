import {
  IconPhone,
  IconCalendarTime,
  IconCurrencyDollar,
  IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";
import images from "../../constants/images";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col place-items-center bg-[#5b2a1f] pt-40">
        <p className="py-5 text-[#f0a108] text-4xl font-lora">
          Giới thiệu Nhà hàng Quán Cũ
        </p>
        <div className="grid gap-4 grid-cols-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.329329205165!2d105.83963077632622!3d21.01950478062753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab786309da47%3A0x556753df17a97250!2zTmhhzIAgSGHMgG5nIFF1YcyBbiBDdcyD!5e0!3m2!1sen!2s!4v1706068385202!5m2!1sen!2s"
            className="m-10 border border-brown-500 rounded-sm"
            loading="lazy"
            height={300}
            width={400}
          ></iframe>
          <div>
            <div className="grid gap-1 grid-rows-4 mt-16">
              <div className="flex items-center gap-2">
                <IconMapPin
                  stroke="red"
                  fill="none"
                  stroke-width="2"
                  color="white"
                />
                <p className="text-white">
                  Địa chỉ: 106 Yết Kiêu, Nguyễn Du, Hà Nội
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone
                  stroke="red"
                  fill="none"
                  stroke-width="2"
                  color="white"
                />
                <p className="text-white">Hotline: 089 828 66 99</p>
              </div>
              <div className="flex items-center gap-2">
                <IconCurrencyDollar
                  stroke="red"
                  fill="none"
                  stroke-width="2"
                  color="white"
                />
                <p className="text-white">Khoảng giá: 300.000vnd/người</p>
              </div>
              <div className="flex items-center gap-2">
                <IconCalendarTime
                  stroke="red"
                  fill="none"
                  stroke-width="2"
                  color="white"
                />
                <p className="text-white">Giờ mở cửa: 7:00 – 22:30</p>
              </div>
            </div>
            <p className="mt-10 text-yellow-500">
              <em>“Bạn Cũ thì hiền,</em>
              <br />
              <em>Quán Cũ thì ngon”</em>
              <br />
              <em>
                Quán Cũ – nơi gặp gỡ của những người bạn hiền,
                <br /> trong không gian sang trọng và bữa tiệc ấm cúng
                <br /> giữa lòng phố cổ Hà Nội.
              </em>
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto text-start text-[#f0a108]">
          <p className="my-10 italic">
            Dưới bóng hoa sữa thơm, ấy là Quán Cũ với sự bình yên, ấm áp mà ta
            hoài tìm kiếm. Mang gam màu trầm ấm, Quán Cũ gợi về những nét thơ
            mộng Hà Nội ngày xưa cũ. Một không gian đầy nghệ thuật để thưởng
            thức trọn vẹn mỹ vị muôn phương.
          </p>
          <p className="my-5 italic">
            “Ẩm thực là nghệ thuật, người đầu bếp là nghệ sĩ”. Những nghệ sĩ
            nhiệt huyết ngày ngày tô vẽ cho bức tranh ẩm thực Quán Cũ đa sắc
            màu. Tuyệt tác nghệ thuật không phải trên giấy bút, mà thể hiện ngay
            ở những món ngon. Hài hòa cả sắc và vị, chỉn chu từ cách trình bày
            cho đến hương vị mê đắm.
          </p>
          <p className="mt-5 mb-20 italic">
            <br /> Quán Cũ chẳng tha thiết gì hơn, chỉ mong được như tri kỷ. Chờ
            quý vị ghé đến lưu giữ những khoảnh khắc quý giá đời thường. Cạnh
            bên gia đình và những người bạn cũ, Quán Cũ cũng ở đây!
          </p>
        </div>
      </div>
      <div>
        <Image
          className="object-cover w-full h-full"
          src={images.AnhGioiThieu}
          alt="AnhGioiThieu"
        />
      </div>
    </>
  );
}
