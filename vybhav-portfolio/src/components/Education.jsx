export default function Education() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] text-[#22223B] mb-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2 mb-2">
        <span role="img" aria-label="Education">🎓</span> Educational Background
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm md:text-base border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="py-2 pr-4">Year</th>
              <th className="py-2 pr-4">Institution</th>
              <th className="py-2 pr-4">Degree / Course</th>
              <th className="py-2">Aggregate</th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr className="border-t">
              <td className="py-3 pr-4 whitespace-nowrap">2023</td>
              <td className="py-3 pr-4">Vidya Vikas Institute of Engineering and Technology</td>
              <td className="py-3 pr-4">Bachelor of Engineering in Electronics and Communication</td>
              <td className="py-3">8.71 CGPA</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 pr-4 whitespace-nowrap">2018</td>
              <td className="py-3 pr-4">Nisarga Independent PU College</td>
              <td className="py-3 pr-4">Pre-University Course (Class XII)</td>
              <td className="py-3">88.6%</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 pr-4 whitespace-nowrap">2016</td>
              <td className="py-3 pr-4">Nisarga Vidyanikethana High School</td>
              <td className="py-3 pr-4">SSLC (Class X)</td>
              <td className="py-3">97%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}