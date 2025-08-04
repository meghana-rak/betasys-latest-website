import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type FAQItem = {
  title: string;
  content: string;
};

const faqs: FAQItem[] = [
  {
    title: "Title",
    content:
      "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
  },
  {
    title: "Title",
    content: "This is another answer to a different question.",
  },
  {
    title: "Title",
    content: "Here's more information that users often ask about.",
  },
  {
    title: "Title",
    content: "Yet another FAQ entry with helpful text.",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full min-h-screen px-4 py-10 mx-20 overflow-y-auto lg:px-24 sm:px-6 md:py-24">
      <div className="w-full mx-auto">
        <h2 className="my-1 mb-8 text-2xl font-bold text-black md:text-4xl font-regular font-helvetica">
          FAQ
        </h2>

        <div className="max-w-5xl mx-auto mt-8 ml-6 space-y-3 md:mt-12 md:ml-32">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="w-full transition-all duration-300 bg-white border border-gray-200 rounded-md shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-left transition ${
                    isActive ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <h2
                    className={`font-bold font-helvetica md:text-lg text-md transition ${
                      isActive ? "text-black" : "text-black"
                    }`}
                  >
                    {faq.title}
                  </h2>

                  {isActive ? (
                    <IoIosArrowUp className="w-5 h-5 text-black" />
                  ) : (
                    <IoIosArrowDown className="w-5 h-5 text-black" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div
                    className={`px-3 py-1 mb-1 transition font-poppins font-normal md:text-sm text-xs leading-relaxed md:text-[20px]${
                      isActive ? "bg-white text-gray-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {faq.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
