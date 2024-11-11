// Certificates.js
import React from "react";
import { FaCertificate } from "react-icons/fa"; // Import the certificate icon

const Certificats = () => {
  return (
    <div id="Certificats" className="p-10 md:p-24 bg-gray-800 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Certificates</h1>
      <div className="mt-6">
        {/* Web Development Certificate */}
        <div className="bg-gray-700 p-4 mb-4 rounded-lg flex items-center ">
          <FaCertificate color="#FFD700" size={30} className="mr-4" />
          <div>
            <h2 className="text-xl font-semibold">
              Développement Front-End (Meta).
            </h2>
            <p className="text-sm">Coursera.</p>
            <a
              href="https://coursera.org/share/f5a770d260d3e006e899753059a25e0b"
              className="text-blue-400 hover:underline"
            >
              Voir le certificat
            </a>
          </div>
        </div>

        {/* UML Certification */}
        <div className="bg-gray-700 p-4 mb-4 rounded-lg flex items-center ">
          <FaCertificate color="#FFD700" size={30} className="mr-4" />
          <div>
            <h2 className="text-xl font-semibold">
              Programmation avec JavaScript (Meta)
            </h2>
            <p className="text-sm">Coursera.</p>
            <a
              href="https://coursera.org/share/acb378e546aa8a177a53d40387104a9b"
              className="text-blue-400 hover:underline"
            >
              Voir le certificat
            </a>
          </div>
        </div>

        {/* React Certification */}
        <div className="bg-gray-700 p-4 mb-4 rounded-lg flex items-center ">
          <FaCertificate color="#FFD700" size={30} className="mr-4" />
          <div>
            <h2 className="text-xl font-semibold">
              Notions de base en React (Meta)
            </h2>
            <p className="text-sm">Coursera.</p>
            <a
              href="https://coursera.org/share/24d4c507e1151747de892fbc33eea194"
              className="text-blue-400 hover:underline"
            >
              Voir le certificat
            </a>
          </div>
        </div>
        <div className="bg-gray-700 p-4 mb-4 rounded-lg flex items-center ">
          <FaCertificate color="#FFD700" size={30} className="mr-4" />
          <div>
            <h2 className="text-xl font-semibold">
              Chinois pour débutants (Université de Pékin)
            </h2>
            <p className="text-sm">Coursera.</p>
            <a
              href="https://coursera.org/share/501ef4eaec5012bf156f317b7be44c0e"
              className="text-blue-400 hover:underline"
            >
              Voir le certificat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificats;
