import { CiSun } from "react-icons/ci";


interface ForecastProps {
  type: boolean;
}
export default function Forecast({type}: ForecastProps) {
  return (
    <div className="w-4/6 flex-1">
      <h2 className="text-3xl font-bold mb-8">previsão de 7 dias</h2>
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className="h-40 xl:h-20 rounded-xl px-2 py-8 lg:p-8 bg-blue_gray flex flex-col xl:flex-row justify-between items-center mb-4"
        >
          <div className="w-full  flex items-center justify-around">
            <h3 className="text-3xl font-bold">Hoje</h3>
            <div className="flex items-center">
              <CiSun size={60} />
              <p>Limpo</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-around">
            <p className="text-2xl ">-4° - 20°</p>
            <p className="text-xl ">chuva: 13, 14, 15 </p>
          </div>
        </div>
      ))}
    </div>
  );
}
