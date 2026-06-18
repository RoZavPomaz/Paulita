import { IoIosArrowDown } from "react-icons/io";
import imgPaulita from "../assets/images/Paulita-cielo.png";
import BtnMusica from "./BtnMusica";
import { FaRegHeart } from "react-icons/fa";
export const Page1 = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-screen justify-around items-center">
        <BtnMusica />
        <div>
          <h1 className="flex flex-col justify-center items-center font-light text-2xl text-center text-white font-Chelsea">
            Paulita,
          </h1>
          <p className="text-white text-center font-birthstone text-7xl">
            Hace un año
          </p>
          <p className="text-white text-center mb-5 font-Chelsea">
            llegaste a esta ciudad
          </p>

          <FaRegHeart color="white" className="mx-auto" size={20} />
          <p className="text-center text-white mt-5 font-Chelsea">
            Todo empezó <br />a cambiar
          </p>
          <img src={imgPaulita} alt="" className="h-60 mx-auto" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-0 h-12 border border-white"></div>

          <p className="text-white font-Chelsea">Desliza hacia abajo</p>

          <div className="flex justify-center">
            <IoIosArrowDown color="white" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
