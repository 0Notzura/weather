import { CiSun } from "react-icons/ci";


interface CitiesProps {
  type: boolean;
}
export default function Cities({type}: CitiesProps) {
  return (
    <div className="w-4/6 md:w-96 mr-4 lg:mr-12">
      <h2 className="text-3xl font-bold mb-8 ">Outras cidades grandes</h2>
      <div>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-40 rounded-xl p-8 bg-blue_gray flex justify-between items-center mb-4 "
          >
            <div>
              <p className="text-my_gray">US</p>
              <h3 className="text-3xl font-bold">Nova York</h3>
              <p>snow</p>
            </div>
            <div>
            <CiSun size={60} />
            <h3 className="text-3xl font-bold">-1°</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
