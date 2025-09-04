export default function Skills() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-8 flex flex-col gap-6">
      <div className="flex justify-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2 md:mb-0">
          <span role="img" aria-label="Skills">💻</span> Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-base md:text-lg">
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Programming Languages</div>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <span className="px-2 py-1 rounded bg-gray-50 border">Python</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">SQL</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Java</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Frameworks / Libraries</div>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <span className="px-2 py-1 rounded bg-gray-50 border">Scikit-learn</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">TensorFlow</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Keras</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Pandas</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">NumPy</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Matplotlib</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Seaborn</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Flask</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Django</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Tools / Platforms</div>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <span className="px-2 py-1 rounded bg-gray-50 border">Jupyter Notebook</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Git</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Linux</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">AWS</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Azure</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Data Science Skills</div>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <span className="px-2 py-1 rounded bg-gray-50 border">Data Cleaning</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Data Analysis</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Data Visualization</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Machine Learning</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Deep Learning</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">SQL Database Management</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <div className="font-semibold">Soft Skills</div>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <span className="px-2 py-1 rounded bg-gray-50 border">Leadership</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Time Management</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Analytical Thinking</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Problem Solving</span>
            <span className="px-2 py-1 rounded bg-gray-50 border">Creative Writing</span>
          </div>
        </div>
      </div>
    </section>
  );
}