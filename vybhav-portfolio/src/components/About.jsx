export default function About() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 flex flex-col gap-2 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2">
        <span role="img" aria-label="About">👋</span> About Me
      </h2>
      <p className="text-base md:text-lg">
        I am an aspiring data scientist with a background in ECE. I am passionate about data, machine learning, and problem solving. I thrive in collaborative environments and am always eager to learn and grow.
      </p>
    </section>
  );
}