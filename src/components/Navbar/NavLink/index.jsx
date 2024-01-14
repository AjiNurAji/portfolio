import Link from "next/link";

const NavLink = ({ refNav, refHome, refProjects, refContact }) => {
  return (
    <div
      id="navlink"
      className="min-h-screen flex justify-center items-center bg-black fixed z-navlink w-full"
      ref={refNav}
    >
      <h1 className="text-white text-opacity-5 font-bold text-9xl tracking-widest relative -z-[1]">
        MENU
      </h1>
      <nav className="h-full flex flex-col justify-center items-center gap-4 absolute z-[1]">
        <Link
          href="/"
          className="text-6xl font-bold capitalize hover:scale-75"
          ref={refHome}
        >
          home
        </Link>
        <Link
          href="/projects"
          className="text-6xl font-bold capitalize hover:scale-75"
          ref={refProjects}
        >
          projects
        </Link>
        <Link
          href="/contact"
          className="text-6xl font-bold capitalize hover:scale-75"
          ref={refContact}
        >
          contact
        </Link>
      </nav>
    </div>
  );
};

export default NavLink;
