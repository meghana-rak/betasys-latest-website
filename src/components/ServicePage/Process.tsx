import React from "react";
import ReactangleP from "../../assests/Servicepage/RectangleP.png";

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
      <div className="mx-auto max-w-7xl">
        <p className="text-sm text-[#00A148] font-medium mb-1">Our Core Capabilities</p>
        <h2 className="mb-3 text-3xl font-semibold">Our Consulting Process</h2>
        <p className="text-[#D4D4D4] text-sm mb-10 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, <br className="hidden md:block"/> felis 
          scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
           <div
  key={index}
  className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 min-h-[200px]"
>
  <img
    src={ReactangleP}
    alt="Background"
    className="object-cover w-full h-full"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
    <h3 className="text-[#FFFFFF] text-md font-bold font-helvetica mb-2 ">{item.title}</h3>
   <p className="text-[#FFFFFF] text-xs  font-poppins ">{item.description}</p>

  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
