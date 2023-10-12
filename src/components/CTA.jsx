import React, { useState } from "react";

export default function CTA() {
    const [email, setEmail] = useState("");
    const handleChange = (event) => {
        setEmail(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };
    return (
        <>
            <div className="w-full bg-[hsl(231,69%,60%)]">
                <div className="pb-12 max-w-sm sm:max-w-md mx-auto text-center">
                    <p className="pt-10 text-white text-[10px] tracking-[0.2rem] uppercase">35,000+ already joined</p>
                    <h2 className="pt-2 sm:pt-6 sm:text-3xl text-2xl text-white tracking-wider">Stay up-to-date with what we’re doing</h2>
                    <div className="py-5">
                        <form action="/" method="post" onSubmit={handleSubmit} noValidate className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:items-center justify-center sm:space-x-4 relative">
                            <input
                                type="email"
                                name="email"
                                className={`w-5/6 sm:w-72 px-4 py-2 text-sm rounded outline-none invalid:border-2 ${email && "invalid:border-[hsl(0,94%,66%)]"}`}
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                            />
                            <input
                                type="submit"
                                className="bg-[hsl(0,94%,66%)] rounded text-sm text-white py-2 
                                px-4 whitespace-nowrap sm:w-auto w-5/6 hover-red-btn hover:bg-white cursor-pointer"
                                value="Contact Us"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
