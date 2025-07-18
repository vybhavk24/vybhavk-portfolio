import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

export default function App() {
  return (
    <div className="font-sans text-[#22223B] min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center pt-4 pb-10">
          <img
            src="/src/assets/profile_pic.jpg"
            alt="Vybhav K"
            className="rounded-full shadow-lg mt-4 mb-2 object-cover w-32 h-32 border-4 border-[#60A5FA]"
            width={128}
            height={128}
          />
          <h1 className="text-3xl md:text-4xl font-extrabold mb-1 mt-2">Vybhav K</h1>
          <div className="text-base md:text-lg font-semibold text-gray-500 mb-2 text-center">Aspiring Data Scientist | Associate Software Engineer</div>
          <a href="/resume.pdf" download className="mt-2 mb-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm font-semibold shadow-md transform hover:scale-105 hover:shadow-lg inline-block">Download Resume</a>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Aspiring Data Scientist with a strong foundation in Electronics & Communication Engineering and Full Stack Development. Passionate about data, machine learning, and building impactful solutions.
          </p>
        </section>
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mb-10">
          <About />
          <Contact />
          <Education />
          <Experience />
          <Certifications />
          <Projects 
            projects={[
              { name: 'Project 1', description: 'A web app for visualizing data trends.' },
              { name: 'Project 2', description: 'A machine learning model for classification.' },
              { name: 'Project 3', description: 'A portfolio website built with React and Tailwind.' },
            ]}
          />
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
}