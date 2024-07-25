import React from "react";
// Assuming Tailwind CSS is set up

function Admission() {
  return (
    <div className="admission text-center        text-[15px] text-[#212Ea0] font-semibold uppercase mt-[70px] mx-0 mb-[30px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className=" text-center">Admissions</h1>

        {/* Admission Process */}
        <section className="mb-8 container1 mt-10">
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white  shadow-md rounded-lg p-6">
              <h2 className="text-[32px] text-[#000F38] mt-[5px] normal-case   text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl sm:leading-10    mb-4">
                Admission Criteria
              </h2>
              <p className="text-gray-800">
                Admission is based on merit and availability of seats. Entrance
                tests may be conducted for certain grades.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-[32px] text-[#000F38] mt-[5px] normal-case   text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl sm:leading-10    mb-4">
                Admission Process
              </h2>
              <p className="text-gray-800">
                Admission forms are available for download. Submit the completed
                form along with required documents at the school office.
              </p>
              <button className="bg-blue-400 mt-5 text-black px-6 py-3 text-6 rounded-3xl cursor-pointer outline-0 border-0 hover:bg-blue-500">
                Download form
              </button>
            </div>
          </div>
        </section>

        {/* Admission Criteria */}

        {/* Important Dates */}
        <section className="container1">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Important Dates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-500 mb-4">
                Admission Form Availability
              </h3>
              <p className="text-gray-800">March 1st</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-500 mb-4">
                Last Date for Submission
              </h3>
              <p className="text-gray-800">March 31st</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-500 mb-4">
                Entrance Test
              </h3>
              <p className="text-gray-800">April 15th</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-500 mb-4">
                Announcement of Results
              </h3>
              <p className="text-gray-800">April 30th</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admission;
