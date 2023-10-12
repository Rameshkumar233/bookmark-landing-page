import React, { useState } from "react";
import tab_1Image from "../assets/illustration-features-tab-1.svg";
import tab_2Image from "../assets/illustration-features-tab-2.svg";
import tab_3Image from "../assets/illustration-features-tab-3.svg";

export default function Tabs() {
    const tabs = [
        {
            id: 1,
            tabName: "Simple Bookmarking",
            title: "Bookmark in one click",
            desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            image: `${tab_1Image}`,
        },
        {
            id: 2,
            tabName: "Speedy Searching",
            title: "Intelligent search",
            desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
            image: `${tab_2Image}`,
        },
        {
            id: 3,
            tabName: "Easy Sharing",
            title: "Share your bookmarks",
            desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
            image: `${tab_3Image}`,
        },
    ];
    const [activeTab, setActiveTab] = useState(1);
    const handleTab = (index) => {
        setActiveTab(tabs[index].id);
    };

    return (
        <>
            <section className="px">
                <article className="mb-6 text-center sm:max-w-lg mx-auto">
                    <h2 className="py-4 text-2xl">Features</h2>
                    <p className="">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </article>
                <ul className="mb-16 text-center flex flex-col lg:flex-row justify-center ">
                    {tabs.map((tab, index) => (
                        <li key={tab.id} className="border-t-2 lg:border-t-0 last:border-b-2 lg:border-b-2 border-gray-00">
                            <button
                                onClick={() => handleTab(index)}
                                className={`py-4 lg:px-8 
                                    ${activeTab === tab.id && "border-b-4 border-b-[hsl(0,94%,66%)]"} 
                                    hover:text-[hsl(0,94%,66%)]`}>
                                {tab.tabName}
                            </button>
                        </li>
                    ))}
                </ul>
                <section className="mb-36 px-8 sm:px-10 lg:px-0">
                    {tabs.map(
                        (tab) =>
                            activeTab === tab.id && (
                                <article key={tab.title} className="lg:grid lg:grid-cols-2 lg:place-items-center xl:gap-14 gap-12">
                                    <div className="relative mb-20 lg:mb-0">
                                        <img src={tab.image} alt={tab.title} className={` ${activeTab === 1 ? "xl:pl-20 lg:pl-12" : "xl:pl-28 md:pl-20"} w-full`} />
                                        <div
                                            className={`
                                        ${activeTab === 1 && "tab1-bg"} 
                                        ${activeTab === 2 && "tab2-bg"} 
                                        ${activeTab === 3 && "tab3-bg"}`}></div>
                                    </div>
                                    <div className="text-center lg:text-left max-w-md mx-auto">
                                        <h2 className="pb-4 text-2xl">{tab.title}</h2>
                                        <p className="pb-4">{tab.desc}</p>
                                        <button className="px-4 py-2 bg-[hsl(231,69%,60%)] text-white rounded shadow-xl hover:bg-opacity-90">More Info</button>
                                    </div>
                                </article>
                            )
                    )}
                </section>
            </section>
        </>
    );
}
