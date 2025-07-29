import React from "react";
import ReactangleP from "../../assests/RectangleP.png";

const features = [
  {
    title: "Customer Experience AI",
    description:
      "Personalize interactions and automate support with AI-driven chatbots and insights.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Streamline repetitive tasks and boost operational efficiency using AI workflows",
  },
  {
    title: "Custom AI Development",
    description:
      "We build custom AI solutions designed around your business goals, processes and industry needs.",
  },
  {
    title: "Customer Experience AI",
    description:
      "Personalize interactions and automate support with AI-driven chatbots and insights.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Streamline repetitive tasks and boost operational efficiency using AI workflows",
  },
  {
    title: "Custom AI Development",
    description:
      "We build custom AI solutions designed around your business goals, processes and industry needs.",
  },
];

const Process: React.FC = () => {
  return (
    <section className="bg-[#022334] py-16 px-4 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-[#00A148] font-medium mb-1">Our Core Capabilities</p>
        <h2 className="text-3xl font-semibold mb-3">Our Consulting Process</h2>
        <p className="text-[#D4D4D4] text-[16px] mb-10 md:text-[14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, <br /> felis 
          scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 min-h-[200px]"
            >
              <img
                src={ReactangleP}
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-[#FFFFFF] text-[22px] font-bold font-helvetica mb-2">{item.title}</h3>
                <p className="text-[#FFFFFF] text-[16px] font-poppins md:text-[14px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
