
// import React from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const Faq: React.FC = () => {
//   return (
//     <section className="min-h-screen px-4 py-20 lg:px-6 md:py-28 bg-gradient-to-br from-white to-green-50">
//       <div className="mx-auto max-w-7xl">
//         <h2 className="mb-8 md:text-4xl font-bold text-[#1E1E1E] font-helvetica text-2xl  ">FAQ</h2>

//         <div className="max-w-4xl mt-8 ml-6 space-y-4 md:mt-12 md:ml-32">
//           {/* Open Accordion */}
//           <div className="bg-white border border-gray-200 rounded-md shadow-sm">
//             <div className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-left transition cursor-default">
//               <h2 className="font-bold font-helvetica text-[#1E1E1E] md:text-lg text-md">Title</h2>
//               <ChevronUp className="w-5 h-5 text-[#1E1E1E]" />
//             </div>
//             <div className="px-4 pb-3 text-[#1E1E1E] font-poppins font-normal md:text-sm text-xs leading-relaxed">
//               Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
//             </div>
//           </div>

//           {/* Closed Accordions */}
//           {[...Array(3)].map((_, index) => (
//             <div
//               key={index}
//               className="bg-[#F8F8F8] border border-gray-200 rounded-md shadow-sm"
//             >
//               <div className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-left cursor-default">
//                 <h2 className="font-bold font-helvetica text-[#1E1E1E] md:text-lg text-md">Title</h2>
//                 <ChevronDown className="w-5 h-5 text-[#1E1E1E]" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;



import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  title: string;
  content: string;
};

const faqs: FAQItem[] = [
  {
    title: "Title",
    content: "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
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
    <section className="min-h-screen px-4 py-10 lg:px-6 md:py-28 bg-gradient-to-br from-white to-green-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 md:text-4xl font-bold text-[#1E1E1E] font-helvetica text-2xl  ">FAQ</h2>
        <div className="max-w-4xl mt-8 ml-6 space-y-4 md:mt-12 md:ml-32 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-left transition bg-[#F5F5F5]"
              >
                <h2 className="font-bold font-helvetica text-[#1E1E1E] md:text-lg text-md ">   {faq.title}</h2>
              
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#1E1E1E]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#1E1E1E] " />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-3 text-[#1E1E1E] font-poppins font-normal md:text-sm text-xs leading-relaxed bg-[#F5F5F5]">
                  {faq.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
