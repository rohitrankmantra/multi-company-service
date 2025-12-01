// app/design-process/page.tsx
import React from "react";
import {
  HiOutlineChat,
  HiOutlineSearch,
  HiOutlineUserGroup,
  HiOutlineEye,
  HiOutlineDocumentReport,
} from "react-icons/hi";

const DesignProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Customer needs analysis",
      description:
        "We evaluate and understand each client’s unique requirements. By analyzing their goals and challenges, we create solutions that truly fit. This ensures our approach delivers maximum impact and satisfaction.",
      icon: <HiOutlineChat className="w-8 h-8 text-white" />,
    },
    {
      id: 2,
      title: "Customized operational proposal",
      description:
        "We design operational proposals tailored to each client’s specific needs. Our solutions focus on efficiency, clarity, and actionable steps. This ensures a practical plan aligned with business objectives.",
      icon: <HiOutlineSearch className="w-8 h-8 text-white" />,
    },
    {
      id: 3,
      title: "Internal team assignment",
      description:
        "We allocate the right team members to each project based on their expertise. Our teams work collaboratively to ensure efficiency and high-quality outcomes. This structured assignment guarantees timely and effective results.",
      icon: <HiOutlineUserGroup className="w-8 h-8 text-white" />,
    },
    {
      id: 4,
      title: "Constant supervision",
      description:
        "We maintain continuous oversight throughout every project to ensure smooth execution. Regular monitoring helps identify and resolve issues promptly. This guarantees consistent quality and timely delivery.",
      icon: <HiOutlineEye className="w-8 h-8 text-white" />,
    },
    {
      id: 5,
      title: "Monthly reports and quality control",
      description:
        "We provide detailed monthly reports to track progress and performance. Our quality control processes ensure that every deliverable meets high standards. This helps maintain transparency and consistently achieve excellent results.",
      icon: <HiOutlineDocumentReport className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <div className="relative min-h-screen py-16 px-4">
      {/* Background Image with repeat */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/home/hexellence.png')] bg-repeat bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-80"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gray-800">Professional Process</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Our professional process ensures each project is planned and
            executed with precision. From initial strategy to final delivery, we
            focus on quality, efficiency, and client satisfaction at every step.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1B3275] hidden md:block"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10 w-16 h-16 rounded-full bg-[#1B3275] flex items-center justify-center text-2xl font-bold shadow-lg mb-4 md:mb-0">
                  {step.icon}
                </div>

                {/* Content Card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center mb-3 md:mb-4">
                      <span className="text-sm font-semibold text-[#1B3275] bg-green-50 px-3 py-1 rounded-full">
                        Step {step.id}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
