import React from "react";
import chromeLogo from "../assets/logo-chrome.svg";
import firefoxLogo from "../assets/logo-firefox.svg";
import operaLogo from "../assets/logo-opera.svg";
import bgDots from "../assets/bg-dots.svg";

export default function DownloadSection() {
    const downloadData = [
        {
            title: "Add to Chrome",
            logo: `${chromeLogo}`,
            minVersion: "Minimum version 62",
        },
        {
            title: "Add to Firefox",
            logo: `${firefoxLogo}`,
            minVersion: "Minimum version 55",
        },
        {
            title: "Add to Opera",
            logo: `${operaLogo}`,
            minVersion: "Minimum version 46",
        },
    ];
    return (
        <>
            <div className="mb-32">
                <div className="max-w-lg mx-auto mb-16 text-center ">
                    <h2 className="py-4 text-2xl">Download the extension</h2>
                    <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
                </div>
                <div className="h-full lg:h-[460px] px-6 lg:flex lg:justify-center lg:space-x-8 sm:whitespace-nowrap">
                    {downloadData.map((item) => (
                        <div
                            key={item.title}
                            className="p-4 mb-20 lg:mb-0 bg-white flex flex-col items-center shadow-2xl self-start
                            even:self-center last:self-end">
                            <img src={item.logo} alt="chrome-logo" />
                            <h3 className="pt-8 pb-2 text-xl">{item.title}</h3>
                            <p className="ppb-14">{item.minVersion}</p>
                            <img src={bgDots} alt="dots" className="pt-10 pb-8" />
                            <button
                                className="px-6 py-2 bg-[hsl(231,69%,60%)] 
                                        text-white rounded shadow-xl hover-blue-btn">
                                Add & Install Extension
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
