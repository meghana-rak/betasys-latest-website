import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useParallax";

type FAQItem = {
  title: string;
  content: string;
};

const faqs: FAQItem[] = [
  {
    title: "How long does it take to implement an AI solution?",
    content:
      "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.Timeframes vary based on complexity, but our approach focuses on rapid implementation. Most clients see initial results within 4-6 weeks through our POC program, with full implementations typically taking 2-3 months.",
  },
  {
    title: "How much does AI implementation cost?",
    content:
      "We structure our pricing based on the specific scope and value of each project. Our free POC program lets you evaluate potential ROI before making significant investments. Most clients see positive ROI within 3-6 months of implementation.",
  },
  {
    title: "Do we need to replace our existing systems to implement AI?",
    content:
      "No. We design our solutions to integrate with your existing systems and workflows. Our approach focuses on enhancing what you already have rather than requiring complete replacements.",
  },
  {
    title: "How do you ensure data security and privacy?",
    content:
      "We implement robust security measures including encryption, access controls, and compliance with industry standards. All data handling follows strict protocols, and we can work within your existing security framework.",
  },
  {
    title: "What if we don’t have clean or organized data?",
    content:
      "Our data foundation services help organize and prepare your data for AI implementation. We can work with data in various states and help establish the right infrastructure for ongoing success.",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { isVisible, setElement } = useIntersectionObserver();

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="who-section"
      ref={setElement}
      className={`pt-10 md:pt-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="my-1 mb-8 text-[24px] font-bold text-black md:text-[38px]  ">
          FAQ
        </h2>

        <div className=" mx-auto mt-8 space-y-3 md:mt-12 ">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full transition-all duration-300 bg-white border border-gray-200 rounded-md shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-left transition ${
                    isActive ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <h2
                    className={`font-semibold   md:text-[22px] text-[18px]`}
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
                    isActive ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div
                    className={`px-3 py-3 font-poppins font-normal md:text-[18px] lg:text-[18px] text-[18px] leading-tight lg:leading-relaxed ${
                      isActive
                        ? "bg-white text-gray-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {faq.content}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
