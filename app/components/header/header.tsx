import CircularLightEffect from "../ui/circular-light-effect";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center border p-2">
        {/* navigation links  */}
        <NavBar />

        <div className="absolute -top-40 -z-10 border">
          <CircularLightEffect />
        </div>
      </div>
    </header>
  );
}
