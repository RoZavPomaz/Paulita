import { CiCamera, CiFaceSmile, CiHeart } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

const Page3 = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex items-center justify-center gap-5 px-5 py-8 w-[70%] bg-white/40 rounded-3xl">
          <CiFaceSmile size={55} color="gold" />

          <div>
            <h2 className="font-medium">Tu sonrisa</h2>
            <p className="font-light">Que ilumina</p>
            <p className="font-light">cualquier lugar.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 px-5 py-8 w-[70%] bg-white/40 rounded-3xl">
          <CiCamera size={55} color="gold" />
          <div>
            <h2 className="font-medium">Tu sonrisa</h2>
            <p className="font-light">Que ilumina</p>
            <p className="font-light">cualquier lugar.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 px-5 py-8 w-[70%] bg-white/40 rounded-3xl">
          <CiHeart size={55} color="gold" />

          <div>
            <h2 className="font-medium">Tu sonrisa</h2>
            <p className="font-light">Que ilumina</p>
            <p className="font-light">cualquier lugar.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 px-5 py-8 w-[70%] bg-white/40 rounded-3xl">
          <IoSunnyOutline size={55} color="gold" />

          <div>
            <h2 className="font-medium">Tu sonrisa</h2>
            <p className="font-light">Que ilumina</p>
            <p className="font-light">cualquier lugar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
