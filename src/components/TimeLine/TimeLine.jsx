import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiPhp, SiLaravel, SiMysql } from 'react-icons/si';

const timelineData = [
  {
    date: 'Feb 2025 - Jun 2025',
    title: 'Junior Web Alchemist Intern',
    subtitle: 'D IT Solutions Pvt. Ltd.',
    description: 'Developed and maintained web applications, collaborated with teams, and optimized user interfaces.',
    icons: [<SiPhp color='#8892bf' size={'25px'} />, <SiLaravel color='#ff2020' size={'25px'} />, <SiMysql color='lightblue' size={'25px'} />],
  },
  {
    date: 'Jul 2025 - Present',
    title: 'Junior Full Stack Engineer',
    subtitle: 'D IT Solutions Pvt. Ltd.',
    description: 'Designed and implemented full-stack solutions, integrated APIs, and ensured responsive design across platforms.',
    icons: [<SiPhp color='#8892bf' size={'25px'} />, <SiLaravel color='#ff2020' size={'25px'} />, <SiMysql color='lightblue' size={'25px'} />],
  },
];

function Timeline() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl flex justify-start mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center pointer-events-auto relative  text-indigo-300 hover:text-indigo-400 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-indigo-300">
        Experience Timeline
      </h1>
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500"></div>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <h4 className="text-base text-gray-300 mb-3">{item.subtitle}</h4>
                {item.icons && (
                  <div className={`flex flex-wrap mb-3 ${index%2==0?'justify-end':'justify-start'}  space-x-4`}>
                    {item.icons.map((icon, i) => (
                      <div key={i}>{icon}</div>
                    ))}
                  </div>
                )}
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
            <div className="w-2/12 flex justify-center">
              <div className="w-6 h-6 bg-indigo-500 rounded-full z-10 flex items-center justify-center text-white text-xs">
                {index + 1}
              </div>
            </div>
            <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
              <p className={`text-sm text-gray-300 font-medium ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;