import { FaHeart } from "react-icons/fa";
import VistaCielo from "../assets/images/VistaImage.png";
import ScrollReveal from "./ScrollReveal";

const Page5 = () => {
  return (
    <div className="h-screen text-white text-center">
      <ScrollReveal animation="fade-down">
        <div className="font-Chelsea">
          <p>Dicen que ningún</p>
          <p>atardecer es igual</p>
          <p>a otro...</p>
          <FaHeart className="mx-auto mt-3 mb-5" color="gold" />
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={250}>
        <div className="font-Chelsea">
          <p>Pero si tuviera que</p>
          <p>elegir uno favorito,</p>
          <p>seria cualquiera que</p>
          <p>pueda compartir</p>
          <h2 className="font-birthstone text-5xl">contigo</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="scale-in" delay={500} className="flex justify-center mt-50">
        <img src={VistaCielo} className="size-65 mx-auto mt-0" />
      </ScrollReveal>
    </div>
  );
};

export default Page5;

