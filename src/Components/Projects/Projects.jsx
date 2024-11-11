import React from "react";
import {
  FaUtensils,
  FaCoffee,
  FaLaptop,
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa"; // استيراد الأيقونات من مكتبة react-icons

import ProjectCard from "./ProjectCard"; // استيراد مكون ProjectCard

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        {/* المشاريع مع الأيقونات */}
        <ProjectCard
          title="Site Web de Restaurant"
          main="Créé avec HTML, CSS et JavaScript, offrant un design réactif pour afficher le menu, les réservations et les informations de contact."
          demoLink="https://restaurant-website-demo-link.com"
          icon={<FaUtensils />} // أيقونة المطعم
        />
        <ProjectCard
          title="Site Web d'un Café"
          main="Développé avec HTML, CSS et JavaScript, offrant un design moderne et réactif pour explorer les différents types de café et accéder facilement aux informations de contact."
          demoLink="https://yasminefatih.github.io/Coffee-Shop-Website/"
          icon={<FaCoffee />} // أيقونة القهوة
        />
        <ProjectCard
          title="Site Design et Marketing Pro"
          main="Réalisé avec HTML, CSS et Bootstrap 5, offrant un design réactif et des services de marketing digital pour améliorer la visibilité en ligne."
          demoLink="https://yasminefatih.github.io/Responsive_Prixima/"
          icon={<FaLaptop />} // أيقونة الكمبيوتر المحمول
        />
        <ProjectCard
          title="Site Web d'Agence"
          main="Conçu avec HTML, CSS et Javascript, offrant un design réactif et des solutions digitales pour promouvoir les services de l'agence."
          demoLink="https://yasminefatih.github.io/Responsive-Agency-Website/"
          icon={<FaPaintBrush />} // أيقونة فرشاة الرسم
        />
        <ProjectCard
          title="Site Design et Marketing Pro"
          main="Créé avec HTML, CSS et JavaScript, offrant un design réactif et des services pour améliorer la visibilité en ligne."
          demoLink="https://yasminefatih.github.io/Responsive_Prixima/"
          icon={<FaLaptop />} // أيقونة الكمبيوتر المحمول
        />
        <ProjectCard
          title="Site de Pages d'Atterrissage"
          main="Créé avec HTML, CSS et Bootstrap 5, offrant un design réactif et des pages d'atterrissage optimisées pour maximiser les conversions."
          demoLink="https://yasminefatih.github.io/Bootstrap-Landing-Page/"
          icon={<FaCode />} // أيقونة الشيفرة البرمجية
        />
        <ProjectCard
          title="Site de Page d'Atterrissage"
          main="Créé avec HTML, CSS et Tailwind, offrant un design réactif et des pages d'atterrissage optimisées pour maximiser les conversions."
          demoLink="https://yasminefatih.github.io/tailwind-landing-page/"
          icon={<FaCode />} // أيقونة الشيفرة البرمجية
        />
        <ProjectCard
          title="Liste de Tâches"
          main="Créée avec React.js et Tailwind CSS, permettant de gérer facilement les tâches et de démontrer les opérations CRUD avec un design réactif."
          demoLink="https://yasminefatih.github.io/Todo-list-React/"
          icon={<FaCheckCircle />} // أيقونة علامة صح
        />
        <ProjectCard
          title="Formulaire multi-étapes"
          main="Développé avec React et Tailwind CSS, permettant une navigation fluide et intuitive à travers plusieurs étapes de saisie."
          demoLink="https://yasminefatih.github.io/react-multi-step-form/"
          icon={<FaCheckCircle />} // أيقونة علامة صح
        />
        <ProjectCard
          title="Formulaire React avec Hook"
          main="Développé avec React et Tailwind CSS, permettant une gestion facile et performante des formulaires."
          demoLink="https://yasminefatih.github.io/react-hook-form/"
          icon={<FaCheckCircle />} // أيقونة علامة صح
        />
        <ProjectCard
          title="Mon site web"
          main="Créé avec React et Tailwind CSS, offrant une interface moderne et élégante, optimisée pour une expérience utilisateur fluide."
          demoLink="https://yasminefatih.github.io/React_Tailwind_CSS_Responsive_Website/"
          icon={<FaLaptop />} // أيقونة الكمبيوتر المحمول
        />
        <ProjectCard
          title="CRUD"
          main="Créé avec React, permettant une gestion complète des produits (CRUD) avec une interface simple pour ajouter, modifier, afficher et supprimer des produits."
          demoLink="https://yasminefatih.github.io/Full-product-management-system-crud-/"
          icon={<FaCode />} // أيقونة الشيفرة البرمجية
        />
      </div>
    </div>
  );
};

export default Projects;
