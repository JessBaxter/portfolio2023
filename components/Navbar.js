import Link from "next/link";
import ThemeToggle from "./utils/ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 drop-shadow-md fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-base-100 dropdown-content mt-3 p-2 shadow rounded-box w-52">
            <li>
              <Link href="/#contact" alt="Contact form">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#projects" alt="Projects I'm involved with">
                Projects
              </Link>
              <ul className="p-2">
                <li>
                  <Link href="/#projects" alt="Projects I've completed">
                    Completed
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects-current"
                    alt="Projects I'm currently working on">
                    Current
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects-future"
                    alt="Projects I'd love to work on one day">
                    Future
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#skills" alt="My tech skills">
                Skills
              </Link>
              <ul className="p-2">
                <li>
                  <Link href="/#skills" alt="My frontend web dev skills">
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link href="/#skills-backend" alt="My backend web dev skills">
                    Backend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#skills-desktop"
                    alt="My desktop application skills">
                    Desktop App
                  </Link>
                </li>
                <li>
                  <Link href="/#skills-education" alt="My other skills">
                    Education/Other
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          JESS BAXTER
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul tabIndex={0} className="menu menu-horizontal px-1">
          {/* Contact */}
          <li>
            <Link href="/#contact" alt="Contact form">
              Contact
            </Link>
          </li>
          {/* Projects */}
          <li>
            {/* Projects dropdown */}
            <div className="dropdown dropdown-end relative">
              <label tabIndex={0}>
                <div>Projects</div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 menu dropdown-content bg-base-100 my-2 shadow-lg rounded-box top-full absolute">
                <li>
                  <Link href="/#projects" alt="Projects I've completed">
                    Completed
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects-current"
                    alt="Projects I'm currently working on">
                    Current
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects-future"
                    alt="Projects I'd love to work on one day">
                    Future
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Skills */}
          <li>
            {/* Skills dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <div>Skills</div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 menu dropdown-content bg-base-100 my-2 shadow-lg rounded-box top-full absolute">
                <li>
                  <Link href="/#skills" alt="My frontend web dev skills">
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link href="/#skills-backend" alt="My backend web dev skills">
                    Backend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#skills-desktop"
                    alt="My desktop application skills">
                    Desktop App
                  </Link>
                </li>
                <li>
                  <Link href="/#skills-education" alt="My other skills">
                    Education/Other
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
}
