import { CiSun } from "react-icons/ci";
import { FaWind } from "react-icons/fa";

interface WeatherDayProps {
  type: boolean;
}
export default function WeatherDay({type}: WeatherDayProps) {
  return (
    <div className="flex flex-col mb-8 md:flex-row justify-between xl:justify-normal">
      {/* Big Card */}
      <div className="py-12 mb-8 rounded-xl md:w-56 md:h-96 md:p-4 md:mr-8 bg-blue_gray flex flex-row md:flex-col justify-evenly xl:flex-row xl:w-96 xl:h-48 xl:mr-0">
        <div className="w-full flex flex-col justify-between items-center xl:w-1/2">
          <h2 className="text-4xl">Helsinki</h2>
          <h3 className="text-6xl font-bold">-1°</h3>
          <p className="">feel like: -4°C</p>
        </div>
        <div className="w-full flex flex-col items-center justify-between xl:w-1/2">
          <h3 className="text-4xl ">20° - 30°</h3>
          <CiSun size={48} />
          <div className="flex items-center ">
            <FaWind className="mr-2 text-2xl" />
            <p>5.14m/s</p>
          </div>
        </div>
      </div>
      {/* Conjunto de cartas de hora */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:h-96 md:gap-x-8 xsm:grid-cols-4  xl:flex xl:flex-1 xl:justify-evenly xl:h-48 xl:ml-8 xl:gap-0">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-52 rounded-xl p-4 md:h-44 md:w-28 bg-blue_gray flex flex-col items-center mb-4 xl:w-min xl:h-full"
          >
            <h2>09:00</h2>
            <hr className="w-full bg-black my-2" />
            <CiSun size={60} />
            <h3 className="text-5xl font-bold">-1°</h3>
            <p className="text-sm">Sensação: 32°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
