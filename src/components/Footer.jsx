import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import logoFooter from "../assets/logo-bookmark-footer.svg";

export default function Footer() {
    return (
        <>
            <footer className="md:py-5 py-10 lg:px-24 md:px-16 text-white uppercase bg-[hsl(229,31%,21%)]">
                <section className="mb-6 flex flex-col justify-between items-center md:flex-row space-y-12 md:space-y-0 ">
                    <ul className="flex flex-col md:space-x-6  items-center md:flex-row space-y-8 md:space-y-0 tracking-widest ">
                        <li>
                            <img src={logoFooter} alt="logo" className="w-36 pb-3 md:pb-0 mr-8" />
                        </li>
                        <li className="hover:text-[hsl(0,94%,66%)]">Features</li>
                        <li className="hover:text-[hsl(0,94%,66%)]">Pricing</li>
                        <li className="hover:text-[hsl(0,94%,66%)]">Contact</li>
                    </ul>
                    <div className="pb-6 md:pb-0 flex justify-center items-center gap-10">
                        <GrFacebook size={22} className="hover:text-[hsl(0,94%,66%)]" />
                        <FaXTwitter size={22} className="hover:text-[hsl(0,94%,66%)]" />
                    </div>
                </section>
                <p className="attribution">
                    Challenge by
                    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                        Frontend Mentor
                    </a>
                    . Coded by <a href="#">Ramesh Kumar</a>.
                </p>
            </footer>
        </>
    );
}
