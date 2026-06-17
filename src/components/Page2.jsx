import { FaRegCalendarAlt, FaRegHeart, FaRegStar } from "react-icons/fa";

const Page2 = () => {
  return (
    <div className=" flex flex-col h-screen justify-around items-center text-white">
      <section>
        <div className="text-center flex flex-col gap-2">
          <p>Un año de </p>
          <h2>Momentos</h2>
          <div className="flex  gap-3 items-center justify-center">
            <hr className="w-10" />
            <FaRegHeart />
            <hr className="w-10" />
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/80 w-fit p-3">
              <FaRegCalendarAlt size={30} color="gray" />
            </div>
            <p className="font-medium">365 días</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/80 w-fit p-3">
              <FaRegHeart size={30} />
            </div>
            <p className="font-medium">12 meses</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/80 w-fit p-3">
              <FaRegStar size={30} />
            </div>
            <p className="font-medium">Muchos recuerdos</p>
          </div>
        </div>
      </section>
      <div className="text-center flex flex-col gap-2">
        <p>Cada día</p>
        <p>ha tenido algo</p>
        <h2>especial</h2>
        <div className="flex justify-center">
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
};

export default Page2;
