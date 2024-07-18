import Link from "next/link";
import styles from './NavBar.module.css'; // Adjust the path as necessary

export default function NavBar() {
  return (
    <nav>
      <ul className="z-10 gap-14 text-xl text-secondary-foreground hidden md:flex">
        <li>
          <Link href="/">
            <span className={styles.navLink}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span className={styles.navLink}>About</span>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <span className={styles.navLink}>Skills</span>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <span className={styles.navLink}>Projects</span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <span className={styles.navLink}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
