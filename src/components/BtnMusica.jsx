import { useRef, useState } from "react";
import musicaIcon from "../assets/icons/musica.svg";
import cancion from "../assets/music/DesOrden.mp3";

const BtnMusica = () => {
  const audioRef = useRef(new Audio(cancion));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusica = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleMusica}
      className={`
        rounded-3xl w-fit h-11 flex items-center justify-center cursor-pointer gap-2 px-3 text-black transition-all duration-300

        ${isPlaying ? "bg-violet-500/70" : "bg-white/70 hover:bg-white/90"}
      `}
    >
      <img src={musicaIcon} alt="" className="w-7 h-7" />
      <p className="font-medium">Reproducir</p>
    </button>
  );
};

export default BtnMusica;
