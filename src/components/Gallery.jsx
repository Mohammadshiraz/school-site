import React from "react";
// Assuming Tailwind CSS is set up
import sport from "../assets/sports_day.jpg";
import science from "../assets/science_exhibition.jpg";
import cultural from "../assets/cultural.jpg";
import classroom from "../assets/gallery3.jpg";
import library from "../assets/gallery4.jpg";
import tour from "../assets/school_tour.mp4";
import annual_function from "../assets/annual_function.mp4";

function Gallery() {
  return (
    <div className="gallery text-center text-[15px] text-[#212Ea0] font-semibold uppercase mt-[70px] mx-0 mb-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="">Gallery</h1>

        {/* Photos */}
        <section className="">
          <h2 className="text-2xl mt-10 font-semibold  text-gray-700 mb-4">
            Photos
          </h2>
          <div className="mx-[auto]  cursor-pointer  my-[80px] w-[90%]  items-center justify-between text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white relative shadow-md rounded-lg overflow-hidden">
              <img
                src={sport}
                alt="Students participating in various sports events"
                className="w-full  block rounded-xl h-[280px]"
              />
              <div className="p-4 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-[1] bg-[rgba(0,15,152,0.3)] ">
                <p className=" absolute text-white cursor-pointer ">
                  Students participating in various sports events.
                </p>
              </div>
            </div>
            <div className="bg-white relative shadow-md rounded-lg overflow-hidden">
              <img
                src={science}
                alt="Students presenting their science projects"
                className="w-full  block rounded-xl h-[280px]"
              />
              <div className="p-4 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-[1] bg-[rgba(0,15,152,0.3)] ">
                <p className=" absolute text-white cursor-pointer ">
                  Students presenting their science projects.
                </p>
              </div>
            </div>
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={cultural}
                alt="Students performing in the cultural fest"
                className="w-full  block rounded-xl h-[280px]"
              />
              <div className="p-4 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-[1] bg-[rgba(0,15,152,0.3)] ">
                <p className=" absolute text-white cursor-pointer ">
                  Students performing in the cultural fest.
                </p>
              </div>
            </div>
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={classroom}
                alt="A glimpse of our interactive classrooms"
                className="w-full  block rounded-xl h-[280px]"
              />
              <div className="p-4 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-[1] bg-[rgba(0,15,152,0.3)] ">
                <p className=" absolute text-white cursor-pointer ">
                  A glimpse of our interactive classrooms.
                </p>
              </div>
            </div>
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={library}
                alt="Students reading and studying in the school library"
                className="w-full block rounded-xl h-[280px]"
              />
              <div className="p-4 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-[1] bg-[rgba(0,15,152,0.3)] ">
                <p className=" absolute text-white cursor-pointer ">
                  Students reading and studying in the school library.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 ">Videos</h2>
          <div className="mx-[auto]  cursor-pointer  my-[80px] w-[90%]  items-center justify-between text-center grid  sm:grid-cols-1 lg:grid-cols-2    gap-4">
            <div className="flex  flex-col">
              <div className="h-[280px] shadow-md  rounded-lg  overflow-hidden">
                <video controls className=" w-full mb-4  ">
                  <source src={tour} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <p className="text-gray-800 font-bold">
                  Virtual tour of Springdale Public School.
                </p>
              </div>
            </div>
            <div className="flex  flex-col">
              <div className=" shadow-md    h-[295px] rounded-lg  overflow-hidden">
                <video controls className="w-full  mb-4 ">
                  <source src={annual_function} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <p className="text-gray-800  font-bold">
                  Highlights from the Annual Function 2023.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;
