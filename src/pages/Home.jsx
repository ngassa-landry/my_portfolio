import React from 'react';

const Home = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Je suis un développeur passionné par la création d'applications web modernes avec React et Tailwind CSS.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Voir mes projets
        </button>
      </div>
    </section>
  );
};

export default Home;