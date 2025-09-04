export default function About() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 flex flex-col gap-2 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2">
        <span role="img" aria-label="About">👋</span> About Me
      </h2>
      <p className="text-base md:text-lg">
        I am Vybhav K, a passionate data enthusiast with a strong foundation in Electronics and Communication Engineering. My curiosity for mathematics and logic naturally led me to explore data-driven technologies, machine learning, and AI. I enjoy solving real-world problems by uncovering patterns in data and building predictive models.
      </p>
      <p className="text-base md:text-lg">
        Beyond tech, I am a Vipassana practitioner, poet, and swing trader — a mix that reflects analytical thinking, creativity, and a disciplined mindset.
      </p>
    </section>
  );
}