import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, Code, Award, UserCircle, MapPin, Phone, Mail as MailIcon } from 'lucide-react'; // Added more icons

function App() {
  // --- Personal Data ---
  const name = "Pavan Kalyan Vaddadhi";
  const title = "Aspiring Software Developer";
  const email = "pavankalyan111101@gmail.com";
  const phone = "+91 8825677633";
  const location = "Vijayawada, Andhra Pradesh, India";
  const githubUsername = "pavankalyanvaddadhi";
  const linkedinUsername = "pavan-kalyan-vaddadhi-496489248"; // Corrected: Removed trailing slash
  const ecommerceGithubRepo = "https://github.com/pavankalyanvaddadhi/MyntraClone.git";
  const githubUrl = `https://github.com/${githubUsername}`;
  const linkedinUrl = `https://www.linkedin.com/in/${linkedinUsername}/`;
  const ecommerceLiveUrl = "https://myntra-clone-tau-navy.vercel.app/";

  const objective = "Aspiring software developer passionate about creating responsive applications and solving technical challenges. Eager to contribute to innovative projects and collaborate within a dynamic team.";

  // --- Data Arrays ---
  const experiences = [
    {
      role: "Pega Developer Intern",
      company: "Talentsprint (Pega systems)",
      date: "Aug 2023 – Jan 2024",
      location: "Vijayawada",
      points: [
        "Designed a Pega-based workflow management system, improving efficiency and reducing errors by 30%.",
        "Collaborated with developers and designers to integrate new features, enhancing functionality.",
        "Conducted user acceptance testing (UAT) to ensure the application met business requirements and user expectations.",
      ],
    },
    {
      role: "Frontend Developer Trainee",
      company: "Training Program", // Clarified name
      date: "Oct 2024 – Feb 2025", // Note: Verify dates if they span future/past
      location: "Remote",
      points: [
        "Developed responsive web applications using HTML, CSS, JavaScript and React.",
        "Collaborated with senior developers to implement UI components and improve user experience.",
        "Assisted in debugging and troubleshooting issues, ensuring timely resolution and optimal performance of applications.",
      ],
    },
  ];

  const projects = [
    {
      title: "E-Myntra",
      subtitle: "Frontend Web Application",
      description: "Created a functional e-commerce clone using React and Redux, integrating a fake store API for dynamic product display. Implemented state management for shopping cart functionality and integrated Razorpay for payment processing. Ensured a responsive and user-friendly interface.",
      github: ecommerceGithubRepo,
      live: ecommerceLiveUrl,
      tags: ["React", "Redux", "JavaScript", "API Integration", "Razorpay", "CSS"],
    },
    {
      title: "Guess The Number ",
      subtitle: "Frontend Web Application",
      description: "A simple game where user has to guess the number between 1 to 20. It uses HTML, CSS and Javascript to build the game.",
      github: "https://github.com/pavankalyanvaddadhi/GuessTheNumber.git",
      live: "https://guess-the-number-git-main-pavankalyanvaddadhis-projects.vercel.app/",
      tags: ["Java Script", "Css", "Html"],
    }
    
  ];

  const education = [
     {
      institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
      degree: "B.Tech in Electronics and Communication Engineering",
      years: "2020 - 2024",
      score: "CGPA: 7.4",
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate (MPC)",
      years: "2018 - 2020",
      score: "Score: 9.59 / 10", // Clarified score format
    },
     {
      institution: "Sri Chaitanya High School",
      degree: "SSC (Board)",
      years: "2016 - 2018", // Adjust if single year
      score: "Score: 9.7 / 10", // Clarified score format
    },
  ];

 const skills = {
    languages: ["Python", "Java", "JavaScript", "HTML5", "CSS3"],
    webTechnologies: ["React.js", "Redux", "Bootstrap", "Material-UI"], // Added Redux, Tailwind
    databases: ["MySQL"],
    toolsAndPlatforms: ["Pega BPM (v8.8)", "Git", "GitHub", "VS Code", "JIRA", "AI Tools"], // Added Git, JIRA
  };

  const certifications = [
    "Certified Senior System Architect (CSSA) - PEGASystems",
     "Object oriented programming in java - Coursera",
    "Programming Essentials in Python - CISCO",
    "Cloud Computing - NPTEL",
   
  ];

  // --- Helper Component for Section Headers ---
  const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
    <div className="flex items-center mb-8">
      <Icon className="w-7 h-7 mr-3 text-indigo-600" />
      <h2 className="text-3xl font-bold text-gray-800 tracking-tight">{title}</h2>
    </div>
  );

  // --- Helper Component for Skill Badges ---
   const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
      {skill}
    </span>
  );


  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* --- Header --- */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Left: Name/Title (Optional) */}
             <div className="text-xl font-semibold text-gray-800">{name}</div>

            {/* Right: Social Links */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out p-2 rounded-full hover:bg-gray-100" aria-label="GitHub Profile">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out p-2 rounded-full hover:bg-gray-100" aria-label="LinkedIn Profile">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href={`mailto:${email}`} className="text-gray-500 hover:text-red-600 transition duration-150 ease-in-out p-2 rounded-full hover:bg-gray-100" aria-label="Send Email">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Content Area --- */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* --- Hero Section --- */}
        <section className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-3">{name}</h1>
            <p className="text-xl sm:text-2xl text-indigo-600 font-medium mb-6">{title}</p>
             <div className="flex justify-center items-center space-x-6 text-sm text-gray-600 mb-8 flex-wrap gap-y-2">
                 <span className="flex items-center"><MailIcon className="w-4 h-4 mr-1.5"/> {email}</span>
                 <span className="flex items-center"><Phone className="w-4 h-4 mr-1.5"/> {phone}</span>
                 <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5"/> {location}</span>
            </div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
             {objective}
            </p>
        </section>


        {/* --- Experience Section --- */}
        <section className="mb-16 md:mb-20">
          <SectionHeader icon={Briefcase} title="Experience" />
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:shadow-lg flex flex-col sm:flex-row gap-6">
                {/* Date/Location Column (Optional Left Align) */}
                 <div className="flex-shrink-0 sm:w-40 text-left sm:text-right">
                    <p className="text-sm font-semibold text-indigo-600">{exp.date}</p>
                    <p className="text-xs text-gray-500">{exp.location}</p>
                </div>
                {/* Details Column */}
                <div className="flex-grow border-t pt-4 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-6 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.role}</h3>
                  <p className="text-md font-medium text-gray-600 mb-3">{exp.company}</p>
                  <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                    {exp.points.map((point, pIndex) => (
                      <li key={pIndex} className="marker:text-indigo-400">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section className="mb-16 md:mb-20">
           <SectionHeader icon={Code} title="Projects" />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-lg">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{proj.title}</h3>
                  <p className="text-sm text-indigo-600 font-medium mb-3">{proj.subtitle}</p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                  {/* Project Tags */}
                  <div className="mb-4">
                    {proj.tags?.map((tag, tIndex) => (
                       <span key={tIndex} className="inline-block bg-gray-100 text-gray-700 text-xs font-medium mr-2 mb-1 px-2.5 py-0.5 rounded">
                          {tag}
                       </span>
                    ))}
                  </div>
                </div>
                {/* Links */}
                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-100">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 flex items-center text-sm font-medium transition duration-150 ease-in-out">
                      <Github className="w-4 h-4 mr-1.5" />
                      View Code
                    </a>
                  )}
                  {proj.live && proj.live !== "#" && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 flex items-center text-sm font-medium transition duration-150 ease-in-out">
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

         {/* --- Education Section --- */}
        <section className="mb-16 md:mb-20">
          <SectionHeader icon={GraduationCap} title="Education" />
          <div className="space-y-6">
            {education.map((edu, index) => (
                 <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                           <h3 className="font-semibold text-lg text-gray-800">{edu.institution}</h3>
                           <p className="text-indigo-600 text-sm font-medium">{edu.degree}</p>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 sm:mt-0 text-left sm:text-right">
                           <p>{edu.years}</p>
                           <p className="font-medium text-gray-600">{edu.score}</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section className="mb-16 md:mb-20">
           <SectionHeader icon={Code} title="Technical Skills" />
          <div className="bg-white p-6 rounded-xl shadow-md">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                    <h3 className="font-semibold text-gray-700 mb-3 text-md border-b pb-1 border-gray-200">
                    {/* Convert camelCase to Title Case */}
                    {category.replace(/([A-Z])/g, ' $1').replace(/And/g, '&').replace(/^./, str => str.toUpperCase())}
                    </h3>
                    <div>
                    {skillList.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} />
                    ))}
                    </div>
                </div>
                ))}
            </div>
          </div>
        </section>

        {/* --- Certifications Section --- */}
        <section className="mb-16 md:mb-20">
          <SectionHeader icon={Award} title="Certifications" />
           <div className="bg-white p-6 rounded-xl shadow-md">
                <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                           <Award className="w-4 h-4 mr-3 text-indigo-500 flex-shrink-0"/>
                           <span>{cert}</span>
                        </li>
                    ))}
                </ul>
           </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-800 text-gray-400 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
           <div className="mb-4 flex justify-center space-x-6">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-150 ease-in-out" aria-label="GitHub Profile">
                <Github className="w-6 h-6" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-150 ease-in-out" aria-label="LinkedIn Profile">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${email}`} className="hover:text-red-400 transition duration-150 ease-in-out" aria-label="Send Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          <p className="text-sm">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-xs mt-1">Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;