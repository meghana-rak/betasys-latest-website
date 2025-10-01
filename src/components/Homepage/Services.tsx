import React from "react";
import { Brain, Cpu, Cloud, Cog, BarChart3, Bot } from "lucide-react";
import { useIntersectionObserver } from "../../hooks/useParallax";
import bgImage from "../../assests/Whatwedo/bg-img.png";

const Services = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Foundation & Analytics",
      description:
        "We help you build a strong data backbone and transform it into actionable business insights. Our team migrates, cleans, and structures your data with modern pipelines, then delivers AI-powered dashboards so you can make faster, smarter decisions.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Custom AI/ML Models",
      description:
        "Get AI solutions trained specifically for your business needs. We design and train machine learning models tailored to your unique challenges—from demand forecasting and anomaly detection to recommendations and predictive insights—and deploy them securely for real-time use.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Consulting & POC Development",
      description:
        "Test AI potential with minimal risk through our 4-6 week free Proof of Concept (POC) program. Our experts design and deploy tailored AI solutions—from chatbots to predictive models—so you can evaluate real business impact before scaling.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "MLOps & AI Governance",
      description:
        "Ensure your AI models remain reliable, scalable, and secure. Our MLOps framework streamlines model deployment and monitoring, while our AI governance practices provide guardrails for compliance, bias detection, data privacy, and cost optimization.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Agentic AI Workflows",
      description:
        "Automate complex business processes with intelligent AI agents that handle multi-step tasks autonomously. These workflows retrieve and analyze data, trigger actions across your business systems, and deliver faster outcomes at scale—all with built-in security and integrations.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Modernize Your Apps with AI",
      description:
        "Enhance your existing business applications without replacing them. We embed AI assistants, intelligent features, and predictive capabilities to streamline workflows like reporting, data entry, and decision-making—without requiring a complete system overhaul.",
    },
  ];

  return (
    <section
      ref={setElement}
      className={`py-10 md:py-20 bg-cover bg-no-repeat bg-center  transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-4 ">
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
            Our AI Services
          </p>
          <h2 className="md:text-[38px] font-bold  text-[28px]   font-regular text-white mt-[4px] mb-[1px]">
            Why Growing Businesses Choose Betasys AI
          </h2>
          <p className="max-w-3xl text-[#E8E8E8] font-poppins  text-[18px] md:text-[22px]  mb-8">
            Built for agility, clarity, and real business impact—Betasys stands
            apart from legacy giants.{" "}
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-3 md:py-6 gap-3 flex bg-black/10 backdrop-blur-sm rounded-xl shadow-lg"
            >
              <div className="text-white ">{service.icon}</div>
              <div>
                <h3 className="text-[18px] md:text-[20px]  font-semibold text-gray-200 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-[18px] md:text-[18px] font-poppins leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
