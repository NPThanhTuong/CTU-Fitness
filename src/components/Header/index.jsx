"use client";

import Link from "next/link";
import { IconButton, Collapse, Card } from "@/components/midleExport";
import { useEffect, useState } from "react";
import { CloseIcon, MenuBarIcon } from "@/icons";
import NavList from "./NavList";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    window.addEventListener("scroll", () =>
      setIsScrollDown(window.scrollY > 100)
    );
  }, []);

  return (
    <header
      className={twMerge(
        "w-full fixed top-0 h-[80px] z-50",
        isScrollDown ? "bg-white shadow-md" : "bg-[#5a636b]/50"
      )}
    >
      <nav className="container mx-auto size-full rounded-none bg-transparent border-none shadow-none">
        <div className="flex justify-between items-center h-full px-3">
          <h1 className="uppercase font-extrabold text-2xl text-white">
            <Link
              href="/"
              className={twMerge(
                isScrollDown ? "text-gray-800" : "text-white",
                "flex gap-2 items-center"
              )}
            >
              <Image
                src="/images/logo-ctu.png"
                width={56}
                height={56}
                alt="Logo CTU"
              />
              CTU <span className="text-primary">Fitness</span>
            </Link>
          </h1>
          {/* Desktop */}
          <NavList
            key="desktop_list"
            className={twMerge(
              "hidden lg:flex lg:flex-row lg:justify-end lg:items-center lg:h-full lg:font-semibold lg:text-xs",
              isScrollDown ? "text-gray-800" : "text-white"
            )}
          />
          {/* mobile nav */}
          <IconButton
            className="lg:hidden block text-base text-primary border-white border-2"
            variant="outlined"
            onClick={() => setOpenNav((prevState) => !prevState)}
          >
            {openNav ? (
              <CloseIcon width="2rem" height="2rem" />
            ) : (
              <MenuBarIcon width="2rem" height="2rem" />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav} className="shadow-md rounded-lg">
          <Card>
            <NavList
              key="mobile_list"
              className={twMerge(
                "text-xs font-semibold",
                isScrollDown ? "text-gray-800" : "text-white"
              )}
              setOpenNav={setOpenNav}
            />
          </Card>
        </Collapse>
      </nav>
    </header>
  );
}

export default Header;
