import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiQuasar } from "react-icons/si";
import { SiUml } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiVuetify } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Compétences</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-3/5 gap-8 md:p-12 py-10">
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <p className="text-white mt-2">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <p className="text-white mt-2">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <p className="text-white mt-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaJs color="#F7DF1E" size={50} />
            </span>
            <p className="text-white mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiQuasar color="#61DAFB" size={50} />
            </span>
            <p className="text-white mt-2">Quasar</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiUml color="#47A248" size={50} />
            </span>
            <p className="text-white mt-2">UML</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiTailwindcss color="#61DAFB" size={50} />
            </span>
            <p className="text-white mt-2">TailwindCSS</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaBootstrap color="#c026d3" size={50} />
            </span>
            <p className="text-white mt-2">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiVuetify color="#61DAFB" size={50} />
            </span>
            <p className="text-white mt-2">Vuetify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
