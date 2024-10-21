import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Gen-AI Projects at Saayam",
      description: "Working on AI user-friendly applications that create help requests for websites using Machine Learning techniques.",
    },
    {
      title: "Data Analysis Project",
      description: "Completed Cisco Data Analysis certification, demonstrating proficiency in data analysis techniques and tools.",
    },
    {
      title: "Data Visualization Project",
      description: "Participated in Tata Forage Data Visualization program, enhancing skills in presenting complex data in visually appealing formats.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 animate-fadeIn">Kumudini Gandesiri</h1>
          <p className="text-xl animate-slideIn">Backend Developer | Data Engineer | Information Security Specialist</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            I'm a passionate backend developer with expertise in Python, Flask, Django, and database management. 
            My interests span across Data Engineering, Data Analysis, and Information Security. 
            I'm dedicated to creating efficient data pipelines, implementing robust security measures, and delivering insightful data visualizations.
          </p>
        </section>

        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Python (Flask, Django)</li>
            <li>Database Management (MySQL, SQLite)</li>
            <li>Cloud Security & Access Management</li>
            <li>Data Engineering & Pipeline Creation</li>
            <li>CI/CD (Kubernetes, Jenkins)</li>
            <li>Data Visualization (Tableau, PowerBI)</li>
            <li>SQL Queries</li>
            <li>Streamlit</li>
          </ul>
        </section>

        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold mb-4">Professional Experience</h2>
          <ul className="space-y-4">
            <li className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold">QA Engineer</h3>
              <p className="text-gray-700">Ensured software quality through comprehensive testing methodologies.</p>
            </li>
            <li className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold">Embedded Software Engineer Intern</h3>
              <p className="text-gray-700">Gained hands-on experience in embedded systems development.</p>
            </li>
            <li className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold">Employee at Saayam (Non-Profit Organization)</h3>
              <p className="text-gray-700">Working on Gen-AI projects, focusing on creating AI user-friendly applications.</p>
            </li>
          </ul>
        </section>

        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="p-4 cursor-pointer flex justify-between items-center"
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {expandedProject === index ? <ChevronUp /> : <ChevronDown />}
                </div>
                {expandedProject === index && (
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-wrap gap-6">
              <a href="https://github.com/KumudiniGandesiri" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center">
                <Github size={24} className="mr-2" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/kumudinig" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center">
                <Linkedin size={24} className="mr-2" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:kumudinigandhesiri@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center">
                <Mail size={24} className="mr-2" />
                <span>kumudinigandhesiri@gmail.com</span>
              </a>
              <a href="tel:+19253151110" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center">
                <Phone size={24} className="mr-2" />
                <span>+1 (925) 315-1110</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold mb-4">Additional Information</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Cisco Data Analysis Certification</li>
              <li>Tata Forage Data Visualization Program</li>
              <li>Interested in Data Engineer, Data Analyst, and Information Security Roles</li>
              <li>GitHub: <a href="https://github.com/KumudiniGandesiri" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/KumudiniGandesiri</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/kumudinig" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.linkedin.com/in/kumudinig</a></li>
              <li>Email: kumudinigandhesiri@gmail.com</li>
              <li>Contact: +1 (925) 315-1110</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Kumudini Gandesiri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;