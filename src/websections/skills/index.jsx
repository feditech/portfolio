import React from "react";
import ServicesCard from "../../components/servicescard";
import ProgressBar from "../../components/linearprogessbar";
const SkillsSection = () => {
  return (
    <div
      id="servicesection"
      className="w-full py-16 px-16 flex flex-col items-center justify-center min-h-52 text-center bg-white text-black text-lg leading-relaxed"
    >
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Core Skills</h1>
        <p className="text-base">
          Explore the range of professional services I offer:
        </p>
      </div>

      <div className="w-4/5  grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-2 mt-10">
        <ProgressBar name={"ReactJs"} value={80} />
        <ProgressBar name={"Javascript"} value={70} />
        <ProgressBar name={"Redux"} value={80} />
        <ProgressBar name={"NextJs"} value={70} />
        <ProgressBar name={"AWS"} value={70} />
        <ProgressBar name={"NodeJs"} value={60} />
      </div>
    </div>
  );
};

export default SkillsSection;
