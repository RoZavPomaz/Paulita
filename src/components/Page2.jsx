import { FaRegCalendarAlt, FaRegHeart, FaRegStar } from "react-icons/fa";
import MotoImg from "../assets/images/MotoImage.png";
const Page2 = () => {
  return (
    <div className=" flex flex-col h-screen items-center text-white">
      <section>
        <div className="text-center flex flex-col gap-2 mt-5">
          <p className="font-Chelsea">Un año de </p>
          <h2 className="font-birthstone text-5xl">Momentos</h2>
          <div className="flex  gap-3 items-center justify-center">
            <hr className="w-10" />
            <FaRegHeart />
            <hr className="w-10" />
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/70 w-fit p-5">
              <FaRegCalendarAlt size={30} color="gray" />
            </div>
            <p className="font-medium">365 días</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/70 w-fit p-5">
              <FaRegHeart size={30} />
            </div>
            <p className="font-medium">12 meses</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/70 w-fit p-5">
              <FaRegStar size={30} />
            </div>
            <p className="font-medium">Muchos recuerdos</p>
          </div>
        </div>
        <img src={MotoImg} alt="" className="size-45 mt-5" />
      </section>
      <div className="text-center flex flex-col gap-2 mt-10">
        <p className="font-Chelsea">Cada día</p>
        <p className="font-Chelsea">ha tenido algo</p>
        <h2 className="font-birthstone text-5xl">especial</h2>
        <div className="flex justify-center">
          <FaRegHeart color="gold" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
