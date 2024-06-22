import CircularLightEffect from "../ui/circular-light-effect";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <header>
      <div className="grid place-content-center p-4">
        {/* navigation links  */}
        <NavBar />

        <div className="absolute -top-1/4 left-1/3">
          <CircularLightEffect />
        </div>
      </div>
    </header>
  );
}
