import React from 'react';
import ThreeModel from '../components/ThreeModel'; // Adjust path as needed

const About = () => {
  return (
    <section id="about" className="min-h-screen text-white px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: 3D Model */}
        <div className="w-full md:w-1/2 lg:w-1/4">
          <ThreeModel />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:flex-1 flex flex-col space-y-4">
          <h2 className="text-4xl font-bold text-center md:text-left">About Me</h2>

          <p className="text-base md:text-lg text-justify">
            I'm a Full-Stack Developer skilled in React, Node.js, Express, and MongoDB, with experience building scalable web apps and REST APIs. I’ve worked on real-world projects using FastAPI, TypeScript, and Bootstrap. I’ve solved 350+ DSA problems on LeetCode and GFG, and participated in national hackathons. With a strong foundation in both frontend and backend, I focus on clean UI/UX and efficient backend logic.
          </p>

          <p className="text-base md:text-lg text-justify">
            Currently, I'm enhancing my skills through hands-on internships and collaborative open-source projects. I'm passionate about creating innovative solutions and am always eager to learn and grow as a developer. My problem-solving mindset, honed through hackathons and a commitment to elegant solutions, drives me to create high-performance, user-centric applications.
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Top 5 finalist in HackHive 2024 with a real-time web solution.</li>
              <li>2nd Runner-up, WWF Hackathon 2024</li>
              <li>Solved 350+ DSA problems on LeetCode and GeeksforGeeks.</li>
              <li>Successfully led development of a travel web app with live data integrations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
