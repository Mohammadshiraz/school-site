import React from "react";
// Assuming you have Tailwind CSS set up through PostCSS

function Academics() {
  return (
    <div className="academics text-center text-[15px] text-[#212Ea0] font-semibold uppercase mt-[70px] mx-0 mb-[30px]">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="">Academics</h1>

        {/* Curriculum Section */}
        <section className="mb-8 ">
          <h2 className="text-[32px] text-[#000F38] mt-[5px] normal-case  text-center text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl sm:leading-10    mb-4">
            Curriculum
          </h2>
          <div className="grid container1  grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Primary Curriculum */}
            <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-slate-100">
              <h3 className="text-lg font-bold text-purple-500 mb-4">
                Primary (Grades 1-5)
              </h3>
              <ul className=" text-slate-700 list-inside">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>

            {/* Secondary Curriculum */}
            <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-slate-100">
              <h3 className="text-lg text-purple-500 font-semibold  mb-4">
                Secondary (Grades 6-10)
              </h3>
              <ul className=" text-slate-700 list-inside">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>

            {/* Senior Secondary Curriculum science*/}
            <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-slate-100">
              <h3 className="text-lg text-purple-500 font-semibold mb-4">
                Senior Secondary
              </h3>
              <p className="mb-4">Science Stream:</p>
              <ul className=" text-slate-700 list-inside">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
            </div>
            {/* Senior Secondary Curriculum-commerce */}
            <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-slate-100">
              <h3 className="text-lg text-purple-500 font-semibold  mb-4">
                Senior Secondary
              </h3>

              <p className="mt-4 mb-4">Commerce Stream:</p>
              <ul className=" text-slate-700 list-inside">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Teaching Methodologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Teaching Methodologies
          </h2>
          <p className="text-gray-800">
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
        </section>

        {/* Educational Resources */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Educational Resources
          </h2>
          <p className="text-gray-800">
            Digital classrooms, interactive learning modules, and access to
            online educational platforms.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Academics;
