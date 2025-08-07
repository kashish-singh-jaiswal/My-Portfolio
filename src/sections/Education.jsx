
import React from 'react';
import { FaGraduationCap, FaBook } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-8 lg:px-16 text-white">
      <h2 className="text-center text-4xl font-bold mb-12">Education</h2>

      <div className="space-y-10 max-w-4xl mx-auto">
        {/* B.Tech */}
        <div className="bg-[#1e1e2f] p-6 rounded-xl border shadow-md">
          <div className="flex items-center gap-2 text-lg font-semibold mb-2">
            <FaGraduationCap className="text-xl" />
            B.Tech in Computer Science
          </div>
          <p className="text-lg font-semibold">
            University Institute of Technology, Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
          </p>
          <p className="text-sm">November 2022 – July 2026 (Expected)</p>
          <p className="mt-3"><span className="font-semibold">CGPA:</span> 7.0</p>
          <p className="mt-2 text-sm">Relevant Coursework:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Data Structures", "Algorithms", "Databases", "Web Development"].map((course) => (
              <span key={course} className="border px-3 py-1 rounded-full text-sm font-medium">
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* 12th Grade */}
        <div className="bg-[#1e1e2f] p-6 rounded-xl border shadow-md">
          <div className="flex items-center gap-2 text-lg font-semibold mb-2">
            <FaBook className="text-xl" />
            12th Grade (Senior Secondary)
          </div>
          <p className="text-lg font-semibold">Ideal Higher Secondary School</p>
          <p className="text-sm">Year of Completion: 2022</p>
          <p className="mt-3"><span className="font-semibold">Percentage:</span> 82%</p>
        </div>

        {/* 10th Grade */}
        <div className="bg-[#1e1e2f] p-6 rounded-xl border shadow-md">
          <div className="flex items-center gap-2 text-lg font-semibold mb-2">
            <FaBook className="text-xl" />
            10th Grade (High School)
          </div>
          <p className="text-lg font-semibold">Ideal Higher Secondary School</p>
          <p className="text-sm">Year of Completion: 2020</p>
          <p className="mt-3"><span className="font-semibold">Percentage:</span> 88%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
