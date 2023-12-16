import { useGetCoordinates } from "@/Hooks/handleGeoLoc";
import Cities from "@/components/cities";
import Forecast from "@/components/forecast";
import Header from "@/components/header";
import WeatherDay from "@/components/weatherDay";
import { useState } from "react";

export default function Home() {
  const [type, settype] = useState(false);
  const { coordinates, error, getCoordinates } = useGetCoordinates();


  return (
    <>
      <Header type={type} settype={settype}/>
      <WeatherDay type={type}/>
      <div className="flex flex-col items-center md:flex-row md:items-stretch">
        <Cities type={type}/>
        <Forecast type={type} />

      </div>
    </>
  );
}
