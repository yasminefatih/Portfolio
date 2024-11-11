import React from "react";

// مكون ProjectCard يعرض تفاصيل كل مشروع باستخدام الأيقونات بدلاً من الصور
const ProjectCard = ({ title, main, demoLink, icon }) => {
  const handleDemoClick = () => {
    window.location.assign(demoLink); // توجيه المستخدم إلى الرابط
  };

  return (
    <div className="p-3 md:p-6 flex flex-col w-80 h-[250px] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="text-sm md:text-md leading-tight py-2 flex-1">{main}</p>
      <button
        className="text-white text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#d946ef]"
        onClick={handleDemoClick}
      >
        Demo
      </button>
    </div>
  );
};

export default ProjectCard;
