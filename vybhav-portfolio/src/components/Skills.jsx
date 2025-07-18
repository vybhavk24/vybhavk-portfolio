export default function Skills() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-8 flex flex-col gap-6">
      <div className="flex justify-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2 md:mb-0">
          <span role="img" aria-label="Skills">💻</span> Skills
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Software Skills (Left) */}
        <div className="flex-1 flex flex-col gap-3 text-base md:text-lg">
          <div className="flex items-center gap-2"><span role="img" aria-label="React">⚛️</span> React</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="TypeScript">🟦</span> TypeScript</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="HTML">🌐</span> HTML, <span role="img" aria-label="CSS">🎨</span> CSS</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="Java">☕</span> Java</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="Git">🐙</span> Git</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="Azure DevOps">☁️</span> Azure DevOps</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="SQL">🗄️</span> SQL, <span role="img" aria-label="DBMS">🗃️</span> DBMS</div>
        </div>
        {/* Data Skills (Right) */}
        <div className="flex-1 flex flex-col gap-3 text-base md:text-lg">
          <div className="flex items-center gap-2"><span role="img" aria-label="Python">🐍</span> Python</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="Data Analytics">📊</span> Data Analytics</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="Mathematics for ML">📐</span> Mathematics for ML</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="Deep Learning">🤖</span> Deep Learning</div>
          <div className="flex items-center gap-2"><span role="img" aria-label="NLP">🗣️</span> NLP</div>
        </div>
      </div>
    </section>
  );
}