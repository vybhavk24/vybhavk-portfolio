export default function Experience() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2">
        <span role="img" aria-label="Work">💼</span> Work Experience
      </h2>
      <div className="flex flex-col gap-6 text-base md:text-lg">
        <div>
          <div className="font-semibold">Tech Mahindra | Associate Software Engineer (2024 – Present)</div>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Developed and maintained the questionnaire module of EY Mobility Pathway, a global mobility management platform.</li>
            <li>Collaborated with cross-functional teams to implement features and resolve frontend issues.</li>
            <li>Recognized with Bravo and Pat-on-the-Back (POB) awards for impactful contributions.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Learnbay | Full Stack Software Development Certification (2024)</div>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Completed hands-on full stack program, building practical experience in frontend and backend development.</li>
            <li>Collaborated with industry experts to deliver small-scale projects.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}