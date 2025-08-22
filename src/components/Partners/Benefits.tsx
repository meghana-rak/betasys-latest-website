import React from 'react';
import { Brain, Cpu, Cloud, Cog, BarChart3, Bot, MessagesSquare } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import bgImage from '../../assests/Whatwedo/bg-img.png';
import MsgIcon from '../../assests/Icon.png'

const Benefits = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  const benefits = [
    {
      icon:<MessagesSquare className="w-8 h-8" /> ,
      title: "Faster Time to Insights",
      description: "Pre-built Lakehouse accelerators and collaborative notebooks help you prototype, iterate, and launch analytics and AI use cases in days, not months."
    },
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Single Unified Platform",
      description: "Consolidate your data lakes, warehouses, and ML workflows into one Lakehouse—simplifying your stack and reducing integration headaches."
    },
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Colaborative Workflows",
      description: "Share notebooks, dashboards, and model registries across data engineers, analysts, and data scientists for seamless teamwork."
    },
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Cost Efficiency",
      description: "Auto-scaling compute, spot instances, and unified storage mean you only pay for what you use—optimizing your cloud spend."
    },
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Future-Ready Architecture",
      description: "Built on open-source standards and continuously enhanced by Databricks and Konverge AI, your Lakehouse stays cutting-edge without costly re-builds."
    },
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Global Scale & Compliance",
      description: "Databricks runs in all major cloud regions and meets key certifications (SOC 2, HIPAA, GDPR). Konverge AI helps you configure governance and security to your needs."
    }
  ];

  return (
    <section
      ref={setElement}
      className={`py-10 md:py-20 bg-cover bg-no-repeat bg-center  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
      style={{
        backgroundImage:`url(${bgImage})`
      }}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-4 ">
          <h2 className="md:text-[38px] font-bold  text-[28px] font-helvetica font-regular text-white mt-[4px] mb-[1px]">
           Databricks + Betasys AI Benefits
          </h2>
          <p className="max-w-3xl text-[#E8E8E8] font-poppins  text-[18px] md:text-[22px]  mb-8">
          Partnering with us and Databricks gives you a clear path to data-driven success:
        </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
          }`}>
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className="p-3 md:py-12 gap-3 flex bg-black/10 backdrop-blur-sm rounded-xl shadow-lg"
            >
              <div className="text-white ">
              {benefit?.icon}
              </div>
              <div>
              <h3 className="text-[24px] md:text-[28px] font-helvetica font-semibold text-white mb-2">{benefit?.title}</h3>
              <p className="text-gray-300 text-[18px] md:text-[22px] font-poppins leading-relaxed font-light">{benefit?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;