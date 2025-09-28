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
        <section className="flex flex-col items-center justify-center pt-2 pb-10">
          <img
            src="/assets/profile_pic.jpg"
            alt="Vybhav K"
            className="rounded-full shadow-lg mt-2 mb-2 object-cover w-32 h-32 border-4 border-[#60A5FA]"
            width={128}
            height={128}
          />
          <h1 className="text-3xl md:text-4xl font-extrabold mb-1 mt-2">Vybhav K</h1>
          <div className="text-base md:text-lg font-semibold text-gray-500 mb-2 text-center">Aspiring Data Scientist | Associate Software Engineer</div>
          <a href="/assets/Resume.pdf" download className="mt-2 mb-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm font-semibold shadow-md transform hover:scale-105 hover:shadow-lg inline-block">Download Resume</a>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Aspiring Data Scientist with a strong foundation in Electronics & Communication Engineering and Full Stack Development. Passionate about data, machine learning, and building impactful solutions.
          </p>
        </section>
        {/* Inline Contact Bar */}
        <section className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-4 md:p-5 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm md:text-base">
            <div className="font-semibold flex items-center gap-2 text-[#22223B]"><span role="img" aria-label="Contact">📞</span> Contact</div>
            <div className="flex flex-col md:flex-row md:items-center gap-3 text-gray-700">
              <a href="mailto:vybhavkvviet@gmail.com" className="text-blue-600 hover:underline">vybhavkvviet@gmail.com</a>
              <span className="hidden md:inline text-gray-300">|</span>
              <a href="tel:+917349402665" className="text-blue-600 hover:underline">+91 7349402665</a>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/vybhavk24" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-gray-100 border border-gray-300 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-800 transition">GitHub</a>
              <a href="https://www.linkedin.com/in/vybhav-k-0b02891b9" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-gray-100 border border-gray-300 text-blue-700 font-semibold hover:bg-blue-100 hover:text-blue-800 transition">LinkedIn</a>
            </div>
          </div>
        </section>
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 mb-10">
          <About />
          <Education />
          <Experience />
          <Certifications />
        </div>
        {/* Skills then Projects (both full-width sections) */}
        <Skills />
        <Projects 
          projects={[
            { name: 'EDA with Titanic Dataset', description: 'Explored the Titanic dataset to uncover insights through data cleaning, visualization, and statistical analysis.', codebaseUrl: 'https://github.com/vybhavk24/data_projects/tree/main/1_EDA_with_Titanic_dataset' },
            { name: 'SQL Database Management for a Fictional Company', description: 'Designed and managed a relational database with optimized queries, joins, and reporting for business operations.', codebaseUrl: 'https://github.com/vybhavk24/data_projects/tree/main/2_SQL_Database_management_for_a_sales_company' },
            { name: 'House Price Prediction', description: 'Built a regression model to predict house prices using key features such as location, size, and amenities.', codebaseUrl: 'https://github.com/vybhavk24/data_projects/tree/main/3_House_price_prediction' },
            { name: 'Time Series Forecasting', description: 'Developed forecasting models to analyze and predict future trends from sequential data.', codebaseUrl: 'https://github.com/vybhavk24/data_projects/tree/main/4_Time_series_forcasting' },
            { name: 'Customer Segmentation using K-Means Clustering', description: 'Applied clustering techniques to group customers based on purchasing behavior and demographics.', codebaseUrl: 'https://github.com/vybhavk24/data_projects/tree/main/5_Customer_segmentation_using_K-means_clustering' },
            { name: 'Movie Recommender System', description: 'Created a recommendation engine to suggest movies using collaborative and content-based filtering.', codebaseUrl: 'https://github.com/vybhavk24/data_projects/tree/main/6_Movie_Recommendor_System' },
            { name: 'Image Classification using CNN', description: 'Trained a Convolutional Neural Network to accurately classify images across different categories.', codebaseUrl: 'https://github.com/vybhavk24/data_projects/tree/main/7_Image_classification_with_CNNs' },
            { name: 'Customer Churn Prediction', description: 'Built a machine learning model to predict customer churn and identify factors influencing retention.', codebaseUrl: 'https://github.com/vybhavk24/data_projects/tree/main/8_Predicting_customer_churn' },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}