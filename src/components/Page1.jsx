import { IoIosArrowDown } from "react-icons/io";
import imgPaulita from "/src/assets/images/Paulita-cielo.png";
import BtnMusica from "./BtnMusica";
export const Page1 = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-screen justify-center items-center">
        <BtnMusica />
        <div>
          <h1 className="flex flex-col justify-center items-center font-bold text-2xl text-center text-white">
            Paulita, <br />
            hace un año <br />
            llegaste aquí
          </h1>

          <p className="text-center text-white">
            Todo empezó <br />a cambiar
          </p>
          <img src={imgPaulita} alt="" className="h-60 " />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-0 h-20 border border-white"></div>

          <p className="text-white">Desliza hacia abajo</p>

          <div className="flex justify-center">
            <IoIosArrowDown color="white" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
