import MenuCategories from "./MenuCategories";
import DetailMenu from "./DetailMenu";
import Carousel from "./Carousel";

export default function MenuPage() {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-[#441b12] bg-auto bg-repeat bg-[url('../assets/images/Pattern-Khong-Gian-2.webp')] ">
        <MenuCategories />
        <DetailMenu />
        <Carousel />
      </div>
    </>
  );
}
