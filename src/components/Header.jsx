import React, { useEffect, useState } from "react";
import { GrFacebook } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo-bookmark.svg";
import logoLight from "../assets/logo-bookmark-light.svg";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const handleMenu = () => {
        setNavOpen(!navOpen);
    };
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                setNavOpen(false);
            }
        });
    });

    return (
        <>
            <header className="pt-8 md:px-10  uppercase">
                {/* Desktop navigation */}
                <nav className="hidden md:flex justify-between items-center ">
                    <img src={logo} alt="logo" className="w-44" />
                    <ul className="flex items-center space-x-5 md:space-x-8 tracking-widest text-sm">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                        <li>
                            <button className="py-2 px-6 bg-[hsl(0,94%,66%)] rounded text-white whitespace-nowrap hover-red-btn">Log in</button>
                        </li>
                    </ul>
                </nav>
                {/* Mobile navigation */}
                <nav className="md:hidden flex justify-between items-center">
                    <img src={logo} alt="logo" className="w-44" />
                    <GiHamburgerMenu size={24} className="hover:text-[hsl(231,69%,60%)]" onClick={() => handleMenu()} />
                </nav>
            </header>
            {/* Mobile navigation menu */}
            {navOpen && (
                <div className="w-full h-full py-6 px-5 bg-[hsl(229,31%,21%)] bg-opacity-95 fixed top-0 left-0 z-10">
                    <header className=" flex items-center justify-between">
                        <img src={logoLight} alt="logo" className="w-44" />
                        <IoClose size={40} className="text-white hover:text-[hsl(0,94%,66%)]" onClick={() => handleMenu()} />
                    </header>
                    <nav className="h-full pt-12 flex flex-col justify-between ">
                        <div>
                            <ul className="text-center text-xl flex flex-col tracking-widest text-white uppercase">
                                <li className="py-4 xs:py-6 border-t-2 border-gray-600">Features</li>
                                <li className="py-4 xs:py-6 border-t-2 border-gray-600">Pricing</li>
                                <li className="py-4 xs:py-6 border-t-2 border-gray-600">Contact</li>
                            </ul>
                            <div className="py-4 xs:py-6 border-t-2 border-gray-600">
                                <button className="text-white w-full py-2 border-2 rounded tracking-widest uppercase whitespace-nowrap hover-red-btn">Log in</button>
                            </div>
                        </div>
                        <div className="text-white mb-10 flex justify-center items-center gap-12">
                            <GrFacebook size={24} className="hover:text-[hsl(0,94%,66%)]" />
                            <FaXTwitter size={24} className="hover:text-[hsl(0,94%,66%)]" />
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
