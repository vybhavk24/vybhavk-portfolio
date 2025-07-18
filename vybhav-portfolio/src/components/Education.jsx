export default function Education() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2">
        <span role="img" aria-label="Education">🎓</span> Educational Background
      </h2>
      <ul className="list-disc pl-6 text-base md:text-lg">
        <li>B.E. in Electronics and Communication Engineering</li>
        <li>Full Stack Development Certification</li>
      </ul>
    </section>
  );
}