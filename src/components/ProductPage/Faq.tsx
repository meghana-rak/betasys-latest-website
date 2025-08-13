// import React, { useState , useEffect} from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { motion } from "framer-motion";

// type FAQItem = {
//   title: string;
//   content: string;
// };

// const faqs: FAQItem[] = [
//   {
//     title: "Title",
//     content:
//       "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
//   },
//   {
//     title: "Title",
//     content: "This is another answer to a different question.",
//   },
//   {
//     title: "Title",
//     content: "Here's more information that users often ask about.",
//   },
//   {
//     title: "Title",
//     content: "Yet another FAQ entry with helpful text.",
//   },
// ];

// const Faq: React.FC = () => {
//   // const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   // const toggleAccordion = (index: number) => {
//   //   setActiveIndex(index === activeIndex ? null : index);
//   // };

//    const [showText, setShowText] = useState(false);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setShowText(true);
//       }, 200);
//       return () => clearTimeout(timer);
//     }, []);

//   return (
//     <section className="w-full  px-4 py-10 lg:px-24 sm:px-6 md:py-32">
//       <div className="w-full mx-auto ">
//         <h2 className="my-1 mb-8 text-[28px] font-bold text-black md:text-[38px] font-regular font-helvetica">
//           FAQ
//         </h2>
//         <motion.div

//           className="lg:max-w-3xl text-center lg:text-left order-2 md:order-1 "
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           <div className="max-w-7xl mx-auto mt-8 space-y-3 md:mt-12 ">
//             {faqs.map((faq, index) => {
//               const isActive = activeIndex === index;

//               return (
//                 <div
//                   key={index}
//                   className="w-full transition-all duration-300 bg-white border border-gray-200 rounded-md shadow-sm"
//                 >
//                   <button
//                     onClick={() => toggleAccordion(index)}
//                     className={`flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-left transition ${isActive ? "bg-white" : "bg-gray-100"
//                       }`}
//                   >
//                     <h2
//                       className={`font-bold font-helvetica md:text-[28px] text-[24px] transition ${isActive ? "text-black" : "text-black"
//                         }`}
//                     >
//                       {faq.title}
//                     </h2>

//                     {isActive ? (
//                       <IoIosArrowUp className="w-5 h-5 text-black" />
//                     ) : (
//                       <IoIosArrowDown className="w-5 h-5 text-black" />
//                     )}
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "max-h-40" : "max-h-0"
//                       }`}
//                   >
//                     <div
//                       className={`px-3 py-1 mb-1 transition font-poppins font-normal md:text-[22px] text-[18px] leading-tight lg:leading-relaxed  ${isActive ? "bg-white text-gray-800" : "bg-gray-100 text-gray-800"
//                         }`}
//                     >
//                       {faq.content}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Faq;


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
  const { isVisible, setElement } = useIntersectionObserver();

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="who-section"
      ref={setElement}
      className={`py-10 md:py-20 transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="my-1 mb-8 text-[24px] font-bold text-black md:text-[38px] font-helvetica">
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
                  className={`flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-left transition ${isActive ? "bg-white" : "bg-gray-100"
                    }`}
                >
                  <h2
                    className={`font-bold font-helvetica md:text-[26px] text-[22px]`}
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
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "max-h-screen" : "max-h-0"
                    }`}
                >
                  <div
                    className={`px-3 py-3 font-poppins font-normal md:text-[20px] lg:text-[22px] text-[18px] leading-tight lg:leading-relaxed ${isActive
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
