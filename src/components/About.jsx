import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="  text-center text-[15px] text-[#212Ea0] font-semibold uppercase mt-[70px] mx-0 mb-[30px]">
          <div className=" ">About Us</div>

          <h2 className=" text-[32px] text-[#000F38] mt-[5px] normal-case  text-center text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl sm:leading-10">
            Welcome to
          </h2>

          <strong className=" text-[32px]  mt-[5px] normal-case text-3xl  font-extrabold tracking-tight  sm:text-4xl sm:leading-10 text-[#2A5276]">
            Springdale Public School
          </strong>
          <br />
          <p className="text-[20px]  mt-[10px] normal-case  max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
          </p>
        </div>
        <div className="mx-[auto] my-[10px] w-[90%] flex items-center justify-between  ">
          <div className="flex flex-wrap -mx-4 ">
            {/* Vision */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-100 cursor-pointer">
                <h4 className="text-xl leading-7 font-semibold text-gray-900">
                  Vision
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  To create a learning environment that fosters academic
                  excellence, critical thinking, and ethical values.
                </p>
              </div>
            </div>
            {/* Mission */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-100 cursor-pointer">
                <h4 className="text-xl leading-7 font-semibold text-gray-900">
                  Mission
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  To empower students with the knowledge, skills, and values
                  needed to thrive in a dynamic world.
                </p>
              </div>
            </div>
            {/* Principal's Message */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-100 cursor-pointer">
                <h4 className="text-xl leading-7 font-semibold text-gray-900">
                  Principal's Message
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  At Springdale, we believe in nurturing the potential of every
                  student and guiding them towards a successful future.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Infrastructure and Facilities */}
        <div className=" text-[32px] text-[#000F38] mt-[5px] normal-case  text-center text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl sm:leading-10">
          <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
            Infrastructure and Facilities
          </h3>
          <ul className=" mx-[auto] my-[10px] w-[90%]  items-center justify-between grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg">
              <div className="flex-1 flex flex-col p-8 hover:bg-slate-100 cursor-pointer">
                <h4 className="text-xl font-semibold text-gray-900 ">
                  Science and Computer Labs
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                  State-of-the-art facilities for practical learning.
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg">
              <div className="flex-1 flex flex-col p-8 hover:bg-slate-100 cursor-pointer">
                <h4 className="text-xl font-semibold text-gray-900">
                  Classrooms
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                  Spacious and well-equipped learning spaces.
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg">
              <div className="flex-1 flex flex-col p-8 hover:bg-slate-100 cursor-pointer">
                <h4 className="text-xl font-semibold text-gray-900">Library</h4>
                <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                  Vast collection of books and digital resources.
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg">
              <div className="flex-1 flex flex-col p-8 hover:bg-slate-100 cursor-pointer">
                <h4 className="text-xl font-semibold text-gray-900">
                  Sports Facilities
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                  Playground, gymnasium, and swimming pool.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
