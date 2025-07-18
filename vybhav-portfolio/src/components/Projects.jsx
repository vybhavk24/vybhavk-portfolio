import React from 'react';

export default function Projects({ projects }) {
  const defaultProjects = [
    { name: 'Project 1', description: 'A web app for visualizing data trends.' },
    { name: 'Project 2', description: 'A machine learning model for classification.' },
    { name: 'Project 3', description: 'A portfolio website built with React and Tailwind.' },
  ];
  const projectList = projects || defaultProjects;

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2">
        <span role="img" aria-label="Projects">🚀</span> Projects Built
      </h2>
      <ul className="mb-4">
        {projectList.map((project, idx) => (
          <li key={idx} className="mb-6">
            <div className="font-semibold text-base md:text-lg">{project.name}</div>
            <div className="text-sm md:text-base text-gray-600 mb-2">{project.description}</div>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-blue-100 hover:text-blue-800 transition font-semibold transform hover:scale-105 text-center">View Codebase</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}