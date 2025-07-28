import React from "react";

const clients = [
  "Enterprises seeking AI transformation",
  "Startups building AI-first products",
  "Non-tech companies exploring automation",
  "Government and education institutions",
];

const testimonials = [
  {
    quote:
      "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
    author: "- COO, Retail Tech Company",
  },
  {
    quote:
      "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
    author: "- COO, Retail Tech Company",
  },
  {
    quote:
      "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
    author: "- COO, Retail Tech Company",
  },
];

const Work: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-20 text-[#000000]">
      {/* Who We Work With */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl  mb-3 font-helvetica">
          Who We <span className="font-bold">Work With</span>
        </h2>
        <p className="text-[#595959] text-[16px] font-poppins mb-8">
          Delivering Value Across Sectors and Scales identify high-impact
          opportunities for artificial intelligence, assess <br /> readiness,
          and implement scalable AI
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-[#022334] text-white text-center font-poppins p-6 rounded-xl shadow-sm h-[120px] 
             text-[14px] sm:text-[14px] md:text-[16px]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl  mb-3 font-helvetica text-[#000000">
          Success <span className="font-bold">Stories</span>
        </h2>
        <p className="text-[#595959] text-[16px] font-poppins mb-8">
          Delivering Value Across Sectors and Scales identify high-impact
          opportunities for artificial intelligence, assess <br /> readiness,
          and implement scalable AI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#022334] via-[#022334] to-[#06689A] text-white p-6 rounded-xl shadow-md"
            >
              <p className="text-[14px] text-[#FFFFFF] font-poppins mb-8">
                {item.quote}
              </p>
              <p className="font-bold text-[16px] text-[#FFFFFF] font-poppins">
                {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
