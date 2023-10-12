import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Accordion({ title, content }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className=" border-b-2 md:first:border-t-2">
                <header onClick={() => setIsActive(!isActive)}>
                    <h4 className="flex justify-between items-center  cursor-pointer py-4 font-semibold sm:text-lg text-sm hover:text-[hsl(0,94%,66%)]">
                        {title}
                        <FaAngleDown size={24} className={` ${isActive ? "rotate-180 text-[hsl(0,94%,66%)] " : "rotate-0 text-[hsl(231,69%,60%)]"} transition-all duration-700`} />
                    </h4>
                </header>
                <p className={`${isActive && "pb-4"} leading-loose`}>{isActive && content}</p>
            </div>
        </>
    );
}
