import React from "react";
import hero from "../assets/illustration-hero.svg";

export default function HeroSection() {
    return (
        <>
            <section className="mb-32 lg:mb-20 mt-12 lg:pl-10 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16">
                <article className="pt-12 lg:pt-8 text-center lg:text-left ">
                    <h1 className="pb-6 text-3xl md:text-4xl xl:text-5xl">A Simple Bookmark Manager</h1>
                    <p className="pb-6">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <ul className="text-sm sm:text-base flex justify-center lg:justify-start space-x-5 sm:whitespace-nowrap">
                        <li>
                            <button className="p-3 sm:px-5 bg-[hsl(231,69%,60%)] text-white rounded shadow-xl hover-blue-btn">Get it on Chrome</button>
                        </li>
                        <li>
                            <button className="p-3 sm:px-5 bg-slate-100 rounded shadow-xl hover-darkblue-btn">Get it on Firefox</button>
                        </li>
                    </ul>
                </article>
                <div className="relative">
                    <img src={hero} alt="bookmark-hero" className="w-full" />
                    <div className="hero-bg"></div>
                </div>
            </section>
        </>
    );
}
