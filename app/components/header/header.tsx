import CircularLightEffect from "../ui/circular-light-effect";

export default function Header() {
  return (
    <header>
      <div className="grid place-content-center p-4">
        <ul className="flex gap-14 text-xl text-secondary-foreground">
          <li>Home</li>
          <li className="text-main">About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <div className="absolute -top-1/4 right-1/3">
          <CircularLightEffect />
        </div>
      </div>
    </header>
  );
}
