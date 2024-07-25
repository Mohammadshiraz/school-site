import React from "react";
// Assuming Tailwind CSS is set up

function Student() {
  return (
    <div className=" students text-[15px] text-[#212Ea0] font-semibold uppercase mt-[70px] mx-0 mb-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className=" text-center">Students</h1>

        {/* Life at Springdale */}
        <section className="mb-8">
          <div className=" text-[32px] text-[#000F38] mt-[5px] normal-case  text-center text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl sm:leading-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Life at Springdale
            </h2>
            <ul className=" mx-[auto] my-[10px] w-[90%]  items-center justify-between grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg">
                <div className="flex-1 flex flex-col p-8 hover:bg-slate-100 cursor-pointer">
                  <h4 className="text-xl font-semibold text-purple-500 ">
                    Extracurricular Activities
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                    Music, Dance, Drama, Art, Sports, Robotics, Debate Club,
                    Science Club, etc.
                  </p>
                </div>
              </li>
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg">
                <div className="flex-1 flex flex-col p-8 hover:bg-slate-100 cursor-pointer">
                  <h4 className="text-xl font-semibold text-purple-500">
                    Clubs and Societies
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                    Literary Society, Environmental Club, Astronomy Club, Coding
                    Club
                  </p>
                </div>
              </li>
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg">
                <div className="flex-1 flex flex-col p-8 hover:bg-slate-100 cursor-pointer">
                  <h4 className="text-xl font-semibold text-purple-500">
                    Achievements
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                    John Smith - National Level Math Olympiad Winner
                  </p>
                  <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                    Sarah Lee - Gold Medalist in State Swimming Championship
                  </p>
                  <p className="mt-2 text-base leading-6 text-gray-600 flex-1">
                    Tech Innovators Club - Winners of Inter-School Robotics
                    Competition
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Achievements */}

        {/* Student Council */}

        <section className="mb-8">
          <div className=" text-[32px] text-[#000F38] mt-[5px] normal-case  text-center text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl sm:leading-10">
            <h2 className="text-2xl  font-semibold text-gray-700 mb-4">
              Student Council
            </h2>
            <div className="  mx-[auto] my-[10px] w-[90%]  items-center justify-between   md:grid-cols-1 lg:grid-cols-2 gap-8 grid grid-cols-1 sm:grid-cols-2 ">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-500 mb-2">
                  President
                </h3>
                <p className="text-[20px] text-gray-700">
                  Amy Parker, Grade 12
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-500 mb-2">
                  Vice President
                </h3>
                <p className="text-[20px] text-gray-700">
                  Rajiv Mehta, Grade 11
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-500 mb-2">
                  Secretary
                </h3>
                <p className="text-[20px] text-gray-700">Lisa Wong, Grade 10</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Student;
