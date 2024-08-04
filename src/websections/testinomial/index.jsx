import React from "react";
import Slider from "../../components/slider";
import { testinomials } from "../../global";

const TestinomialSection = () => {
  return (
    <div
      id="testinomialsection"
      className="w-full py-16 px-16 flex flex-col items-center justify-center min-h-52 text-center bg-primary text-black text-lg leading-relaxed "
    >
      <div className="">
        <h1 className="text-2xl font-bold mb-4  ">Testinomial</h1>
      </div>
      <div className="w-full  flex justify-around py-8">
        <Slider slides={testinomials} />
      </div>
    </div>
  );
};

export default TestinomialSection;
