export default function Header() {
  return (
    <header className="">
      <div className="p-2 grid place-content-center">
        <ul className="flex gap-14 text-secondary-foreground">
          <li>Home</li>
          <li className="text-main">About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
