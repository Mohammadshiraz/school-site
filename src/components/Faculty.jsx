import React from "react";
// Assuming Tailwind CSS is set up

function Faculty() {
  // Faculty data array
  const faculty = [
    {
      name: "John Doe",
      position: "Principal",
      qualifications: "M.Ed",
      experience: "20 years of experience in educational administration",
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualifications: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualifications: "M.A. in English",
      experience: "10 years of teaching experience",
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualifications: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualifications: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualifications: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
    },
  ];

  return (
    <div className=" faculty text-center text-[15px] text-[#212Ea0] font-semibold uppercase mt-[70px] mx-0 mb-[30px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="">Faculty Profiles</h1>

        {/* Faculty Profiles */}
        <section className="container1 mt-10">
          <div className="    sm:grid-cols-2  grid grid-cols-1  gap-4 ">
            {faculty.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-slate-100"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {person.name}
                </h2>
                <p className="text-gray-700 mb-2">{person.position}</p>
                <p className="text-gray-700 mb-2">{person.qualifications}</p>
                <p className="text-gray-700">{person.experience}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faculty;
