import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const templates = [
    { name: "Software Developer", img: "https://via.placeholder.com/400x300?text=Software" },
    { name: "Cybersecurity Specialist", img: "https://via.placeholder.com/400x300?text=Cybersecurity" },
    { name: "Business Analyst", img: "https://via.placeholder.com/400x300?text=Business+Analyst" },
    { name: "Core Engineer", img: "https://via.placeholder.com/400x300?text=Core+Engineer" },
    { name: "Medical Professional", img: "https://via.placeholder.com/400x300?text=Medical" },
    { name: "Data Scientist", img: "https://via.placeholder.com/400x300?text=Data+Scientist" },
    { name: "Researcher", img: "https://via.placeholder.com/400x300?text=Researcher" },
    { name: "Student", img: "https://via.placeholder.com/400x300?text=Student" },
    { name: "Create Your Own Template", img: "https://via.placeholder.com/400x300?text=Custom" },
  ];
  
  

  const handleTemplateSelect = (profession) => {
    localStorage.setItem('selectedProfession', profession);
    history.push('/form');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 flex flex-col items-center p-10 overflow-hidden">
      
      {/* Blurred Animated Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-4000"></div>

      {/* Header */}
      <h1 className="text-6xl font-extrabold text-center text-blue-800 mb-4 z-10 drop-shadow-lg">OneClickSite</h1>
      <p className="text-center text-2xl font-light mb-12 text-blue-600 z-10 max-w-2xl">Choose your profession below and create your personal website — in just a few minutes!</p>

      {/* Template Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 z-10 max-w-6xl">
        {templates.map((template) => (
          <div
            key={template.name}
            onClick={() => handleTemplateSelect(template.name)}
            className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={template.img}
              alt={template.name}
              className="w-full h-56 object-cover rounded-t-3xl"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-center text-gray-800">{template.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm z-10">
        © 2025 OneClickSite - All rights reserved
      </footer>
    </div>
  );
}

export default Home;
