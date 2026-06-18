import { CiCamera, CiFaceSmile, CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const Page3 = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center text-white">
        <p className="mb-2">Entre tantos días,</p>
        <p>hay cosas que me</p>
        <h2 className="font-birthstone text-5xl">encantan de ti</h2>
        <FaRegHeart color="gold" className="mx-auto mb-5 mt-3" />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex items-center justify-center gap-5 px-5 py-8 w-[70%] bg-white/40 rounded-3xl">
          <CiFaceSmile size={55} color="gold" />

          <div>
            <h2 className="font-medium">Tu sonrisa</h2>
            <p className="font-light">Que ilumina</p>
            <p className="font-light">cualquier lugar.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 px-5 py-8 w-[70%] bg-white/40 rounded-3xl">
          <CiCamera size={55} color="gold" />
          <div>
            <h2 className="font-medium">Tu mirada</h2>
            <p className="font-light">Que ve la belleza</p>
            <p className="font-light">en los detalles.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 px-5 py-8 w-[70%] bg-white/40 rounded-3xl">
          <CiHeart size={55} color="gold" />

          <div>
            <h2 className="font-medium">Tu forma de ser</h2>
            <p className="font-light">Unica, auténtica</p>
            <p className="font-light">y maravillosa.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 px-5 py-8 w-[70%] bg-white/40 rounded-3xl">
          <IoSunnyOutline size={55} color="gold" />

          <div>
            <h2 className="font-medium">Tu amor por </h2>
            <h2 className="font-medium">el cielo</h2>
            <p className="font-light">Como si cada uno</p>
            <p className="font-light">fuera magico.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
