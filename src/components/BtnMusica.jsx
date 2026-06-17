import { useRef } from "react";
import musicaIcon from "../assets/icons/musica.svg";
import cancion from "../assets/music/DesOrden.mp3";

const BtnMusica = () => {
  const audioRef = useRef(new Audio(cancion));

  const toggleMusica = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <button
      onClick={toggleMusica}
      className="rounded-2xl bg-white/80 w-fit h-8 flex items-center justify-center cursor-pointer gap-2 px-3 text-black"
    >
      <img src={musicaIcon} alt="" className="w-5 h-5" />
      <p className="font-medium">Reproducir</p>
    </button>
  );
};

export default BtnMusica;
