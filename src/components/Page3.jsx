import { CiCamera, CiFaceSmile, CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import ScrollReveal from "./ScrollReveal";

const Page3 = () => {
  return (
    <div className="h-screen">
      <ScrollReveal animation="fade-down">
        <div className="flex flex-col items-center text-white">
          <p className="mb-2 font-Chelsea">Entre tantos días,</p>
          <p className="font-Chelsea">hay cosas que me</p>
          <h2 className="font-birthstone text-5xl">encantan de ti</h2>
          <FaRegHeart color="gold" className="mx-auto mb-5 mt-3" />
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-5 items-center">
        <ScrollReveal animation="scale-in" delay={100} className="w-[70%]">
          <div className="flex items-center justify-center gap-5 px-5 py-8 bg-white/40 rounded-3xl">
            <CiFaceSmile size={55} color="gold" />

            <div>
              <h2 className="font-bold">Tu sonrisa</h2>
              <p className="font-light">Que ilumina</p>
              <p className="font-light">cualquier lugar.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-in" delay={200} className="w-[70%]">
          <div className="flex items-center justify-center gap-5 px-5 py-8 bg-white/40 rounded-3xl">
            <CiCamera size={55} color="gold" />
            <div>
              <h2 className="font-bold">Tu mirada</h2>
              <p className="font-light">Que ve la belleza</p>
              <p className="font-light">en los detalles.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-in" delay={300} className="w-[70%]">
          <div className="flex items-center justify-center gap-5 px-5 py-8 bg-white/40 rounded-3xl">
            <CiHeart size={55} color="gold" />

            <div>
              <h2 className="font-bold">Tu forma de ser</h2>
              <p className="font-light">Unica, auténtica</p>
              <p className="font-light">y maravillosa.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-in" delay={400} className="w-[70%]">
          <div className="flex items-center justify-center gap-5 px-5 py-8 bg-white/40 rounded-3xl">
            <IoSunnyOutline size={55} color="gold" />

            <div>
              <h2 className="font-bold">Tu amor por </h2>
              <h2 className="font-bold">el cielo</h2>
              <p className="font-light">Como si cada uno</p>
              <p className="font-light">fuera magico.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Page3;

