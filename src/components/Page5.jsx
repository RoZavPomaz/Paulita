import { FaHeart } from "react-icons/fa";
import VistaCielo from "../assets/images/VistaImage.png";

const Page5 = () => {
  return (
    <div className="h-screen text-white text-center">
      <div className="font-Chelsea">
        <p>Dicen que ningún</p>
        <p>atardecer es igual</p>
        <p>a otro...</p>
        <FaHeart className="mx-auto mt-3 mb-5" color="gold" />
      </div>
      <div className="font-Chelsea">
        <p>Pero si tuviera que</p>
        <p>elegir uno favorito,</p>
        <p>seria cualquiera que</p>
        <p>pueda compartir</p>
        <h2 className="font-birthstone text-5xl">contigo</h2>
      </div>
      <img src={VistaCielo} className="size-65 mx-auto mt-50" />
    </div>
  );
};

export default Page5;
