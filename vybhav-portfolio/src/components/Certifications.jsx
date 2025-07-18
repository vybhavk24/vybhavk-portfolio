export default function Certifications() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-4">
        <span role="img" aria-label="Certifications">📜</span> Certifications
      </h2>
      <h3 className="text-base md:text-lg font-semibold mb-2 mt-4 flex items-center gap-2">
        <span role="img" aria-label="Completed">✅</span> Completed
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-4">
          <div>
            <a href="#" className="font-semibold text-base md:text-lg text-blue-700 hover:underline">IBM Data Analyst Professional Certificate</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-emerald-100 hover:text-emerald-800 transition font-semibold transform hover:scale-105 text-center">Github Repo</a>
            <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-indigo-100 hover:text-indigo-800 transition font-semibold transform hover:scale-105 text-center">View Certificate</a>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <a href="#" className="font-semibold text-base md:text-lg text-blue-700 hover:underline">Mathematics for ML by DeepLearning.AI</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-emerald-100 hover:text-emerald-800 transition font-semibold transform hover:scale-105 text-center">Github Repo</a>
            <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-indigo-100 hover:text-indigo-800 transition font-semibold transform hover:scale-105 text-center">View Certificate</a>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <a href="#" className="font-semibold text-base md:text-lg text-blue-700 hover:underline">Stanford's Machine Learning Professional Certificate</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-emerald-100 hover:text-emerald-800 transition font-semibold transform hover:scale-105 text-center">Github Repo</a>
            <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-indigo-100 hover:text-indigo-800 transition font-semibold transform hover:scale-105 text-center">View Certificate</a>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <a href="#" className="font-semibold text-base md:text-lg text-blue-700 hover:underline">Learn SQL Basics for Data Science Specialization</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-emerald-100 hover:text-emerald-800 transition font-semibold transform hover:scale-105 text-center">Github Repo</a>
            <a href="#" className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50 hover:bg-indigo-100 hover:text-indigo-800 transition font-semibold transform hover:scale-105 text-center">View Certificate</a>
          </div>
        </li>
      </ul>
      <h3 className="text-base md:text-lg font-semibold mb-2 mt-4 flex items-center gap-2">
        <span role="img" aria-label="Pursuing">⏳</span> Currently Pursuing
      </h3>
      <ul className="list-disc pl-6 text-base md:text-lg">
        <li>Google's Advanced Data Analytics Professional Certificate</li>
        <li>Microsoft's Power BI for data analysis</li>
      </ul>
    </section>
  );
}