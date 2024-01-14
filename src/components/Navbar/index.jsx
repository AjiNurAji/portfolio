"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [navbar, setActive] = useState(false);
  const refBurger = useRef(null);
  const refNav = useRef(null);
  const refHome = useRef(null);
  const refProjects = useRef(null);
  const refContact = useRef(null);

  useEffect(() => {
    if (navbar) {
      refBurger.current.classList.add("active");
      refNav.current.classList.add("active");
    } else {
      refNav.current.classList.remove("active");
      refBurger.current.classList.remove("active");
    }
  }, [navbar]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!refBurger.current.contains(e.target)) {
        setTimeout(() => {
          setActive(false);
          refBurger.current.classList.remove("active");
          refNav.current.classList.remove("active");
        }, 500)
      }
    });
  }, []);

  return (
    <>
      <header className="bg-transparent pt-5 fixed top-0 z-navbar w-full">
        <div className="container mx-0 px-5 md:mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex tracking-[0.3rem] uppercase font-semibold text-xl md:text-2xl"
          >
            ajinuraji
          </Link>
          <Hamburger refBurger={refBurger} handle={setActive} active={navbar} />
        </div>
      </header>
      <NavLink
        refNav={refNav}
        refContact={refContact}
        refProjects={refProjects}
        refHome={refHome}
      />
    </>
  );
};

export default Navbar;
