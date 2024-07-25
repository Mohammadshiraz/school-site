import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home container1 flex items-center justify-center">
      <div className="items-center flex  flex-col max-w-[800px]">
        <div className="flex text-[60px] font-semibold mb-5 justify-center">
          Springdale Public School
        </div>
        <p className="max-w-3xl mt-[10px]  leading-6 mx-[auto] mb-[20px]">
          Welcome to Springdale Public School, where we nurture young minds for
          a brighter future
        </p>
        <button className=" bg-white text-black px-6 py-3 text-6 rounded-3xl cursor-pointer outline-0 border-0">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Home;
