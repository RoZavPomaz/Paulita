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
      className="rounded-3xl bg-white/70 w-fit h-11 flex items-center justify-center cursor-pointer gap-2 px-3 text-black"
    >
      <img src={musicaIcon} alt="" className="w-7 h-7" />
      <p className="font-medium">Reproducir</p>
    </button>
  );
};

export default BtnMusica;
