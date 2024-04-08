import BookingNow from "./BookingNow";
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
          <div
            id="crud-modal"
            tabindex="-1"
            aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Product
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="crud-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <form class="p-4 md:p-5">
                  <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$2999"
                        required=""
                      />
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Select category</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                      </select>
                    </div>
                    <div class="col-span-2">
                      <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Product Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write product description here"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      class="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Add new product
                  </button>
                </form>
              </div>
            </div>
          </div>
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
