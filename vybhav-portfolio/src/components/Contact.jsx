export default function Contact() {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B]">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
        <span role="img" aria-label="Contact">📞</span> Contact
      </h2>
      <ul className="mb-2">
        <li>
          <strong>Email:</strong> <a href="mailto:vybhavkvviet@gmail.com" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">vybhavkvviet@gmail.com</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href="tel:+917349402665" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">+91 7349402665</a>
        </li>
      </ul>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a href="https://github.com/vybhavk24" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-4 py-2 rounded bg-gray-100 border border-gray-300 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-800 transition transform hover:scale-105 text-center text-base md:text-base">GitHub</a>
        <a href="https://www.linkedin.com/in/vybhav-k-0b02891b9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-4 py-2 rounded bg-gray-100 border border-gray-300 text-blue-700 font-semibold hover:bg-blue-100 hover:text-blue-800 transition transform hover:scale-105 text-center text-base md:text-base">LinkedIn</a>
      </div>
    </section>
  );
}