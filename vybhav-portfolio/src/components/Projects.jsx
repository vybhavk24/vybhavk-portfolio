import React from 'react';

export default function Projects({ projects }) {
  const defaultProjects = [
    { name: 'Project 1', description: 'A web app for visualizing data trends.', codebaseUrl: '#' },
    { name: 'Project 2', description: 'A machine learning model for classification.', codebaseUrl: '#' },
    { name: 'Project 3', description: 'A portfolio website built with React and Tailwind.', codebaseUrl: '#' },
  ];
  const projectList = projects || defaultProjects;

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-8 flex flex-col gap-6">
      <div className="flex justify-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2 md:mb-0">
          <span role="img" aria-label="Projects">🚀</span> Projects Built
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-base md:text-lg">
        {projectList.map((project, idx) => (
          <div key={idx} className="flex flex-col gap-2 bg-gray-50 rounded-lg p-4 border border-gray-100 shadow-sm">
            <div className="font-semibold text-base md:text-lg">{project.name}</div>
            <div className="text-sm md:text-base text-gray-600 mb-2">{project.description}</div>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <a href={project.codebaseUrl} className="px-2 py-1 text-xs border border-gray-300 rounded bg-white hover:bg-blue-100 hover:text-blue-800 transition font-semibold transform hover:scale-105 text-center">View Codebase</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}