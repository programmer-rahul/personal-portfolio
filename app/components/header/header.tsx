import CircularLightEffect from "../ui/circular-light-effect";
import BarIcon from "./bar-icon";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between p-2 md:justify-center md:bg-purple-600 lg:bg-red-500 xl:bg-yellow-600">
        {/* navigation links  */}
        <NavBar />

        <BarIcon />

        <div className="absolute -top-40 -z-10">
          <CircularLightEffect />
        </div>
      </div>
    </header>
  );
}
