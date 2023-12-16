import { FaSearch } from "react-icons/fa";

interface HeaderProps {
  type: boolean;
  settype: Function;
}

export default function Header({ type, settype }: HeaderProps) {
  return (
    <div className="flex mb-12 justify-between">
      {/* search bar */}
      <div className="w-min px-4 bg-blue_gray rounded-full flex items-center">
        <label
          htmlFor="cityInput"
          className="h-full border-r border-white flex items-center pr-2 "
        >
          <FaSearch size={20} />
        </label>
        <input
          type="text"
          id="cityInput"
          placeholder="Search City"
          className="bg-transparent border-none focus:outline-none p-2 mr-2"
        />
      </div>
      {/* type button */}
      <div
        className="relative flex justify-between items-center w-20 px-3 bg-gray-400 rounded-full cursor-pointer"
        onClick={() => settype((prevType: boolean) => !prevType)}
      >
        <div className="z-10 relative flex justify-between items-center w-full">
          <h3 className="font-bold text-gray-700">°C</h3>
          <h3 className="font-bold text-gray-700">°F</h3>
        </div>
        <div
          className={`absolute left-0 bg-white w-10 h-10 rounded-full shadow-md transform transition-transform ${
            type ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
}
