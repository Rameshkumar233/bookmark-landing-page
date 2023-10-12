import React from "react";

import Accordion from "./Accordion";

export default function FAQs() {
    const faqQuestions = [
        {
            id: 1,
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
        },
        {
            id: 2,
            question: "How can I request a new browser?",
            answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
        },
        {
            id: 3,
            question: "Is there a mobile app?",
            answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
        },
        {
            id: 4,
            question: "What about other Chromium browsers?",
            answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
        },
    ];

    return (
        <div className="mb-12">
            <div className="mb-12 max-w-lg mx-auto text-center">
                <h2 className="py-4 text-2xl">Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            </div>
            <article className="px-2 mb-10 max-w-lg mx-auto">
                {faqQuestions.map((faq) => (
                    <Accordion key={faq.id} title={faq.question} content={faq.answer} />
                ))}
            </article>
            <div className="text-center">
                <button className="px-4 py-2 bg-[hsl(231,69%,60%)] text-white rounded shadow-xl hover:bg-opacity-90">More Info</button>
            </div>
        </div>
    );
}
