import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="z-10 gap-14 text-xl text-secondary-foreground hidden md:flex">
        <li>
          <Link href="/">
            <span className="hover:text-violet-500 hover:text-2xl cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span className="hover:text-violet-500 hover:text-2xl cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <span className="hover:text-violet-500 hover:text-2xl cursor-pointer">Skills</span>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <span className="hover:text-violet-500 hover:text-2xl cursor-pointer">Projects</span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <span className="hover:text-violet-500 hover:text-2xl cursor-pointer">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
