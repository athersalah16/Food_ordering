"use client";
import Link from "next/link";
import React from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import {useNAvBarContex} from "../contex/useContex";
function NavBar() {
   
  const { route, setRoute } = useNAvBarContex();
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Menu", href: "/menu" },
  ];
  return (
    <div className="w-full flex justify-between border-b border-b-orange-400 p-4">
      <div className="flex items-center gap-2">
        <Logo  />
      </div>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            onClick={() => setRoute(link.name)}
            key={link.id}
            href={link.href}
            className={`text-lg font-medium cursor-pointer hover:text-orange-600 ${route === link.name ? "text-orange-600" : "text-black"}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <Icons />
      </div>
    
    </div>
  );
}

export default NavBar;
