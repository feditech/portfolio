import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full py-16 px-16 flex flex-col items-center justify-center min-h-52 text-center bg-black text-white text-lg leading-relaxed ">
      <div className="w-4/6">
        <h1 className="text-2xl font-bold mb-4  ">About Me</h1>
        <p className="text-base">
          I am a web developer specializing in the MERN stack, with a particular
          focus on React.js. I have a passion for creating efficient, scalable,
          and user-friendly web applications. With a background in computer
          science and several years of experience in the field, I have developed
          a strong understanding of the full web development lifecycle, from
          concept to deployment.
        </p>
      </div>
      <div className="w-full  flex justify-around py-8">
        <div>
          <h1 className="text-primary text-6xl font-bold">502 </h1>
          <p>Project done</p>
        </div>
        <div>
          <h1 className="text-primary text-6xl font-bold">10+ </h1>
          <p>Project done</p>
        </div>
        <div>
          <h1 className="text-primary text-6xl font-bold">27+ </h1>
          <p>Project done</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
