import { FaRegHeart } from "react-icons/fa";
import YopImg from "../assets/images/Yop.png";

const Page6 = () => {
  return (
    <div className="h-screen text-center text-white flex flex-col gap-5 justify-center font-Chelsea">
      <div>
        <p>Gracias por este</p>
        <p>primer año en esta</p>
        <p>ciudad.</p>
      </div>
      <div>
        <p>Espero que este sea</p>
        <p>solo el comienzdo de</p>
        <p>muchas experiencias</p>
        <p>bonitas.</p>
      </div>
      <div>
        <p>Y también espero</p>
        <p>seguir formando parte</p>
        <p>de algunas de ellas.</p>
        <FaRegHeart className="mx-auto mt-6" size={30} />
      </div>
      <img src={YopImg} className="h-80 w-35 mx-auto" />
    </div>
  );
};

export default Page6;
