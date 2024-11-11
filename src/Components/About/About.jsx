import AboutImg from "../../assets/web-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">À propos de moi</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="Image à propos" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Développeuse Passionnée et Déterminée
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  J'ai une passion inébranlable pour le développement web. Mon
                  objectif est de créer des solutions élégantes et efficaces en
                  utilisant les dernières technologies. Je suis prête à apporter
                  des idées nouvelles et à contribuer à des projets innovants.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Toujours en Évolution
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Actuellement en apprentissage de React, je m'efforce de
                  repousser mes limites pour maîtriser les outils modernes et
                  offrir des expériences utilisateur dynamiques et fluides. Mon
                  approche collaborative et mon désir de progresser me
                  permettent de m'intégrer facilement dans une équipe et de
                  participer à des projets ambitieux.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
