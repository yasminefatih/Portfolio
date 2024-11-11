import React from "react";
import avatarImg from "../../assets/web-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl mb-4 md:text-5xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Développeuse web passionnée, à la recherche d’un stage pour mettre en
          pratique mes compétences et continuer à progresser aux côtés de
          professionnels expérimentés. Dynamique, organisée et capable de
          travailler en équipe, je souhaite apporter une contribution positive à
          votre équipe.
        </p>
        {/* إضافة الدالة على الزر */}
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#d946ef]">
          <a href="#Footer">Contactez-moi</a>
        </button>
      </div>
      <div className="mt-5 md:mt-0">
        <img className="w-full md:w-auto" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
