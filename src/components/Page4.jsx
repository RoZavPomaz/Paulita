import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

export const Page4 = () => {
  return (
    <div className="h-screen">
      <div className="text-white text-center">
        <p className="font-Chelsea">Lugares, risas</p>
        <p className="font-Chelsea">y aventuras</p>
        <div className="flex  gap-3 items-center justify-center mt-4 mb-6">
          <hr className="w-10" />
          <FaRegHeart />
          <hr className="w-10" />
        </div>
      </div>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col items-center">
          <div
            className="
      relative
      shadow-xl/30
      h-50
      w-70
      overflow-hidden
      rounded-2xl
      bg-[url('/src/assets/images/AtardecerOxa.jpeg')]
      bg-cover
      bg-center
    "
          >
            {/* Máscara púrpura */}
            <div className="absolute inset-0 bg-orange-400/10"></div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col h-full justify-end  text-white font-medium ">
              <div className="h-fit bg-black/50 w-full p-3 flex items-center gap-2">
                <CiStar size={25} color="white" />
                <div>
                  <p>El atardecer en</p>
                  <p>Oxapampa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="
      relative
      shadow-xl/30
      h-50
      w-70
      overflow-hidden
      rounded-2xl
      bg-[url('/src/assets/images/GrupoPozuzo.jpeg')]
      bg-cover
      bg-center
    "
          >
            {/* Máscara púrpura */}
            <div className="absolute inset-0 bg-orange-400/10"></div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col h-full justify-end  text-white font-medium ">
              <div className="h-fit bg-black/50 w-full p-3 flex items-center gap-2">
                <CiStar size={25} color="white" />
                <div>
                  <p>Tardes que se volvieron</p>
                  <p>recuerdos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="
      relative
      shadow-xl/30
      h-50
      w-70
      overflow-hidden
      rounded-2xl
      bg-[url('/src/assets/images/Oxapampa.jpg')]
      bg-cover
      bg-center
    "
          >
            {/* Máscara púrpura */}
            <div className="absolute inset-0 bg-orange-400/10"></div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col h-full justify-end  text-white font-medium ">
              <div className="h-fit bg-black/50 w-full p-3 flex items-center gap-2">
                <CiStar size={25} color="white" />
                <div>
                  <p>Esta ciudad se volvió</p>
                  <p>especial contigo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
